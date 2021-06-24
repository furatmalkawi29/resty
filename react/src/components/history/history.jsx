import React, { Component } from 'react'
import './history.scss'

 class History extends Component {

  handleClicked = (event) => {
    console.log('from History: user clicked on query');
    let key = event.target.innerHTML.split(' ')[0];
    let clicked = JSON.parse(localStorage.getItem(key));

    this.props.historyHandler(clicked);
  }

  
  render() {
    return (
      <div className="history">
       { Object.values(localStorage).map((queryObj,index) =>

       <div onClick= {this.handleClicked} key={localStorage.key(index)}><pre>
         {localStorage.key(index)}     {JSON.parse(queryObj).method}           {JSON.parse(queryObj).url}
         </pre></div>
       )}
      </div>
    )
  }
}

export default History
