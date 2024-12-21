window.onload = function(){

let increase = document.getElementById('increase');
increase.addEventListener('click', function(){
    let number = document.getElementById('number');  
    number.value  ++;
    if (number.value > 0 || number.value != 0) {        
    number.style.color = "green";
    }else if(number.value == 0){
        number.style.color = "blue";
    }   
});
let decrease = document.getElementById('decrease');
decrease.addEventListener('click', function(){
    let number = document.getElementById('number'); 
    number.value --;
    if (number.value < 0) {       
        number.style.color = "red";
        }else if(number.value == 0){
            number.style.color = "blue";
        } 
});
let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    let number = document.getElementById('number');
    number.value = "0"; 
    if (number.value) {        
    number.style.color = "blue"; 
    }  
});
}