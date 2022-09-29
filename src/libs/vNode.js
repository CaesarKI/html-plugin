class VNode{
  constructor(tagName,props,children=[]){
    this.tagName=tagName
    this.props=props
    this.children=children
  }
  appendChild(vNode){
    this.children.push(vNode)
  }
  insertChild(vNode){
    this.children.unshift(vNode)
  }
}

module.exports=VNode