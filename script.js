let myLibrary = [
    {name: "Harry Potter",
    author: "JKR",
    status: "read",    
    },
    {name: "Alice in wonderland",
    author: "LC",
    status: "not read",    
    },
];

class Book{
    constructor(name, author, status){
        this.name = name;
        this.author = author;
        this.status = status;
    }
}

function addBookToLibrary(){
    const newBook =  new Book($name.value, $author.value, $status.value);
    myLibrary.push(newBook);
}

const newBookBtn = document.getElementById("newBookBtn");
const changeStatusBookBtn = document.getElementById("changeStatusBookBtn");
const deleteBookBtn = document.getElementById("deleteBookBtn");

newBookBtn.addEventListener("click", () => {
    console.log("clickearon el boton newBookBtn\n");
});
changeStatusBookBtn.addEventListener("click", () => {
    console.log("clickearon el boton changeStatusBookBtn\n");
});
deleteBookBtn.addEventListener("click", () => {
    console.log("clickearon el boton deleteBookBtn\n");
});
