import React from 'react';
import Login from './Login'
import SimpleMap from './Map'


class App extends React.Component{
  render(){
    return (
     <div className="App">
    <Login />
    <SimpleMap />
     </div>
    );
  }
}

export default App;
