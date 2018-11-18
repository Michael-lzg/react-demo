import React from 'react'
import ReactDOM from 'react-dom'

const MyComponent = {
  DatePicker: (props) => {
    return <div>看看是什么颜色{props.color}</div>
  }
}

function BlueDatePicker() {
  return <MyComponent.DatePicker color="blue" />
}

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}

function Item(props) {
  return <div>{props.message}</div>
}
function TodoList() {
  const lists = ['Jack','Tom', 'Mike'];
  return (<div>
    {lists.map((message) => {
      return <Item key={message} message={message}></Item>
    })}
  </div>)
}

const element = <div>
<BlueDatePicker></BlueDatePicker>
<NumberDescriber number="18"></NumberDescriber>
<TodoList></TodoList>
</div>
ReactDOM.render(element , document.getElementById('box'))