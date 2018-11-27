import React from 'react'
import ReactDOM from 'react-dom'

// 使用函数定义组件
function Hello1(props) {
  return  <div>我叫{props.name},我今年{props.age}</div> 
}

// es6使用类定义组件
class Hello2 extends React.Component{
  render() {
    return <div>我叫{this.props.name},我今年{this.props.age}</div>
  }
}

// 已经弃用
// var HelloMsg = React.createClass({
//   render: function() {
//     return <div>我叫{this.props.name},我今年{this.props.age}</div>
//   }
// })

// 嵌套组件
class HelloArr extends React.Component{
  render() {
    return <div>
      <Hello2 name="张三" age="18" />
      <Hello2 name="李四" age="19" />
      <Hello2 name="王五" age="28" />
    </div>
  }
}

// this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array。React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object
class NoteList extends React.Component{
  render() {
    return <div>
      { React.Children.map(this.props.children, (item)=>{
        return <div>{item}</div>
      }) }
    </div>
  }
}

const element = <div>
  <Hello1 name="小明" age="29" />
  <Hello2 name="小东" age="38" />
  <HelloArr />
  <NoteList>
    <Hello1 name="小明" age="29" />
    <Hello2 name="小东" age="38" />
  </NoteList>
  </div> 
ReactDOM.render(element, document.getElementById('box'))
