function getTotalBooksCount(books) {
  const total = books.length;
  return total
}

function getTotalAccountsCount(accounts) {
  const total = accounts.length;
  return total
}

function getBooksBorrowedCount(books) {
  let checkedOut = 0
    books.forEach((book)=> {
      if(book.borrows.find((borrow) => !borrow.returned)) {
        checkedOut++
      }    
    });
    return checkedOut
  }
  


  function getMostCommonGenres(books) {
    const commonGenres = [];
  
    for (let book of books) {
      const genre = commonGenres.find(
        (currentGenre) => currentGenre.name === book.genre
      );
      if (genre) {
        genre.count++;
      } else {
        commonGenres.push({ name: book.genre, count: 1 });
      }
    }
  
    return topFive(commonGenres);
  }
  
  function topFive(array) {
    let result = array
      .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
      .slice(0, 5);
  
    return result;
  }
  


function getMostPopularBooks(books) {
  const popBooks = []
  for(let book of books){
  let pop = book.borrows
  popBooks.push({ name: book.title, count: pop.length });
  }
  return topFive(popBooks)
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  
    for (let book of books) {
      let bookRental = book.borrows
      const author = popAuthors.find(
        (currentAuthor) => currentAuthor.name === book.authorId
      );
      if (author) {
        author.count+ bookRental.length;
      } else {
        popAuthors.push({ name: book.authorId, count: bookRental.length });
      }
    }

    popAuthors = popAuthors.map(author => {
      let authorFound = authors.find( data => data.id === author.name)
      return ({
        name: `${authorFound.name.first} ${authorFound.name.last}`,
        count: author.count
      })
    })
  
    return topFive(popAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
