import React, { useEffect } from 'react';
import AppRouter from './Routes';

class App extends React.PureComponent  {
  render(){
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
