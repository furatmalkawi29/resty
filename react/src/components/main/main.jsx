import React, { Component } from 'react'
import './main.scss'
import Home from '../../views/home'
import Help from '../../views/help'
import {Switch , Route } from 'react-router-dom'
import HistoryView from '../../views/HistoryView'

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


    return(
      <main>
        <Switch>
        <Route exact path="/">
        <Home  inputHandler ={this.inputHandler}
        formHandler= {this.formHandler}
        historyHandler= {this.historyHandler}
        loadingHandler= {this.loadingHandler }
        errorHandler= {this.errorHandler} state={this.state}/>
        </Route>

        <Route path="/help" component={Help}/>

        <Route path="/history">
          <HistoryView historyHandler={this.historyHandler}/>
          </Route>
      </Switch>
      </main>
    )
  }

}

export default Main

