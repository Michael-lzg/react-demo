import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setPageTitle, setInfoList } from '../store/actions.js'

class Test extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { setPageTitle, setInfoList } = this.props

    // 触发setPageTitle action
    setPageTitle('新的title')

    // 触发setInfoList action
    setInfoList()
  }

  render() {
    // 从props中解构store
    let { pageTitle, infoList } = this.props
    console.log(pageTitle)
    console.log(infoList)
    // 使用store
    return (
      <div>
        <h1>{pageTitle}</h1>
        <button onClick={setInfoList}>加一个</button>
        {infoList.length > 0 ? (
          <ul>
            {infoList.map((item, index) => {
              return <li key={index}>{item.id}</li>
            })}
          </ul>
        ) : null}
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = state => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    setInfoList: data => dispatch(setInfoList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
