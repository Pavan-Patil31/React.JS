import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log("before", state.count);
            return { count: state.count + 1 };

        case 'DECREMENT':
            console.log("after", state.count);
            return { count: state.count - 1 };

 

        default:
            return state; 
    }
}

const CountReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Counter: {state.count}</p>
            {/* Use string literals directly */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            {/* <input type=''></input> */}

        </div>
    );
};

export default CountReducer;
 

