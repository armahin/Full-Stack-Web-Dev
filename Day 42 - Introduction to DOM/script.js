var h1 = document.querySelector('h1');

var h2 = document.querySelector('h2');

h2.innerHTML = 'This is the new h2' ;
h1.style.color = 'teal';
h1.style.fontSize = '100px';
h1.style.backgroundColor = 'magenta';


var box = document.querySelector('#box');
box.innerHTML = 'Owwhh!! Click Me';
count = 1;
box.addEventListener('click', function() {
    box.innerHTML =  count;
    count = count+1;
    box.style.fontSize = '50px';
})
var resetButton = document.querySelector('button');

resetButton.addEventListener('click', function(){
    count = 1
    box.innerHTML = 'Owwhh!! Click Me';
    box.style.fontSize = '';
})
