import { getBooks } from "./data/books.js";
import { useState, useEffect } from 'react'
export function Auther() {
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
  return (
    <>
      {books.map(b => b.auther+" , ")}
    </>
  )
}