class Boi{
    constructor(name,author,price,color){
        this.name = name;
        this.author = author;
        this.price = price;
        this.color = color;
    }

    pageultao(){
        console.log('The page is turned');
    }
    poroboita(){
        console.log('The book is read');
    }
    bookmarklagao(){
        console.log('Bookmarked');
    }
}

let boi1 = new Boi('Frankenstein','Mary Shelly',4129,'black');
console.log(boi1)
boi1.pageultao()

