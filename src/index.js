import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppActor from './Example/App_Actor'
import AppLifeCycle from './Example/App_LifeCycle'

ReactDOM.render(
  <React.StrictMode>
    {/* <AppActor/> */}
    {/* <AppLifeCycle /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);