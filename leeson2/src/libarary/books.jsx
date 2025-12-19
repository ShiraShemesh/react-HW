import { getBooks } from "./data/books.js";
import { Book } from "./book.jsx";
export function Books() {
    const books = getBooks();
    return (
        <>
            <h1>book list</h1>
            {books.map(b => <Book key={b.id} book={b} />)}
             <form onSubmit={addBook}>
            <input type="text" name="name" placeholder='name'/> <br/>
            <input type="text" name='auther' placeholder='auther' /> <br />
            <select name='status'>
                <option>todo</option>
                <option>in progress</option>
                <option>done</option>
            </select> 
            <br />
            <button> add new task </button>
        </form>
        </>
    )
}