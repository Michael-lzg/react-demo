import './css/index.css' //导入css
import './css/color.scss' // 导入scss

import React from 'react'
import ReactDOM from 'react-dom'

const msg = '我是中国人，我爱自己的祖国!'
const user = { firstName: '王', astName: '小明' }
const blue = {
  color: 'blue',
  fontSize: '30px'
}
const arr = [
  { id: 1, name: '小明', age: 18 },
  { id: 2, name: '小红', age: 19 },
  { id: 3, name: '小天', age: 98 }
]
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}
function clickHandler() {
  alert('你点我啊!')
}
const element = (
  <div>
    <h1 className="red" onClick={clickHandler}>
      {msg}
    </h1>
    <h1 style={blue}>Hello, {formatName(user)}!</h1>
    {arr.map(item => {
      return <div>Hello, {item.name}!</div>
    })}
  </div>
)

ReactDOM.render(element, document.getElementById('box'))
