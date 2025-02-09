# vue-canvas

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

## Package usage

[Vuetify](https://vuetifyjs.com/en/getting-started/installation/#installation) is used for the UI components because of usage familiarity from my previous work with VueJS\
[VueKonva](https://konvajs.org/docs/vue/index.html) is used for the canvas and it has own library integrated with vue\
[Pinia](https://pinia.vuejs.org/introduction.html) is used for state management because its recommended by default in Vue CLI when initiating VueJS Project\
[TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) is used for styling because of its well known css framework\

## Design layout

Heavily focused on canvas container, by filling 2 / 3 of the screen width and the rest of 1/3 screen width is used for the data input and history input

## Folder Structure

Similar with initial boilerplate when using VueJS + Vite + Pinia + TailwindCSS

## How To Use

1. Install dependencies using pnpm install
2. Run development server using pnpm run dev
3. Open localhost on web browser
4. User can then start drawing either by freely drawing on the canvas or by selecting a shape and modifying its properties
5. User also able to see the changes on the canvas and the history of the changes in real time
