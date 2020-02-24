import React from "react";
import ReactDOM from "react-dom";
import './css/style.css';
import Grid from './components/Grid';

class App extends React.Component{
  render(){
    return (
      <div className='Test'> < Grid/></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// console.log('hello')