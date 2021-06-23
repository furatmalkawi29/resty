
import React, { Component } from 'react'

import './form.scss'

 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       default:'',
       method:"get",
       url:'',
       body:''
    }
    this.showResults =this.showResults.bind(this);
  }
  

  inputHandler = (event) => {
    let property = event.target.name;
    this.setState({[property]:event.target.value});
  }



  async showResults (event) {
    event.preventDefault();

    let options = {
      method: this.state.method, // GET, POST, PUT, DELETE
       headers: {
         'Content-Type': 'application/json; charset=UTF-8'}};// body data type must match "Content-Type" header

         //add body property only when method isn't get
         if (this.state.method !=='get') 
         {
          Object.defineProperty(options, 'body',{ value:JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1})
          });
         }

    let response = await fetch(this.state.url, options ); 
    let responseData = await response.json(); //parse the response 

    let queryObj = JSON.stringify({ url:this.state.url,
      method:this.state.method,
      body:this.state.body
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



    let headers = {'content-type' : await response.headers.get('content-type')};
console.log(Object.values(localStorage));

    this.props.myHandler(responseData,headers);

    let defaultChange = ` ${this.state.method}  ${this.state.url}`;
    this.setState({default:defaultChange});
  }



  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.showResults}>
      <section className="input-sec">
        <input type="text" name="url" onChange={this.inputHandler}></input>
        <button>GO</button>
      </section>
      {/* default type for button inside form is:submit 
       we set it to: button, to prevent triggering submit event */}
      <section className="btn-sec">
         <textarea name="body" onChange={this.inputHandler}></textarea>
         <button type="button" name="method" value="get" onClick={this.inputHandler}>GET</button>
         <button type="button" name="method" value="post" onClick={this.inputHandler}>POST</button>
         <button type="button" name="method" value="put" onClick={this.inputHandler}>PUT</button>
         <button type="button" name="method" value="delete" onClick={this.inputHandler}>DELETE</button>
      </section>

      <section className="show-result">
        <p>
          {this.state.default}
        </p>
      </section>
      </form>
      </React.Fragment>
    )
  }
}

export default Form
