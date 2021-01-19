import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const TodosReducers = useSelector((state) => state.TodosReducers);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => SubmitForm(e)}>
        <label htmlFor="text"></label>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          id="text"
          placeholder="Enter your todos"
        />
      </form>
    </div>
  );
};

export default TodoForm;
