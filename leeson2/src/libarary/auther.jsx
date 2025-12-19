import { getBooks } from "./data/books.js";
export function Auther(){
    const books = getBooks();
    return (
        <>
          {books.map(b => b.auther)}
        </>
    )
}