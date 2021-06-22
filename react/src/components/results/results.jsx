import React, { Component } from 'react'
import './results.scss'


 class Results extends Component {
  render() {
    return (
      <section className="results-sec">
        <p><pre>{JSON.stringify({Headers: this.props.headers},null,'\t')}</pre></p>

        <p><pre>{JSON.stringify({Response: this.props.response},null,'\t')}</pre></p>
      </section>
    )
  }
}

export default Results
