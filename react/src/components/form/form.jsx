
import React, { Component } from 'react'

import './form.scss'

 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       default:'',
       method:'',
       url:''
    }
  }
  

  inputHandler = (event) => {
    let property = event.target.name;
    this.setState({[property]:event.target.value});
  }

  showResults  = (event) =>{
    event.preventDefault();
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
