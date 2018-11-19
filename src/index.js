import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom"

function AuthExample() {
  return (
   <h2>hello world</h2>
  )
}

ReactDOM.render(<AuthExample></AuthExample>, document.getElementById('box'))
