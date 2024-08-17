// @ts-nocheck
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UnityParser from './utils/unityParser'

import './styles.css'

export default class UnityRichTextComponent extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    onBold: PropTypes.func,
    onItalic: PropTypes.func,
    onSize: PropTypes.func,
    onColor: PropTypes.func
  }

  static defaultProps = {
    onBold: () => {
      return { fontWeight: 'bold' }
    },
    onItalic: () => {
      return { fontStyle: 'italic' }
    },
    onSize: (size) => {
      return { fontSize: `${size}px` }
    },
    onColor: (color) => {
      return { color: color }
    }
  }

  constructor(props) {
    super()
    this.parser = new UnityParser()
  }

  parseElements(elements) {
    return elements.map((element) => {
      if (element.type === 'text') {
        return element.text
      } else if (element.type === 'element') {
        return this.createElementSpan(element)
      }
    })
  }

  createElementSpan(element) {
    const {
      onBold,
      onItalic,
      onSize,
      onColor
    } = this.props
    let style
    switch (element.name) {
      case 'b':
        style = onBold()
        break
      case 'i':
        style = onItalic()
        break
      case 'size':
        style = onSize(element.attributes.value)
        break
      case 'color':
        style = onColor(element.attributes.value)
        break
      default:
        console.error('unexpected tag')
        break
    }

    return (
      <span
        // className={styles.unityTextSpan}
        key={element.key}
        style={style}
      >
        {this.parseElements(element.elements)}
      </span>
    )
  }

  render() {
    const { children } = this.props
    const parsedChildren = this.parser.parse(children)

    return (
      this.parseElements(parsedChildren)
    )
  }
}
