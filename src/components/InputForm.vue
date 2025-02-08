<template>
  <div class="flex flex-col px-20 max-h-[350px]">
    <v-select
      label="Model"
      v-model="model"
      :items="['Circle', 'Rectangle', 'Text', 'Image']"
      variant="solo"
    ></v-select>

    <div v-if="model !== ''" class="flex gap-2">
      <v-text-field
        type="number"
        label="X"
        v-model="x"
        variant="solo"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        type="number"
        label="Y"
        v-model="y"
        variant="solo"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        v-if="model === 'Circle'"
        label="Radius"
        type="number"
        v-model="r"
        variant="solo"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        label="Font Size (px)"
        v-model="fontSize"
        type="number"
        variant="solo"
        @input="updateDrawing"
        v-if="model === 'Text'"
      ></v-text-field>
    </div>

    <div v-if="model === 'Rectangle' || model === 'Image'" class="flex gap-2">
      <v-text-field
        label="Width"
        v-model="width"
        type="number"
        variant="solo"
        @input="updateDrawing"
      ></v-text-field>
      <v-text-field
        label="Height"
        type="number"
        v-model="height"
        variant="solo"
        @input="updateDrawing"
      ></v-text-field>
    </div>

    <div v-if="model === 'Text'" class="flex gap-2">
      <v-text-field
        label="Content"
        v-model="content"
        @input="updateDrawing"
        variant="solo"
      ></v-text-field>
    </div>

    <v-text-field
      label="URL"
      v-model="url"
      variant="solo"
      v-if="model === 'Image'"
      @input="updateDrawing"
    ></v-text-field>

    <!-- <input v-model="x" type="number" placeholder="X" />
    <input v-model="y" type="number" placeholder="Y" />
    <input v-model="width" type="number" placeholder="Width" />
    <input v-model="height" type="number" placeholder="Height" />
    <button @click="addRectangle">Add Rectangle</button>
    <button @click="addCircle">Add Circle</button>
    <button @click="addText">Add Text</button>
    <button @click="addImage">Add Image</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      x: 0,
      y: 0,
      r: 0,
      width: 0,
      height: 0,
      content: '',
      fontSize: '',
      url: '',
      model: '',
      image: null,
    }
  },
  methods: {
    addRectangle() {
      this.$emit('add-shape', {
        type: 'rectangle',
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      })
    },
    addCircle() {
      this.$emit('add-shape', { type: 'circle', x: this.x, y: this.y, radius: this.r })
    },
    addText() {
      this.$emit('add-shape', {
        type: 'text',
        x: this.x,
        y: this.y,
        content: this.content,
        fontSize: this.fontSize,
      })
    },
    addImage() {
      const img = new Image()
      img.src = this.url

      this.$emit('add-shape', {
        type: 'image',
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        url: this.url,
        image: img,
      })
    },
    updateDrawing() {
      if (this.model === 'Circle') {
        this.addCircle()
      } else if (this.model === 'Rectangle') {
        this.addRectangle()
      } else if (this.model === 'Text') {
        this.addText()
      } else {
        this.addImage()
      }
    },
  },
})
</script>
