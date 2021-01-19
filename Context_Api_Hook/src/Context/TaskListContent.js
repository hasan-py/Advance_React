import React, { createContext, useState } from "react";

export const TaskListContent = createContext();

const TaskListContentProvider = () => {
  const [data, setData] = useState({
    name: "Hasan",
    age: 18,
  });

  changeHandle = () => {
    setData({ name: "Emon", age: 4653 });
  };

  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.age}</p>
      <button onClick={changeHandle} type="button" class="btn btn-dark">
        Dark
      </button>
    </div>
  );
};

export default TaskListContentProvider;
