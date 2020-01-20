import { h } from './h'
import render from './render'

// Replace VNode
// const prevVNode = h('div', null, '旧的 VNode')

// class MyComponent {
//   render() {
//     return h('div', null, '新的 VNode')
//   }
// }
// const nextVNode = h(MyComponent)

// render(prevVNode, document.getElementById('app'))

// render(nextVNode, document.getElementById('app'))


// Patch Element
// 旧的 VNode
const prevVNode = h('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  }
})

// 新的 VNode
const nextVNode = h('div', {
  style: {
    width: '100px',
    height: '100px',
    border: '1px solid green'
  }
})

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
