import { h, Fragment, Portal } from './h'
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
// const prevVNode = h('div', {
//   style: {
//     width: '100px',
//     height: '100px',
//     backgroundColor: 'red'
//   }
// })

// // 新的 VNode
// const nextVNode = h('div', {
//   style: {
//     width: '100px',
//     height: '100px',
//     border: '1px solid green'
//   }
// })

// const handler = () => alert('clicked')

// // 旧的 VNode
// const prevVNode = h('div', {
//   style: {
//     width: '100px',
//     height: '100px',
//     background: 'red'
//   },
//   onclick: handler
// })

// // 新的 VNode
// const nextVNode = h('div', {
//   style: {
//     width: '100px',
//     height: '100px',
//     background: 'green'
//   }
// })

// 旧的 VNode
// const prevVNode = h(Fragment, null, [
//   h('p', null, '旧片段子节点 1'),
//   h('p', null, '旧片段子节点 2')
// ])

// // 新的 VNode
// const nextVNode = h(Fragment, null, [
//   h('p', null, '新片段子节点 1'),
//   h('p', null, '新片段子节点 2')
// ])

// 挂载目标是 id="box1" 的元素
// const prevPortal = h(Portal, { target: '#box1' }, h('div'))

// // 挂载目标是 id="box2" 的元素
// const nextPortal = h(Portal, { target: '#box2' }, h('div'))

// render(prevVNode, document.getElementById('app'))

// // 2秒后更新
// setTimeout(() => {
//   render(nextVNode, document.getElementById('app'))
// }, 2000)

// 旧的 VNode
const prevVNode = h(
  Portal,
  { target: '#old-container' },
  h('p', null, '旧的 Portal')
)

// 新的 VNode
const nextVNode = h(
  Portal,
  { target: '#new-container' },
  h('p', null, '新的 Portal')
)

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)