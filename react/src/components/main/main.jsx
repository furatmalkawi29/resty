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
       response: {}
    }

    this.formHandler = this.formHandler.bind(this);
  }
  
  
  formHandler(response,headers) {
console.log('called from Form');
this.setState({results:response.results, count:response.count, headers , response})
  }


  render() {
  return(
      <main>
        <Form myHandler={this.formHandler}/>
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers} response={this.state.response}/>
      </main>
    )
  }

}

export default Main

