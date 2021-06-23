import React, { Component } from 'react'
import Form from '../form/form.jsx'
import Results from '../results/results'
import './main.scss'



 class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count:0,
       results:[],
       headers:{},
       response: {},
       historyClick: {}
    }

    this.formHandler = this.formHandler.bind(this);
    this.historyHandler = this.historyHandler.bind(this);

  }
  
  
  formHandler(response,headers) {
console.log('called from Form');
this.setState({results:response.results, count:response.count, headers , response})
  }

  historyHandler(historyClick){
    console.log('calling from history')
    console.log(historyClick);
    this.setState({historyClick});
  }

  render() {
  return(
      <main>
        <Form historyClick ={this.state.historyClick} myHandler={this.formHandler}/>
        <Results historyHandler={this.historyHandler} count={this.state.count} results={this.state.results} headers={this.state.headers} response={this.state.response}/>
      </main>
    )
  }

}

export default Main

