const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const p = document.querySelector('p');
let text = p.innerText
let iteration = 0;
function randomText(){
    
    let value = text.split("").map(function(char,index){
        console.log(char,index);
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random()*52)]
        
       
        
    }).join("")
    iteration += 0.35;
    p.innerText = value
    
}
p.addEventListener('mouseenter',()=>{
    iteration = 0;
    randomText()
})
setInterval(randomText,15)




