import React from 'react';

//style
import Style from './styles/app.module.css'
//components
import Header from './components/Header'
import Main from './components/main/Main'

function App() {
  return (
    <div className={Style.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
