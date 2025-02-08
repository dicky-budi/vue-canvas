<template>
  <CanvasRenderer />
  <section class="flex flex-col gap-10">
    <InputForm />
    <HistoryList />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputForm from './components/InputForm.vue'
import CanvasRenderer from './components/CanvasRenderer.vue'
import HistoryList from './components/HistoryList.vue'

export default defineComponent({
  components: {
    InputForm,
    CanvasRenderer,
    HistoryList,
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
