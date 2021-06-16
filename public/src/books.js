function findAuthorById(authors, id) {
  let result = authors.find((author)=> author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find((book)=> book.id === id)
  return result 
}

function partitionBooksByBorrowedStatus(books) {
  const [borrowed, notBorrowed] = 
  books.reduce((acc, book) => {
    acc[book.borrows.every((borrow)=>borrow.returned) ? 1 : 0].push(book);
    return acc;
  }, [[], []]);
  return [borrowed, notBorrowed]
}

                        
function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowHistory = book.borrows;  
  borrowHistory.forEach(borrow=>{
    let account = accounts.find(acct => acct.id === borrow.id);
    let acctData = account;
    acctData['returned'] =  borrow.returned;
    result.push(acctData);
  })
  console.log(result);
  return result.slice(0,10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
