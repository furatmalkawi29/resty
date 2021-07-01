import React, { Component } from 'react'
import './history.scss'
import {If,Then} from 'react-if'
import {Redirect} from 'react-router-dom'

 class History extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isRedirect:false
    }
  }
  

  handleClicked = (event) => {
    
    // let ok = document.getElementById('historyDiv');
          //gets previous hits from localStorage
      let key = event.target.innerHTML.split(' ')[0];
      let clicked = JSON.parse(localStorage.getItem(key));

      //for home route call historyHandler in home.jsx
      if (this.props.route==="home"){
      this.props.historyHandler(clicked);
    } else {
      //for history route call historyRouteHandler in historyView.jsx
      this.props.historyRouteHandler(clicked.response,clicked.headers);
    }
  }


  handleRun= (event) =>{
    let key = event.target.id;
    let clicked = JSON.parse(localStorage.getItem(key));
    //populate form in home route and prepare for submit
    this.props.historyHandler(clicked);
    //redirect to home route
    this.setState({isRedirect:true})
  }

  render() {
    return (
      //renders previous hits 
      <div className="history">
       { Object.values(localStorage).map((queryObj,index) =>

       <div className="query" key={localStorage.key(index)}>
         <div>
         <pre onClick= {this.handleClicked}>
         {localStorage.key(index)}     {JSON.parse(queryObj).method}           {JSON.parse(queryObj).url}
         </pre>
         
         <If condition={this.props.route ==="history"}>
           <Then>
             <p>{JSON.parse(queryObj).body}</p>
           </Then>
         </If>
         </div>

         <If condition={this.props.route ==="history"}>
           <Then>
             <button onClick={this.handleRun} id={localStorage.key(index)}>Re-run</button>
           </Then>
         </If>
         </div>
       )}
       <If condition={this.state.isRedirect}>
         <Then>
         <Redirect to="/" />
         </Then>
       </If>
      </div>
    )
  }
}

export default History
