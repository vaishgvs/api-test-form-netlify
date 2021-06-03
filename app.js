'use strict'
/*const switcher = document.querySelector('.btn');
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

/*

function logSubmit(event){
    console.log('Form submitted! Time stamp:' );
    event.preventDefault();
}

app.get('/sum', function(req,res){
    var sum = parseInt(req.query.First_Number) + parseInt(req.query.Second_Number);
    response={
        First_Number: req.query.First_Number,
        Second_Number:req.query.Second_Number,
        Sum: sum
    };
    console.log(response);
    res.end(JSON.stringify(response));
})*/


/*document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById("sum").value = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value);    
    console.log("submit done");
    
})*/


function sumtest(event){
    event.preventDefault();
    //document.getElementById("sum").value = parseInt(document.getElementById("no1").value) + parseInt(document.getElementById("no2").value);    
    console.log("handler function");
    var num1= parseInt(document.getElementById("no1").value);
    var num2= parseInt(document.getElementById("no2").value);
    var sum = sumdo(num1,num2);
    document.getElementById("sum").value = sum;    
}

function sumdo(a,b){
    return parseInt(a) + parseInt(b);
}
