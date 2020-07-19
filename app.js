const list=document.querySelector('#book-list ul')

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement

        list.removeChild(li);
    }
})

//add books
const addform = document.forms['add-book'];

addform.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addform.querySelector("input[type='text']").value;

    //create element
    const li = document.createElement('li');
    const bookname = document.createElement('span');
    const deletebtn = document.createElement('span');

    // clas name
    bookname.classList.add('name');
    deletebtn.classList.add('delete');


    // add content
    deletebtn.textContent = 'Delete';
    bookname.textContent = value;

    //append to DOM
    li.appendChild(bookname);
    li.appendChild(deletebtn);
    list.appendChild(li);

    addform.reset();


})

const hide = document.querySelector('#hide');

hide.addEventListener('change',function(e){
    if(hide.checked){
        list.style.display = "none";
    }
    else{
        list.style.display = "initial";
    }
})

//filter books
const search = document.forms['search-books'].querySelector('input');

search.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }
        else{
            book.style.display = 'none';
        }
    })
})










