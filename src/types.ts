export interface BasicShape {
  x: number
  y: number
  type: 'circle' | 'rectangle' | 'text' | 'image'
}

export interface AllShape extends BasicShape {
  radius: number
  width: number
  height: number
  fontSize: string
  content: string
  url: string
  image: HTMLImageElement
}

export type Circle = Omit<AllShape, 'width' | 'height' | 'url' | 'image' | 'fontSize' | 'content'>

export type Rectangle = Omit<AllShape, 'radius' | 'url' | 'image' | 'fontSize' | 'content'>

export type Text = Omit<AllShape, 'width' | 'height' | 'url' | 'image'>

export type Image = Omit<AllShape, 'radius' | 'fontSize' | 'content'>
