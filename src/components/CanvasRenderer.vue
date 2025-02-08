<template>
  <section class="canvas relative">
    <v-stage
      ref="stage"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      :config="{
        width: 900,
        height: 700,
      }"
    >
      <v-layer ref="layer">
        <v-line
          v-for="line in lines"
          :key="line"
          :config="{
            stroke: 'black',
            points: (line as any).points,
          }"
        />
        <div v-for="(shape, index) in shapes" :key="index">
          <v-text
            v-if="shape.type === 'text'"
            :config="{
              text: shape.content,
              fontSize: shape.fontSize,
              x: shape.x,
              y: shape.y,
            }"
          />
          <v-circle
            v-if="shape.type === 'circle'"
            :config="{
              x: shape.x,
              y: shape.y,
              radius: shape.radius,
              fill: 'black',
            }"
          />
          <v-rect
            v-if="shape.type === 'rectangle'"
            :config="{
              x: shape.x,
              y: shape.y,
              width: shape.width,
              height: shape.height,
              fill: 'black',
            }"
          />
          <v-image
            v-if="shape.type === 'image'"
            :config="{
              x: shape.x,
              y: shape.y,
              image: shape.image,
              width: shape.width,
              height: shape.height,
            }"
          />
        </div>
      </v-layer>
    </v-stage>
  </section>
</template>

<script lang="ts">
import { useInputStore } from "@/stores/shape";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: useInputStore().shapeInput,
      lines: [] as unknown[],
      isDrawing: false,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleMouseDown(e: any) {
      this.isDrawing = true;
      const pos = e.target.getStage().getPointerPosition();
      this.lines = [...this.lines, { points: [pos.x, pos.y] }];
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleMouseMove(e: any) {
      // no drawing - skipping
      if (!this.isDrawing) {
        return;
      }
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      const lastLine = this.lines[this.lines.length - 1] as unknown as {
        points: number[];
      };
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      // replace last
      this.lines.splice(this.lines.length - 1, 1, lastLine);

      useInputStore().addShape({
        type: "line",
        x: point.x,
        y: point.y,
      });
    },

    handleMouseUp() {
      this.isDrawing = false;
    },
  },
});
</script>
