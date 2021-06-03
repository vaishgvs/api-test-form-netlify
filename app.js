/*'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className=="light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
    console.log('current class name:' + className);
});


const switcher2 = document.querySelector('.btn2');
switcher2.addEventListener('click',function() {
    if(this.textContent == 100){
        this.textContent = Sum(1,2,3,4);
    }
    else{
        this.textContent = Sum(10,20,30,40);
    }
    console.log('current text content:' + this.textContent);
});
*/
/*var sum=Sum(a,b,c,d);

function Sum(a,b,c,d){
    return a + b + c + d;
}*/

/*
//require('log-timestamp');
function logSubmit(event){
    console.log('Form submitted! Time stamp:' );
    event.preventDefault();
}

let form = document.getElementById('form');
let number1 = form.elements[0];
let number2 = form.elements[1];
form.addEventListener('submit',(event) => {

})

const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);*/