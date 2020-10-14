// import React, { useState, useEffect, useReducer } from 'react';
// import ReactDOM from 'react-dom';

// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('')

//     useEffect(() => {
//         console.log('This should only run once!')
//     }, [] )

//     useEffect(() => {
//         console.log('useEffect ran')
//         document.title = count
//     }, [count] )

//     const increment = () => {
//         setCount(count + 1)
//     }

//     const decrement = () => {
//         setCount(count - 1)
//     }

//     const reset= () => {
//         setCount(props.count)
//     }

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>Reset</button>
//             <input value={text} onChange={(e) => setText(e.target.value)}/> 
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }
