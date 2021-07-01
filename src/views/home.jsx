import React, { Component } from 'react'
import Form from '../components/form/form.jsx'

import Results from '../components/results/results'
import {If,Then,Else} from 'react-if'

class Home extends Component {
  render() {

    let input = {
      method:this.props.state.method,
      url:this.props.state.url,
      body:this.props.state.body
    }
    return (
      <React.Fragment>
                <Form loadingHandler={this.props.loadingHandler} formHandler={this.props.formHandler} inputHandler={this.props.inputHandler} errorHandler={this.props.errorHandler} input={input}/>

<Results historyHandler={this.props.historyHandler}>

<If condition={this.props.state.isloading}>
<img src={"https://media.tenor.com/images/5f1c57a4f18059b1bb946df247f8561d/tenor.gif"} alt="Loading" />
</If>


<If condition={this.props.state.error} >
<Then>
<p>{this.props.state.error}</p>
</Then>
<Else>
<If condition={this.props.state.response}>
<Then>
<section className="response"><div><pre>{JSON.stringify({Headers: this.props.state.headers},null,'\t')}</pre></div>
<div><pre>{JSON.stringify({Response: this.props.state.response},null,'\t')}</pre></div></section>
</Then>
</If>
</Else>
</If>       
</Results>

      </React.Fragment>
    )
  }
}

export default Home
