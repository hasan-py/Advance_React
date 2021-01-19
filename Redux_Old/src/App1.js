import React, { useState } from "react";
import { connect } from "react-redux";
import myaction from "./reducers/action";

const App = (props) => {
  const [name, setName] = useState("");

  const changeStateName = (e) => {
    setName(e.target.value);
  };

  const submitBtn = () => {
    props.changeName(name);
    setName("");
  };

  return (
    <div className="container m-5">
      <h2>My name is {props.stateName}</h2>
      <input
        value={name}
        onChange={(e) => changeStateName(e)}
        type="text"
        className="form-control col-sm-4 mb-3"
      />
      <button
        onClick={() => submitBtn()}
        type="button"
        className="btn btn-dark"
      >
        Change name
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stateName: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(myaction(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
