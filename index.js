const loader = document.querySelector('.loader');
const main =document.querySelector('.main')


function init(){
    setTimeout(() =>{
        loader.getElementsByClassName.opacity = 0;
        loader.getElementsByClassName.display= 'none'

        main.style.display ='block';
        main.style.opacity = 1;
    }, 8000);
}

// call function 
init();