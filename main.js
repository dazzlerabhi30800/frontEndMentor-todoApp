const theme = document.querySelector('.theme-logo');
const sun = document.querySelector('.theme-logo i');
const notesWrapper = document.querySelector('.notes-wrapper');
console.log(sun);

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

