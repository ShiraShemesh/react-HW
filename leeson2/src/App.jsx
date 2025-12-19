import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Books } from './libarary/books.jsx'
import { Auther } from './libarary/auther.jsx'
import './App.css'

function App() {
    const [showBooks, setShowBooks] = useState(false);
    const [showAuther, setShowAuther] = useState(false);
    const [name, setName] = useState('');
    const [input, setInpute] = useState(true);
    const showBooksClicked = () => {
        setShowBooks(!showBooks);
    }
    const showAutherClicked = () => {
        setShowAuther(!showAuther);
    }
    const setInputClicked = () => {
        setInpute(!input);
    }
    return (
        <>
            {input ? <input type='text' onInput={event => setName(event.target.value)} onDoubleClick={setInputClicked} placeholder='לסיום הקש 2 לחיצות' /> : ''}
            <h1>hello {name}</h1>
            <button onClick={showBooksClicked}>{showBooks ? 'hide' : 'show'} books</button>
            {showBooks ? <Books /> : ''}
            <button onClick={showAutherClicked}>{showAuther ? 'hide' : 'show'} Auther</button>
            {showAuther ? <Auther /> : ''}
        </>
    )

}
export default App