import React from 'react'
import ReactDOM from 'react-dom'

class NewForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '', value1: '选择2'}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changSelect = this.changSelect.bind(this)
  }

  handleChange(event) {
    this.setState({value : event.target.value})
  }
  changSelect(event) {
    this.setState({value1 : event.target.value})
  }
  handleSubmit(event) {
    alert('提交了' + this.state.value1)
    event.preventDefault();   
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="提交" />
        <select value={this.state.value1} onChange={this.changSelect}>
          <option value="选择1">选择1</option>
          <option value="选择2">选择2</option>
          <option value="选择3">选择3</option>
        </select>
      </form>
    )
  }
}
const element = <div>
  <NewForm></NewForm>
</div>

ReactDOM.render(element, document.getElementById('box'))