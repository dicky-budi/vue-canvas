<template>
  <CanvasRenderer :shapes="shapes" />
  <section class="flex flex-col gap-10">
    <InputForm @add-shape="addShape" />
    <HistoryList :shapes="shapes" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputForm from './components/InputForm.vue'
import CanvasRenderer from './components/CanvasRenderer.vue'
import HistoryList from './components/HistoryList.vue'
import type { AllShape } from './types'
// import { useInputStore } from './stores/counter'

export default defineComponent({
  components: {
    InputForm,
    CanvasRenderer,
    HistoryList,
  },
  setup() {
    // const shapeInput = useInputStore()
    // shapeInput.addShape()
    const shapes = ref([])
    const addShape = (shape: AllShape) => {
      shapes.value.unshift(shape as never)
    }
    return { shapes, addShape }
  },
})
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
