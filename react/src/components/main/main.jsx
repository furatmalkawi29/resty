import React, { Component } from 'react'
import Form from '../form/form.jsx'
import Results from '../results/results'
import './main.scss'
import {If,Then,Else} from 'react-if'


 class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method:"get",
      url:'/',
      body:'',
       headers:null,
       response: null,
       isloading:false,
       error: null      
    }
  }

  inputHandler =(property,value) =>{
    this.setState({[property]:value});
  }
  
  
  formHandler = (response,headers) =>{
    // successful response then no errors
    //set error to null
    //to not render old errors with response
this.setState({headers , response, error:null})
  }

  historyHandler = (clicked)=> {
    let {method, url , body}= clicked;
    this.setState({method, url , body});
  }

  loadingHandler = (isloading) =>{
this.setState({isloading});
console.log("loading" + isloading);
  }
  
  errorHandler = (error)=>{
    this.setState({error});
  }


  render() {
    let input = {
      method:this.state.method,
      url:this.state.url,
      body:this.state.body
    }

    return(
      <main>
        <Form loadingHandler={this.loadingHandler} formHandler={this.formHandler} inputHandler={this.inputHandler} errorHandler={this.errorHandler} input={input}/>

        <Results historyHandler={this.historyHandler}>

   <If condition={this.state.isloading}>
   <img src={"https://media.tenor.com/images/5f1c57a4f18059b1bb946df247f8561d/tenor.gif"} alt="Loading" />
   </If>


<If condition={this.state.error} >
  <Then>
  <p>{this.state.error}</p>
  </Then>
<Else>
  <If condition={this.state.response}>
    <Then>
  <section className="response"><p><pre>{JSON.stringify({Headers: this.state.headers},null,'\t')}</pre></p>
<p><pre>{JSON.stringify({Response: this.state.response},null,'\t')}</pre></p></section>
</Then>
  </If>
</Else>
</If>       
        </Results>

      </main>
    )
  }

}

export default Main

