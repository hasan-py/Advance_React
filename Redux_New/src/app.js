import React from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import TotalTodoComponent from "./components/TotalTodoComponent";

import Store from "./redux/Store";

const App = (props) => {
  return (
    <Provider store={Store}>
      <TotalTodoComponent />
      <TodoForm />
    </Provider>
  );
};

export default App;
