import convert, { Element as XMLJSElement, ElementCompact as XMLJSElementCompact } from 'xml-js'
import colorToHex from './colors'

export type UPElement = {
  type: 'element'
  name: string
  elements: (UPElement | XMLJSElement)[]
  key: number
};

const isUPElement = (element: XMLJSElement): element is UPElement => {
  return element.type === 'element'
};


export default class UnityRichTextParser {
  currentId: number
  constructor() {
    this.currentId = 0
  }

  addKeyToElements(elements: (XMLJSElement | UPElement)[]) {
    return elements.map((element) => {
      if (isUPElement(element)) {
        element.key = this.currentId++
        element.elements = [...this.addKeyToElements(element.elements ?? [])]
      }
      return element
    })
  }

  parse(text: string) {
    let result: XMLJSElement | XMLJSElementCompact = [
      {
        type: 'text',
        text: text
      }
    ]
    try {
      const convertColorSize = text.replace(/[^<]*(color|size)=[^>]*/g, (e) => {
        const data = e.split('=')
        return `${data[0]} value="${data[0] === 'color' ? colorToHex(data[1]) : data[1]}"`
      })
      const textToParse = `<unityText>${convertColorSize}</unityText>`
      // @ts-ignore
      result = convert.xml2js(textToParse, { compact: false, spaces: 4 })

      const { elements: { 0: { elements } } } = result
      return this.addKeyToElements(elements)
    } catch (e) {
      return result
    }
  }
}
