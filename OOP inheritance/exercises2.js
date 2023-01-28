class Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, bookDiscarded = false){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numberOfPages = numberOfPages;
        this.numberCheckedOut = numberCheckedOut;
        this.bookDiscarded = bookDiscarded;
    }
}

class Manual extends Book{
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, bookDiscarded = false){
        super(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, bookDiscarded);
    }
    
}