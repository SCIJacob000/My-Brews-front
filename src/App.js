import React from 'react';
import Header from './Header';
import GoogleApiWrapper from './Map'



class App extends React.Component{
  render(){
    console.log(process.env);
    return (
     <div className="App">
    <Header />
   <GoogleApiWrapper />
     </div>
    );
  }
}

export default App;
