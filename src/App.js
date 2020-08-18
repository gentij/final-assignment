import React from 'react';

//style
import Style from './styles/app.module.css'
//components
import Header from './components/Header'

function App() {
  return (
    <div className={Style.app}>
      <Header />
    </div>
  );
}

export default App;
