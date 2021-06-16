function findAccountById(accounts, id) {
  let found = accounts.find((account)=> account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase()>accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let acctId = account.id;
  let borrowed = 0;
  books.forEach((book)=> {
    if(book.borrows.find((borrow) => acctId === borrow.id)) {
      borrowed++
    }    
  });
  return borrowed
}
function getBooksPossessedByAccount(account, books, authors) {
  let acctId = account.id;
  let borrowed = [];
  books.forEach((book) => {
    if(book.borrows.find((borrow) => acctId === borrow.id && !borrow.returned))  {
        borrowed.push(book)
    }
    });

  
    borrowed.forEach(book=>{
      let author = authors.find(person => person.id === book.authorId);
      book['author'] = author;
    })
    console.log(borrowed);
    return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
