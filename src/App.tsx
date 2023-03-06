import React from 'react';
import {Outlet} from 'react-router-dom'
import GlobalStyleComponent from './components/styles/global';





const App = () => {
  return (
    <div className='App'>
      <>
        <GlobalStyleComponent/>
        
          <Outlet/>
        </>
       
    </div>
  );
}

export default App;
