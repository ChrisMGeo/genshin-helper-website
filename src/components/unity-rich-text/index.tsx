import UnityParser from './utils/unityParser'

import styles from './styles.module.css'

type UnityRichTextProps = {
  children: string,
  onBold?: () => object,
  onItalic?: () => object,
  onSize?: (size: number) => object,
  onColor?: (color: string) => object
};

const UnityRichTextComponent = ({ children, onBold = () => ({ fontWeight: 'bold' }), onItalic = () => ({ fontStyle: 'italic' }), onSize = (size) => ({ fontSize: `${size}px` }), onColor = (color) => ({ color: color }) }: UnityRichTextProps) => {
  const parser = new UnityParser();

  const parseElements = (elements: any | any[]) => {
    return elements.map((element: any) => {
      if (element.type === 'text') {
        return element.text
      } else if (element.type === 'element') {
        return createElementSpan(element)
      }
    })
  }
  const createElementSpan = (element: any) => {
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
        className={styles.unityTextSpan}
        key={element.key}
        style={style}
      >
        {parseElements(element.elements)}
      </span>
    )
  }

  const parsedChildren = parser.parse(children)

  return (
    parseElements(parsedChildren)
  )
};
export default UnityRichTextComponent;
