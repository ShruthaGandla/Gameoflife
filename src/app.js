import React from "react";
import ReactDOM from "react-dom";
import './css/style.css';

class App extends React.Component{
  render(){
    return (
      <div className='Test'>Hello</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// console.log('hello')