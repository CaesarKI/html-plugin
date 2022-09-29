const htmlParse=require('htmlparser2')
const VNode=require('./vNode')

module.exports =function parseString(html){
      const rootNode=new VNode('$root')
      let currentNode
      let zIndex=0
      const parser=new htmlParse.Parser({
        onopentag (name, attrs) {
          const vnode = new VNode(name, attrs)
          if (zIndex === 0) {
            vnode.parentNode = rootNode
            currentNode = vnode
            vnode.parentNode.appendChild(vnode)
          } else {
            vnode.parentNode = currentNode
            currentNode = vnode
            vnode.parentNode.appendChild(vnode)
          }
          zIndex++
        },
        ontext (text) {
          const textNode = new VNode('$text')
          textNode.innerText = text
          textNode.parentNode = currentNode
          currentNode && currentNode.children && currentNode.children.push(textNode)
        },
        onclosetag (tagName) {
          zIndex--
          if (zIndex > 0) {
            currentNode = currentNode.parentNode
          }
        }
      })
      parser.write(html)
      parser.end();
      return  rootNode
}