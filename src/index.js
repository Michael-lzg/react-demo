import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
class Home extends React.Component{
  render() {
    return <h3>Home</h3>
  }
}
class About extends React.Component{
  render() {
    return <h3>About</h3>
  }
}
const Inbox = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <div><Link to={`${match.url}/messages/react`}>Rendering with React</Link></div>
    <div><Link to={`${match.url}/messages/java`}>Rendering with java</Link></div>
    <Route path={`${match.url}/messages/:id`} component={Message}/>
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>}/>
  </div>
) 

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

ReactDOM.render((
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
    </App>
  </Router>
), document.getElementById('box'))
