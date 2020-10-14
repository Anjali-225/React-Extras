import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_NOTES':
            return action.notes
        case 'ADD_NOTES':
            return [
                ...state,
                { title: action.title, body: action.body}
            ]
        case 'REMOVE_NOTES':
            return state.filter((note) => note.title !== action.title)
        default:
            return state
    }
}

const NoteApp = () => {
    // const notesData = JSON.parse(localStorage.getItem('notes'))
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ])
        dispatch({ type: 'ADD_NOTES', title, body})
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        // setNotes(notes.filter((note) => note.title !== title))
        dispatch({ type: 'REMOVE_NOTES', title })
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes){
            dispatch({ type: 'POPULATE_NOTES', notes })
            // setNotes(notesData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
               <Note key={note.title} note={note} removeNote={removeNote}/>
            ))}
            <p>Add note</p>
            <form onSubmit = {addNote}>
                <input value={title} onChange = {(e) => setTitle(e.target.value)}/>
                <textarea value={body} onChange={(e) => setBody(e.target.value) }></textarea>
                <button>add note</button>
            </form>
        </div>

    )
}

const Note = ({ note, removeNote }) => {
    useEffect(() => {
        console.log('Setting up effect')

        return () => {
            console.log('Cleaning up Effect')
        }
    }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)} >x</button>
        </div>
    )
}

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

// ReactDOM.render(<App count={0} />, document.getElementById('root'));
ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
