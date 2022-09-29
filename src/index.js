const fs=require('fs')
const path=require('path')
const parseString=require('./libs/parseString')
const parseAST=require('./libs/parseAST')

const html=path.resolve(__dirname,'../index.html')
const htmlStr= fs.readFileSync(html,{encoding:"utf8"})

const vdom= parseString(htmlStr)
const str=parseAST(vdom)

console.log(str);
