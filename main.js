const theme = document.querySelector('.theme-logo');
const sun = document.querySelector('.theme-logo i');
const notesWrapper = document.querySelector('.notes-wrapper');
const textWrapper = document.querySelectorAll('.text-wrapper');
const todo = document.querySelector('#todo')
const todoArrow = document.querySelector('.first i');
const notesCard = document.querySelectorAll('.notes-card');
const items = document.querySelector('.items span');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const inputText = document.querySelector('.input-text');
const note = document.querySelector('.note');
const form = document.querySelector('.input-wrapper');
const notesList = document.querySelector('#notes-list');
const crossTimes = document.querySelector('.notes-card .fa-times');
const filterList = document.querySelector('.filter-list');


document.addEventListener("DOMContentLoaded", getTodos);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = inputText.value;
    if(!task){
        alert('please input some value');
        return
    }

    const note_card = document.createElement('div');
    note_card.classList.add("notes-card");

    const text_wrapper = document.createElement("div");
    text_wrapper.classList.add("text-wrapper");

    const circle_div = document.createElement('div');
    circle_div.classList.add('circle');
    const check_icon = document.createElement("i");
    check_icon.classList.add('fas');
    check_icon.classList.add('fa-check');
    circle_div.appendChild(check_icon);

    const note_post = document.createElement('h2');
    note_post.classList.add('note');
    note_post.innerText = task;
    saveLocalTodos(inputText.value);

    let cross_icon = document.createElement('i');
    cross_icon.classList.add("fas");
    cross_icon.classList.add("fa-times");

    text_wrapper.appendChild(circle_div);
    text_wrapper.appendChild(note_post);

    note_card.appendChild(text_wrapper);
    note_card.appendChild(cross_icon);

    notesList.appendChild(note_card);



    // console.log(notesList.children.length);
    items.innerText = notesList.children.length;

    cross_icon.addEventListener('click', (e) => {
        note_card.remove();
        items.innerText = notesList.children.length;
    })


    text_wrapper.addEventListener('click', () => {
        console.log('clicked on the first click');
        circle_div.classList.toggle('active');
        check_icon.classList.toggle('active');
        note_post.classList.toggle('active');
    })
    
    inputText.value = "";

    one.addEventListener('click', (e) => {
        one.classList.add('active');
        two.classList.remove('active');
        three.classList.remove('active');
        note_card.style.display = "flex";
    });

    two.addEventListener('click', () => {
        one.classList.remove('active');
        two.classList.add('active');
        three.classList.remove('active');
        if(!note_post.classList.contains('active')){
            note_card.style.display = "flex";
        } else {
            note_card.style.display = "none";
        }
    });

    three.addEventListener('click', () => {
        one.classList.remove('active');
        two.classList.remove('active');
        three.classList.add('active');
        if(note_post.classList.contains('active')){
            note_card.style.display = "flex";
        } else {
            note_card.style.display = "none";
        }
    });



   
    
    

});

// Saving to the local todos 
function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function getTodos() {
    console.log("get todos working");
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){

        const note_card = document.createElement('div');
        note_card.classList.add("notes-card");

        const text_wrapper = document.createElement("div");
        text_wrapper.classList.add("text-wrapper");

        const circle_div = document.createElement('div');
        circle_div.classList.add('circle');
        const check_icon = document.createElement("i");
        check_icon.classList.add('fas');
        check_icon.classList.add('fa-check');
        circle_div.appendChild(check_icon);

        const note_post = document.createElement('h2');
        note_post.classList.add('note');
        note_post.innerText = todo;
    

        let cross_icon = document.createElement('i');
        cross_icon.classList.add("fas");
        cross_icon.classList.add("fa-times");

        text_wrapper.appendChild(circle_div);
        text_wrapper.appendChild(note_post);

        note_card.appendChild(text_wrapper);
        note_card.appendChild(cross_icon);

        notesList.appendChild(note_card);

        items.innerText = notesList.children.length;

    cross_icon.addEventListener('click', (e) => {
        note_card.remove();
        removeLocalTodos(note_post);
        items.innerText = notesList.children.length;
    })


    text_wrapper.addEventListener('click', () => {
        console.log('clicked on the first click');
        circle_div.classList.toggle('active');
        check_icon.classList.toggle('active');
        note_post.classList.toggle('active');
    })
    
    inputText.value = "";

    one.addEventListener('click', (e) => {
        one.classList.add('active');
        two.classList.remove('active');
        three.classList.remove('active');
        note_card.style.display = "flex";
    });

    two.addEventListener('click', () => {
        one.classList.remove('active');
        two.classList.add('active');
        three.classList.remove('active');
        if(!note_post.classList.contains('active')){
            note_card.style.display = "flex";
        } else {
            note_card.style.display = "none";
        }
    });

    three.addEventListener('click', () => {
        one.classList.remove('active');
        two.classList.remove('active');
        three.classList.add('active');
        if(note_post.classList.contains('active')){
            note_card.style.display = "flex";
        } else {
            note_card.style.display = "none";
        }
    });


    })

}


function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
   const todoIndex = todo.innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos", JSON.stringify(todos));
}





console.log(notesCard.length);
console.log(sun);









// inputText.addEventListener('change', updateValue);

// function updateValue(e) {
//     console.log(e.target.value)
//     if(todo.classList.contains('active')){
//         note.innerHTML = e.target.value;
//         console.log('clicked it is working');
//     }else {
//         console.log('It is not working');
//     }
// }


theme.addEventListener('click', () => {
    if(sun.classList.contains('fa-sun')){
        sun.classList.remove('fa-sun');
        sun.classList.add('fa-moon');
        if(window.innerWidth >= 800){
            document.body.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
        }else{
            document.body.style.backgroundImage = "url('images/bg-mobile-light.jpg')";
        }
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
        notesWrapper.style.backgroundColor = "white";
    }else{
        sun.classList.remove('fa-moon');
        sun.classList.add('fa-sun');
        if(window.innerWidth >= 800){
            document.body.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
        }else{
            document.body.style.backgroundImage = "url('images/bg-mobile-dark.jpg')"; 
        }
        document.body.style.backgroundColor = "hsl(234, 24%, 15%)"
        notesWrapper.style.backgroundColor = "rgb(24, 21, 43)";
    }
})


for(item of textWrapper) {
    item.addEventListener('click', handleClick);
}

// function handleClick(e) {
//     const targetItem = e.currentTarget;
//     console.log('clicked on an item');
    
//     const circle = targetItem.querySelector('.circle');
//     circle.classList.toggle('active');

//     const note = targetItem.querySelector('.note');
//     note.classList.toggle('active');

//     const arrow = targetItem.querySelector('.circle i');
//     arrow.classList.toggle('active');
// }



