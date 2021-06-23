import React, { Component } from 'react'
import './results.scss'
import History from '../history/history'

 class Results extends Component {
  render() {

    return (
      <React.Fragment>
      <section className="results-sec">
      <History historyHandler={this.props.historyHandler}/>
        <p><pre>{JSON.stringify({Headers: this.props.headers},null,'\t')}</pre></p>

        <p><pre>{JSON.stringify({Response: this.props.response},null,'\t')}</pre></p>
      </section>
      </React.Fragment>
    )
  }
}

export default Results
