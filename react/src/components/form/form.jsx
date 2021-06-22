
import React, { Component } from 'react'

import './form.scss'

 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       default:'',
       method:"get",
       url:''
    }
    this.showResults =this.showResults.bind(this);
  }
  

  inputHandler = (event) => {
    let property = event.target.name;
    this.setState({[property]:event.target.value});
  }



  async showResults (event) {
    event.preventDefault();

    let response = await fetch(this.state.url, {
      method: this.state.method, // GET, POST, PUT, DELETE
      /* headers: {
         'Content-Type': 'application/json'},
         body: JSON.stringify(data) // body data type must match "Content-Type" header*/
    });
    let responseData = await response.json(); //parse the response 

    let headers = {'content-type' : await response.headers.get('content-type') };
              
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
