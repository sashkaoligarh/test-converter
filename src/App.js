import React from 'react'
import AppRouter from './Routes'
import Header from './Components/Header'

class App extends React.PureComponent {
  render(){
    return (
      <>
        <Header/>
        <AppRouter/>
      </>
    );
  }
}

export default App
