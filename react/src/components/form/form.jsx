
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
  

  takeUrl = (event) =>{
    this.setState({url:event.target.value})
  }

  takeMethod = (event) => {
    this.setState({method:event.target.name});
  }

  showResults  = () =>{
    let defaultChange = ` ${this.state.method}  ${this.state.url}`;
    this.setState({default:defaultChange});
  }

  render() {
    return (
      <React.Fragment>
      <section className="input-sec">
        <input type="text" onChange={this.takeUrl}></input>
        <button onClick={this.showResults}>GO</button>
      </section>

      <section className="btn-sec">
         <button name="Get" onClick={this.takeMethod}>GET</button>
         <button name="Post" onClick={this.takeMethod}>POST</button>
         <button name="Put" onClick={this.takeMethod}>PUT</button>
         <button name="Delete" onClick={this.takeMethod}>DELETE</button>
      </section>

      <section className="show-result">
        <p>
          {this.state.default}
        </p>
      </section>
      </React.Fragment>
    )
  }
}

export default Form
