import { useState } from 'react';

export function Book({ book }) {
    if (book == null)
        return (<>error</>)
    let newBook = book.PublicationDate < Date() ? true : false;
    let highLoan = book.NumberOfLoan > 10 ? true : false;
    const [canLoan, setCanLoan] = useState(book.AvailableForLoan);
    function showLoanClicked() {
        setCanLoan(false);
    }
    return (
        <div style={highLoan ? { backgroundColor: '#b4d8f1ff' } : undefined}>
             <h2>Book Name: {book.name}</h2>
            <p>Number Of Loan: {book.NumberOfLoan}</p>
            <p>Publication Date: {book.PublicationDate}</p>
            <p>Available For Loan: {book.AvailableForLoan ? "Yes" : "No"}</p>
            {canLoan ? <button onClick={showLoanClicked}>Loan</button> : <button disabled style={{ backgroundColor: 'gray' }}>Not Available</button>}
            {newBook ? <p style={{ color: 'red' }}>New Book!</p> : <p>Old Book</p>}
           
        </div>
    )
}