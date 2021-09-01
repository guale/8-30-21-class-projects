import logo from './logo.svg';
import './App.css';
import React from 'react';
import New from './New';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      name: "Bart",
    }
  }

  	
  shouldComponentUpdate(){
    console.log("Should component update");
  }
  componentDidUpdate(){
     console.log("Component did update");
  }
  componentDidMount(){
    console.log("Component did mount");
  }
  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render() {
    return(
      <div><New/></div>
    )
  }

}

export default App;
