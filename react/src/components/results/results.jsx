import React, { Component } from 'react'
import './results.scss'
import History from '../history/history'

 class Results extends Component {
  render() {

    return (
      <React.Fragment>
      <section className="results-sec">
      <History historyHandler={this.props.historyHandler}/>
        {this.props.children}
      </section>
      </React.Fragment>
    )
  }
}

export default Results
