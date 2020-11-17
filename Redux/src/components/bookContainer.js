import React from 'react';
import { buyBook } from "../redux/Actions"
import { connect } from 'react-redux'

const BookContainer = (props) => {
    return (
        <div className="container">
    	<h1>Number Of Book {props.numberOfBook}</h1>
    	<button onClick={()=> props.buyBook()} type="button" class="btn btn-dark">Buy Book</button>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfBook: state.numberOfBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: () => {
            dispatch(buyBook())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);