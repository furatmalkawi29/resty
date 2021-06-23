import React, { Component } from 'react'
import './history.scss'

 class History extends Component {

  handleQuery = (event) => {
    console.log('user clicked on query');
    let key = event.target.innerHTML.split(' ')[0];
    let clickQuery = JSON.parse(localStorage.getItem(key));

    this.props.historyHandler(clickQuery);
  }

  
  render() {
    return (
      <div className="history">
       { Object.values(localStorage).map((queryObj,index) =>
       <div onClick= {this.handleQuery} key={index}>
         {localStorage.key(index)} {JSON.parse(queryObj).method} {JSON.parse(queryObj).url}
         </div>
       )}
      </div>
    )
  }
}

export default History
