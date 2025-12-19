import { useState, useEffect } from "react";
import { addNewBook, getBooks } from './data/books.js'
import { Book } from "./book.jsx";
import { nanoid } from 'nanoid';

export const Books = () => {
    console.log('in render');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadBooks = async () => {
        setLoading(true);
        try {
            const books = await getBooks();
            setBooks(books);
        } catch (error) {
            console.log('something bad happen', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadBooks();
    }, [])
    const addBook = async (event) => {
        event.preventDefault();
        const newBook = {
            name: event.target.name.value,
            auther: event.target.auther.value,
            NumberOfLoan: event.target.NumberOfLoan.value,
            PublicationDate: event.target.PublicationDate.value,
            AvailableForLoan: event.target.AvailableForLoan.value,
            id: nanoid(3),
        }
        event.target.reset();
        const newBooks = await addNewBook(newBook);
        setBooks(newBooks);
    }
    return (
        <>
            <h1>book list</h1>
            <h4> {loading && 'loading....'} </h4>
            <h4> {error && 'something bad happen, try again later'} </h4>
            {books.map(b => <Book key={b.id} book={b} />)}
            <form onSubmit={addBook}>
                <input type="text" name="name" placeholder='name' required /> <br />
                <input type="text" name='auther' placeholder='auther' /> <br />
                <input type="number" name="NumberOfLoan" placeholder="NumberOfLoan" />
                <input type="date" name="PublicationDate" id="PublicationDate" />
                <input type="checkbox" name="AvailableForLoan" id="AvailableForLoan"/>
                <br />
                <button> add new book </button>
            </form>

        </>
    )
}