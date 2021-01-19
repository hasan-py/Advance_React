import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = (props) => {
  const count = useSelector((state) => state.CounterReducer);
  const users = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(users);
  });

  return (
    <div className="container m-5">
      <h2>Counter</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        type="button"
        class="btn btn-dark mx-3"
      >
        +
      </button>
      {count}
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        type="button"
        class="btn btn-dark mx-3"
      >
        -
      </button>
      <hr />
      <ul className="list-group">
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <span className="float-left">{item.name}</span>
              </li>
            );
          })
        ) : (
          <p className="alert alert-warning">No user list</p>
        )}
      </ul>
    </div>
  );
};

export default Counter;
