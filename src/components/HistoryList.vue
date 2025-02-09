<template>
  <v-card
    title="Input History"
    variant="elevated"
    color="#EAEAEA"
    class="history-card grow max-h-[300px]"
  >
    <v-card-item>
      <ul class="overflow-y-scroll text-[#555555] list-none">
        <li v-for="(shape, index) in shapes" :key="index">
          <div class="flex flex-col">
            <div class="flex justify-between items-center">
              <div>{{ shape.type }}</div>
              <div class="flex gap-2 max-w-[75%] text-end">
                <v-chip>X: {{ shape.x }}</v-chip>
                <v-chip>Y: {{ shape.y }}</v-chip>
                <v-chip v-if="shape.type === 'circle'"
                  >Radius: {{ shape.radius }}</v-chip
                >
                <v-chip
                  v-if="shape.type === 'rectangle' || shape.type === 'image'"
                  >Width: {{ shape.width }}</v-chip
                >
                <v-chip
                  v-if="shape.type === 'rectangle' || shape.type === 'image'"
                  >Height: {{ shape.height }}</v-chip
                >
                <v-chip v-if="shape.type === 'text'"
                  >Font Size: {{ shape.fontSize }}</v-chip
                >
              </div>
            </div>

            <div v-if="shape.type === 'text'" class="mt-4">
              {{ shape.content }}
            </div>
            <div v-if="shape.type === 'image'" class="mt-4">
              {{ shape.url }}
            </div>
          </div>
          <v-divider class="mt-2 mb-3"></v-divider>
        </li>
      </ul>
    </v-card-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInputStore } from "@/stores/shape";

export default defineComponent({
  data() {
    return {
      shapes: useInputStore().shapeInput,
    };
  },
});
</script>
