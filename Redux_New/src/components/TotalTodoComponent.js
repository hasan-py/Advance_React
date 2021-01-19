import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TotalTodoComponent = (props) => {
  const TotalTodosReducers = useSelector((state) => state.TotalTodosReducers);

  return (
    <div className="container">
      Total Todo Component ={" " + TotalTodosReducers.totalTodos}
    </div>
  );
};

export default TotalTodoComponent;
