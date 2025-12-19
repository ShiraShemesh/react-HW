let books = [{ "id": 1, "name": "יוזבד","auther":"Maia Keinan", "NumberOfLoan": 10, "PublicationDate": "2020-01-01", "AvailableForLoan": true }, {
   "id": 2, "name": "שלום כיתה א'","auther":"Menucha Foks", "NumberOfLoan": 5, "PublicationDate": "2016-05-15", "AvailableForLoan": false
}, {
   "id": 3, "name": "הקיר הרביעי","auther":"D Rand", "NumberOfLoan": 8, "PublicationDate": "2021-03-22", "AvailableForLoan": true
}, {
  "id":4,  "name": "אדמה פראית","auther":"Maia Keinan", "NumberOfLoan": 12, "PublicationDate": "2018-11-30", "AvailableForLoan": true
}, {
  "id": 5,  "name": "הנורמלי האחרון","auther":"Ruti Kepler", "NumberOfLoan": 7, "PublicationDate": "2022-07-10", "AvailableForLoan": false
}];

export const getBooks = () => {
    return new Promise((resolve, reject) => {
        const num = Math.random() * 4;
        if (num >  4) {
            reject('something happen');
        } else {
            resolve([...books]);
        }
    })
}
export const addNewBook = (b) => {
    books.push(b);
    return Promise.resolve([...books]);
}
 