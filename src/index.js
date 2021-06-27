import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './Redux/index'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

require('dotenv').config()

const GlobalStyles = createGlobalStyle`
  html{
    width: 100%;
    min-height:100%;
  }
  body{
    width: 100%;
    min-height:100%;
  }
`
ReactDOM.render(
  <>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles/>
        <App />
      </ConnectedRouter>
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
