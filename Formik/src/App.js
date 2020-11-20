import React from 'react'
import './App.css';
// import FormWithUseFormik from './Components/FormWithUseFormik';
// import NewFormWithUseFormik from './Components/NewFormWithUseFormik';
import FormWithFormikComponent from './Components/FormWithFormikComponent';

const App = () => {

  return (
    <div className="container m-5">
    	{/*<FormWithUseFormik/>*/}
    	{/*<NewFormWithUseFormik/>*/}
    	<FormWithFormikComponent/>
    </div>
  )
}

export default App;

