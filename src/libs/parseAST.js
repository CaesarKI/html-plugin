

const parseProps = (props) => {
  if (!Object.keys(props).length) return ''
  const result = Object.keys(props).map((item) => {
    return ` ${item}=${props[item]}`
  })
  return result.join('')
}

module.exports = parseAST = (VNode) => {
  const htmlStr = []
  VNode.children.forEach((child) => {
    if (child.tagName === '$text') {
      htmlStr.push(child.innerText)
    } else {
      htmlStr.push(
        `<${child.tagName}${parseProps(child.props)}>${parseAST(child)}</${
          child.tagName
        }>`
      )
    }
  })
  return htmlStr.join('')
}
