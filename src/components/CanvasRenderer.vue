<template>
  <section class="canvas">
    <v-stage
      ref="stage"
      :config="{
        width: 900,
        height: 700,
      }"
    >
      <v-layer ref="layer">
        <div v-for="(shape, index) in shapes" :key="index">
          <v-text
            v-if="shape.type === 'text'"
            :config="{
              text: shape.content,
              fontSize: shape.fontSize,
              x: shape.x,
              y: shape.y,
              draggable: true,
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
import type { AllShape } from '@/types'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    shapes: Array<AllShape>,
  },
})
</script>
