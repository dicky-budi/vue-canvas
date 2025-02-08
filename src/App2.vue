<script lang="ts">
const width = window.innerWidth
const height = window.innerHeight

export default {
  data() {
    return {
      lines: [],
      isDrawing: false,
      configKonva: {
        width: 500,
        height: 500,
      },
      // configKonva: {
      //   width: 500,
      //   height: 500,
      // },
      configCircle: {
        x: 200,
        y: 200,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
      },
    }
  },
  methods: {
    handleMouseDown(e) {
      this.isDrawing = true
      const pos = e.target.getStage().getPointerPosition()
      this.lines = [...this.lines, { points: [pos.x, pos.y] }]
    },
    handleMouseMove(e) {
      // no drawing - skipping
      if (!this.isDrawing) {
        return
      }
      const stage = e.target.getStage()
      const point = stage.getPointerPosition()
      const lastLine = this.lines[this.lines.length - 1]
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y])

      // replace last
      this.lines.splice(this.lines.length - 1, 1, lastLine)
    },

    handleMouseUp() {
      this.isDrawing = false
    },
  },
}
</script>

<template>
  <main class="bg-black">
    <!-- <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage> -->

    <v-stage
      ref="stage"
      :config="configKonva"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      <v-layer ref="layer">
        <v-line
          v-for="line in lines"
          :key="line.id"
          :config="{
            stroke: 'black',
            points: line.points,
          }"
        />
      </v-layer>
    </v-stage>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
