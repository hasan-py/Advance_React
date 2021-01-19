import React, {
  Fragment,
  useReducer,
  createContext,
  useContext,
  useState,
} from "react";

const appState = {
  name: "hasan",
  age: 20,
};

const mycontext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "C":
      return {
        name: action.payload.name,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

const Coder2 = () => {
  const { data, dispatch } = useContext(mycontext);
  const [detail, setDetail] = useState({
    name: "",
    age: undefined,
  });

  const handleSubmit = (dispatch) => {
    dispatch({ type: "C", payload: { name: detail.name, age: detail.age } });
    setDetail({ name: "", age: "" });
  };

  return (
    <div>
      <h4>I am form Coder 2</h4>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <input
        value={detail.name}
        onChange={(e) => setDetail({ ...detail, name: e.target.value })}
        type="text"
        className="form-control col-sm-4 mb-3"
      />
      {
        <input
          value={detail.age}
          onChange={(e) => setDetail({ ...detail, age: e.target.value })}
          type="number"
          className="form-control col-sm-4 mb-3"
        />
      }
      <button
        onClick={() => handleSubmit(dispatch)}
        type="button"
        className="btn mr-2 btn-warning"
      >
        Change Name
      </button>
    </div>
  );
};

const Coder1 = () => {
  const { data, dispatch } = useContext(mycontext);
  const [detail, setDetail] = useState({
    name: "",
    age: undefined,
  });

  const handleSubmit = (dispatch) => {
    dispatch({ type: "C", payload: { name: detail.name, age: detail.age } });
    setDetail({ name: "", age: "" });
  };

  return (
    <div>
      <h4>I am form Coder 1</h4>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <input
        value={detail.name}
        onChange={(e) => setDetail({ ...detail, name: e.target.value })}
        type="text"
        className="form-control col-sm-4 mb-3"
      />
      {
        <input
          value={detail.age}
          onChange={(e) => setDetail({ ...detail, age: e.target.value })}
          type="number"
          className="form-control col-sm-4 mb-3"
        />
      }
      <button
        onClick={() => handleSubmit(dispatch)}
        type="button"
        className="btn mr-2 btn-info"
      >
        Change Name
      </button>
      <hr />
      <Coder2 />
    </div>
  );
};

const App = () => {
  const [data, dispatch] = useReducer(appReducer, appState);

  return (
    <mycontext.Provider value={{ data: data, dispatch: dispatch }}>
      <Fragment>
        <div className="container mt-5">
          <h4>I am Root Component</h4>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <button
            onClick={() =>
              dispatch({ type: "C", payload: { name: "Hasan", age: 20 } })
            }
            type="button"
            className="btn mr-2 btn-success"
          >
            Change Name
          </button>
          <hr />
          <Coder1 />
        </div>
      </Fragment>
    </mycontext.Provider>
  );
};

export default App;
