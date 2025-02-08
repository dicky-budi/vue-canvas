import { defineStore } from 'pinia'
import type { AllShape } from '@/types'

export const useInputStore = defineStore('input', {
  state: () => ({ shapeInput: [] }),
  actions: {
    addShape(shape: AllShape) {
      this.shapeInput.unshift(shape as never)
    },
  },
})
