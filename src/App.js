import React from 'react';
import Header from './Header';
import ParkSearch from './ParkSearch'
import './App.css'




class App extends React.Component{
  render(){
    console.log(process.env);
    return (
    <div className="App">
      <Header />
      <ParkSearch />
    </div>
    );
  }
}

export default App;
