import { h, Fragment, Portal } from './h'
import render from './render'

// VNode 示例一
// const dynamicClass = ['class-b', 'class-c']

// const elementVNode = h(
//   'div',
//   {
//     style: {
//       height: '100px',
//       width: '100px',
//       background: 'red'
//     },
//     class: ['class-a', dynamicClass]
//   },
//   h('div', {
//     style: {
//       height: '50px',
//       width: '50px',
//       background: 'green'
//     }
//   })
// )

// VNode 示例二
// const elementVNode = h('input', {
//   class: 'cls-a',
//   type: 'checkbox',
//   checked: true,
//   custom: '1'
// })

// VNode 示例三
// function handler() {
//   alert('click me')
// }

// const elementVNode = h('div', {
//   style: {
//     width: '100px',
//     height: '100px',
//     backgroundColor: 'red'
//   },
//   onclick: handler
// })

// VNode 示例四
// const elementVNode = h(
//   'div',
//   {
//     style: {
//       height: '100px',
//       width: '100px',
//       background: 'red'
//     }
//   },
//   h(Fragment, null, [
//     h('span', null, '我是标题1......'),
//     h('span', null, '我是标题2......')
//   ])
// )

// VNode 示例五
// const elementVNode = h(
//   'div',
//   {
//     style: {
//       height: '100px',
//       width: '100px',
//       background: 'red'
//     }
//   },
//   h(Portal, { target: '#portal-box' }, [
//     h('span', null, '我是标题1......'),
//     h('span', null, '我是标题2......')
//   ])
// )

// render(elementVNode, document.getElementById('app'))

// VNode 示例六 有状态组件的挂载
// class MyComponent {
//   render() {
//     return h(
//       'div',
//       {
//         style: {
//           background: 'green'
//         }
//       },
//       [
//         h('span', null, '我是组件的标题1......'),
//         h('span', null, '我是组件的标题2......')
//       ]
//     )
//   }
// }
// // h 函数的第一个参数是组件类
// const compVnode = h(MyComponent)
// render(compVnode, document.getElementById('app'))

// VNode 示例七 函数式组件的挂载
function MyFunctionalComponent() {
  // 返回要渲染的内容描述，即 VNode
  return h(
    'div',
    {
      style: {
        background: 'green'
      }
    },
    [
      h('span', null, '我是组件的标题1......'),
      h('span', null, '我是组件的标题2......')
    ]
  )
}

const compVnode = h(MyFunctionalComponent)
render(compVnode, document.getElementById('app'))