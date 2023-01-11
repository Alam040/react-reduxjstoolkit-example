import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increment_by_value, reset } from '../features/countSlice';

const CounterApp = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();
  return (
    <section>
        <h1 className='title'>Counter</h1>
        <div className='counter'>
            <h3>Count: {count}</h3>
            <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment_by_value(5))}>Increment by 5</button>
        </div>
        </div>
    </section>
  )
}

export default CounterApp;