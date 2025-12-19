import { useState } from 'react';

export function Book({ book }) {
    if (book == null)
        return (<>error</>)
    let newBook = book.PublicationDate < Date() ? true : false;
    let highLoan = book.NumberOfLoan > 10 ? true : false;
    const [canLoan, setCanLoan] = useState(book.AvailableForLoan);
    const [updateForm, setupdateForm] = useState(false);
    function showLoanClicked() {
        setCanLoan(false);
    }
    function updateClicked() {
        setupdateForm(true);
    }
    function update(event) {
        setupdateForm(false);
        try {
            if (event.target.name.value != '')
                book.name = event.target.name.value;
            if (event.target.auther.value != '')
                book.auther = event.target.auther.value;
            if (event.target.NumberOfLoan.value != '')
                book.NumberOfLoan = event.target.NumberOfLoan.value;
            if (event.target.PublicationDate.value != '')
                book.PublicationDate = event.target.PublicationDate.value;
            book.AvailableForLoan = event.target.AvailableForLoan.vale;
        }
        catch (error) {
            alert("wrong please try leter")
        }
    }
    return (
        <div style={highLoan ? { backgroundColor: '#b4d8f1ff' } : undefined}>
            <h2>Book Name: {book.name}</h2>
            <p>Auther : {book.auther}</p>
            <p>Number Of Loan: {book.NumberOfLoan}</p>
            <p>Publication Date: {book.PublicationDate}</p>
            <p>Available For Loan: {book.AvailableForLoan ? "Yes" : "No"}</p>
            {canLoan ? <button onClick={showLoanClicked}>Loan</button> : <button disabled style={{ backgroundColor: 'gray' }}>Not Available</button>}
            {<button onClick={updateClicked}>to update </button>}
            {newBook ? <p style={{ color: 'red' }}>New Book!</p> : <p>Old Book</p>}
            {updateForm ?
                <form onSubmit={update}>
                    <input type="text" name="name" placeholder='name' /> <br />
                    <input type="text" name='auther' placeholder='auther' /> <br />
                    <input type="number" name="NumberOfLoan" placeholder="NumberOfLoan" />
                    <input type="date" name="PublicationDate" id="PublicationDate" />
                    <input type="checkbox" name="AvailableForLoan" id="AvailableForLoan" />
                    <br />
                    <button> update </button>
                </form> : ''}
        </div>
    )
}