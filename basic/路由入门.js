import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Examples() {
  return <Router>
    <div>
      <div><Link to="/" className="mr10">Home</Link></div>
      <div><Link to="/about">about</Link></div>
      <div><Link to="/topics">topics</Link></div>
      {<hr />}
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/topics" component={Topics}></Route>
    </div>
  </Router>
}

function Home() {
  return <h2>Home</h2>
}
function About({ match }) {
  return (
    <div>
      <h2>about</h2>
      <div><Link to={`${match.url}/study`}>学习</Link></div>
      <div><Link to={`${match.url}/sleep`}>睡觉</Link></div>
      <div><Link to={`${match.url}/geme`}>打游戏</Link></div>
      <Route path={`${match.path}/study`} render={()=>{return <h3>学习</h3>}} />
      <Route path={`${match.path}/sleep`} render={()=>{return <h3>睡觉</h3>}} />
      <Route path={`${match.path}/game`} render={()=>{return <h3>打游戏</h3>}} />
      <Route exact path={match.path} render={() => <h3>你在干嘛.</h3>}/>
    </div>
  )
}
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <div><Link to={`${match.url}/html`}>Rendering with html</Link></div>
      <div><Link to={`${match.url}/react`}>Rendering with React</Link></div>
      <div><Link to={`${match.url}/java`}>Rendering with java</Link></div>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>}/>
    </div>
  )
}
function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

ReactDOM.render(<Examples></Examples>, document.getElementById('box'))
