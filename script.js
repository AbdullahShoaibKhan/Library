let myarray = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function submitdata() {
    
    let title = document.querySelector('#title').value;
    console.log(title);
    let author = document.querySelector('#author').value;
    console.log(author);
    let pages = document.querySelector('#pages').value;
    console.log(pages);
    let read = document.querySelector('#read').value;
    console.log(read);
    let newb2 = new Book(title, author, pages, read);
    myarray.push(newb2);
    
    console.log('me');
    console.log(newb2['title']);
    console.log('you');
    console.log(myarray);
    
    }

    let newb = new Book('ab', 'bd', '98', 'aw');
    let newb1 = new Book('ae', 'be', '98', 'ae');
    console.log(newb['pages']);
    myarray.push(newb);
    myarray.push(newb1);
    console.log(myarray);

/* add = document.querySelector('#add'); */
submit = document.querySelector('#submit');
/* edit = document.querySelector('#edit'); */
lib = document.querySelector('#library');
oldbook1 = document.querySelector('#oldbook');

lib.addEventListener('click', oldy);
function oldy() {
    myarray.forEach((myarray) => {
    
        bab = myarray;
        newDiv = document.createElement('div');
        
        let oldauthor = document.createElement('h2');
        oldauthor.innerText = `author: ${bab.author}`;
        newDiv.appendChild(oldauthor);
        console.log(bab.author);
        
        let oldtitle = document.createElement('h2');
        oldtitle.innerText = `title:${bab.title}`;
        newDiv.appendChild(oldtitle);
        console.log(bab.title);
        
        let oldpages = document.createElement('h2');
        oldpages.innerText = `pages:${bab.pages}`;
        newDiv.appendChild(oldpages);
        console.log(bab.pages);
        
        let oldread = document.createElement('h2');
        oldread.innerText = `read:${bab.read}`;
        newDiv.appendChild(oldread);
        
        console.log(bab.read);
        oldbook1.appendChild(newDiv);
        console.log(myarray);
    });
}

submit.addEventListener('click', submitdata);
