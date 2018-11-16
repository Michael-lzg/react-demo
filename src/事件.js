import React from 'react'
import ReactDOM from 'react-dom'

class Popper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: "Hello World"}
    // this.preventPop = this.preventPop.bind(this)
  }

  preventPop(name,e) {
    e.preventDefault();
    alert(name)
  }
  render() {
    return(
      <div>
        <p>{this.props.msg}</p>
        <a href="www.baidu.com" onClick={this.preventPop.bind(this,this.state.name)}>{this.state.name}</a>
      </div>
    )
  }
}
const element = <Popper msg="我是中国人"></Popper>
ReactDOM.render(element, document.getElementById('box'))