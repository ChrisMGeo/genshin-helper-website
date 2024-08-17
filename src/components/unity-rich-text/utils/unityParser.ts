// @ts-nocheck
import convert from 'xml-js'
import colorToHex from './colors'

export default class UnityRichTextParser {
  constructor() {
    this.currentId = 0
  }

  addKeyToElements(elements) {
    return elements.map((element) => {
      if (element.type !== 'element') return element
      element.key = this.currentId
      this.currentId++
      element.elements = [...this.addKeyToElements(element.elements)]
      return element
    })
  }

  parse(text) {
    let result = [
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
      result = convert.xml2js(textToParse, { compact: false, spaces: 4 })

      const { elements: { 0: { elements } } } = result
      return this.addKeyToElements(elements)
    } catch (e) {
      return result
    }
  }
}
