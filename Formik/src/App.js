import React from "react";
import "./App.css";
// import FormikComponent from './Components/FormikComponent';
// import NewUseFormik from './Components/NewUseFormik';
// import UseFormik from './Components/UseFormik';
import FormikWithRenderMethod from "./Components/FormikWithRenderMethod";

const App = () => {
  return (
    <div className="container m-5">
      {/*<FormikComponent/>*/}
      {/*<NewUseFormik/>*/}
      {/* <UseFormik/> */}
      <FormikWithRenderMethod />
    </div>
  );
};

export default App;
