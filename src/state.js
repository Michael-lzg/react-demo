import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      age: 25,
      date: new Date()
    }
  }
  render() {
    return (
      <div>
        <h1>Hello,{this.state.name},{this.state.age}</h1>
        <h2>Hello,{this.props.name},{this.props.age}</h2>
        <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}


const element = <Clock name="Jack" age="36"></Clock>

ReactDOM.render(element, document.getElementById('box'))