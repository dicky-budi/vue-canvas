<template>
  <v-card class="grow px-6 py-8" variant="elevated" color="#252525">
    <v-select
      label="Model"
      v-model="model"
      :items="['Circle', 'Rectangle', 'Text', 'Image']"
    ></v-select>

    <div v-if="model !== ''" class="flex gap-2">
      <v-text-field
        type="number"
        label="X"
        v-model="x"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        type="number"
        label="Y"
        v-model="y"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        v-if="model === 'Circle'"
        label="Radius (px)"
        type="number"
        v-model="r"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        label="Font Size (px)"
        v-model="fontSize"
        type="number"
        @input="updateDrawing"
        v-if="model === 'Text'"
      ></v-text-field>
    </div>

    <div v-if="model === 'Rectangle' || model === 'Image'" class="flex gap-2">
      <v-text-field
        label="Width"
        v-model="width"
        type="number"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        label="Height"
        type="number"
        v-model="height"
        @input="updateDrawing"
      ></v-text-field>
    </div>

    <div v-if="model === 'Text'" class="flex gap-2">
      <v-text-field
        label="Content"
        v-model="content"
        @input="updateDrawing"
      ></v-text-field>
    </div>

    <v-text-field
      label="URL"
      v-model="url"
      v-if="model === 'Image'"
      @input="updateDrawing"
    ></v-text-field>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInputStore } from "@/stores/shape";

export default defineComponent({
  data() {
    return {
      x: 0,
      y: 0,
      r: 0,
      width: 0,
      height: 0,
      content: "",
      fontSize: "",
      url: "",
      model: "",
      image: null,
      storeInput: useInputStore(),
    };
  },
  methods: {
    addRectangle() {
      this.storeInput.addShape({
        type: "rectangle",
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      });
    },
    addCircle() {
      this.storeInput.addShape({
        type: "circle",
        x: this.x,
        y: this.y,
        radius: this.r,
      });
    },
    addText() {
      this.storeInput.addShape({
        type: "text",
        x: this.x,
        y: this.y,
        content: this.content,
        fontSize: this.fontSize,
      });
    },
    addImage() {
      let img = new Image();
      img.src = this.url;
      img.onload = () => {
        // set image only when it is loaded
        this.storeInput.addShape({
          type: "image",
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          url: this.url,
          image: img,
        });
      };
      img.onerror = () => {
        // reset img variable
        img = new Image();
        this.storeInput.addShape({
          type: "image",
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          url: this.url,
          image: img,
        });
      };
    },
    updateDrawing() {
      if (this.model === "Circle") {
        this.addCircle();
      } else if (this.model === "Rectangle") {
        this.addRectangle();
      } else if (this.model === "Text") {
        this.addText();
      } else {
        this.addImage();
      }
    },
  },
});
</script>
