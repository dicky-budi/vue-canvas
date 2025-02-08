import { defineStore } from "pinia";
import type { AllShape } from "@/types";

export const useInputStore = defineStore("input", {
  state: () => ({ shapeInput: [] }) as { shapeInput: AllShape[] },
  actions: {
    addShape(shape: Partial<AllShape>) {
      this.shapeInput.unshift(shape as never);
    },
  },
});
