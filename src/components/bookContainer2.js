import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import {buyBook} from '../redux';
export default function BookContainer2() {
    const numberOfBooks=useSelector(
        state=>state.numberOfBooks
    );
    const dispatch=useDispatch();
    return (
        <div>
            Book Store using redux hooks
            <h1>Number of Books - {numberOfBooks}</h1>
            <button onClick={()=>dispatch(buyBook())}>Click to Buy Book</button>
        </div>
    )
}

 