
import React, { Component } from 'react'

import './form.scss'

 class Form extends Component {
  

  changeHandler = (event) => {
    this.props.inputHandler(event.target.name, event.target.value) 
  }



   showResults = async (event) => {
    event.preventDefault();
    let response;
    
    try{
    //loading started
    this.props.loadingHandler(true);
    //---------------------------------fetch url :
    let options = {
      method: this.props.input.method,
       headers: {
          // body data type must match "Content-Type" header
         'Content-Type': 'application/json; charset=UTF-8'}};


         //add body property only when method isn't get
         if (this.props.input.method !=='get') 
         {
           console.log( this.props.input.body);
          Object.defineProperty(options, 'body',{ value: this.props.input.body
          });
         } 
         /* in browser body should follow json obj rules:
         - both key and value are double-quoted "title":"hello" 
         - no comma after last property */

     response = await fetch(this.props.input.url, options );

    let responseParsed = await response.json(); //parse the response
    let headers = {'content-type' : await response.headers.get('content-type')};

    
    this.props.formHandler(responseParsed,headers);

     //loading ended
    this.props.loadingHandler(false);


    
    //-------------------------- adding to localStorage
    let queryObj = JSON.stringify({ url:this.props.input.url,
      method:this.props.input.method,
      body:this.props.input.body
    });
   
    // to set unique key
    let key = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    //check if request exist in localStorage : true exist
   let isAvailable = Object.values(localStorage).includes(queryObj);

    if (response.ok &&!isAvailable)//check if request was successful && not in localStorage
    {localStorage.setItem(key(),
      queryObj);}

    }catch (error){
      //error.message instead of error 
      //not acceptable to render objects
      this.props.errorHandler(error.message);
      }
      
  }



  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.showResults}>
      <section className="input-sec">
        <input type="text" name="url"  value={this.props.input.url}
 onChange={this.changeHandler}></input>
        <button>GO</button>
      </section>

      {/* default type for button inside form is:submit */}
      <section className="btn-sec">
         <textarea name="body" value={this.props.input.body} onChange={this.changeHandler}></textarea>
         <button type="button" name="method" value="get"  onClick={this.changeHandler}>GET</button>
         <button type="button" name="method" value="post"  onClick={this.changeHandler}>POST</button>
         <button type="button" name="method" value="put"  onClick={this.changeHandler}>PUT</button>
         <button type="button" name="method" value="delete"  onClick={this.changeHandler}>DELETE</button>
      </section>
      </form>
      </React.Fragment>
    )
  }
}

export default Form
