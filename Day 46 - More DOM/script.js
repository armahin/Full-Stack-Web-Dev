let img = document.querySelector('img');
let ico = document.querySelector('.ri-poker-hearts-fill');
let h2 = document.querySelector('.heart2');

img.addEventListener("dblclick", function(){

    ico.style.opacity = '1';
    ico.style.transform = 'translateX(50%) translateY(-50%) scale(1) rotate(0deg)';
    
    h2.style.color = 'crimson';
    
     setTimeout(function(){
        ico.style.opacity = '0';
        ico.style.transform = 'translateX(50%) translateY(-300%) scale(0) rotate(-90deg)';
    },700)
    setTimeout(function(){
        ico.style.opacity = '0';
        ico.style.transform = 'translateX(50%) translateY(-50%) scale(0) rotate(-90deg)';
    },800)
    
   
    
})