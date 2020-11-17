import React from 'react';
import { buyBook, changeMulti } from "../redux/Actions"
import { useSelector, useDispatch } from 'react-redux';

const HookBookContainer = () => {
    const numberOfBook = useSelector(state => state.numberOfBook)
    const dispatch = useDispatch()
    return (
        <div className="container">
          <hr/>
          <h1>Hook Use</h1>
          <hr/>
          <h1>Number Of Book {numberOfBook}</h1>
          <button onClick={()=> dispatch(buyBook())} type="button" class="btn btn-dark">Buy Book</button>
          <button onClick={()=> dispatch(changeMulti("Hola"))} type="button" class="btn btn-dark">Buy Book</button>
        </div>
    )
}

export default HookBookContainer