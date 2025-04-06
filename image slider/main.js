let slideimages =document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

var counter = 0;

next.addEventListener('click',slidenext);
function slidenext(){
    slideimages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideimages.length-1)
    {
        counter=0
    }
    else
    {
        counter++;
    }
    slideimages[counter].style.animation ='next2 0.5s ease-in forwards';
}
prev.addEventListener('click',slideprev);
function slideprev(){
    slideimages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0)
    {
        counter=slideimages.length-1
    }
    else
    {
        counter--;
    }
    slideimages[counter].style.animation ='prev2 0.5s ease-in forwards';
}
