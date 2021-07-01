import React, { Component } from 'react'
import '../components/results/results.scss'
import History from '../components/history/history'
import {If,Then,Else} from 'react-if'

 class HistoryView extends Component {
   constructor(props){
     super(props);
     this.state ={
       response: null,
       headers: null
     }
   }

  historyRouteHandler= (response,headers)=> {
    console.log('hello from history view');
    this.setState({response,headers}) 
  }

  render() {
    return (
   <React.Fragment>
     
    <section className="results-sec">
    <History route="history" historyHandler={this.props.historyHandler} historyRouteHandler = {this.historyRouteHandler} />

    <If condition={this.state.response}>
    <Then>
    <section className="response"><div><pre>{JSON.stringify({Headers: this.state.headers},null,'\t')}</pre></div>
    <div><pre>{JSON.stringify({Response: this.state.response},null,'\t')}</pre></div></section>
    </Then>
    </If>
    </section>

   </React.Fragment>
    )
  }
}

export default HistoryView
