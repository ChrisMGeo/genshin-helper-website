// @ts-nocheck
export default function colorToHex(color) {
  const colorMap = {
    'aqua': '#00ffff',
    'black': '#000000',
    'blue': '#0000ff',
    'brown': '#a52a2a',
    'cyan': '#00ffff',
    'darkblue': '#0000a0',
    'fuchsia': '#ff00ff',
    'green': '#008000',
    'grey': '#808080',
    'lightblue': '#add8e6',
    'lime': '#00ff00',
    'magenta': '#ff00ff',
    'maroon': '#800000',
    'navy': '#000080',
    'olive': '#808000',
    'orange': '#ffa500',
    'purple': '#800080',
    'red': '#ff0000',
    'silver': '#c0c0c0',
    'teal': '#008080',
    'white': '#ffffff',
    'yellow': '#ffff00'
  }

  const hexReg = /#[a-fA-F0-9]{6,8}/
  if (hexReg.test(color)) {
    return color
  } else if (colorMap[color]) {
    return colorMap[color]
  } else {
    console.error('invalid color choice')
    return colorMap['red']
  }
}
