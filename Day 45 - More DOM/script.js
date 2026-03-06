let inner = document.getElementById('inner');
let btn = document.querySelector('button');
let percentage = document.querySelector('h1');
   
count = 0;
btn.addEventListener('click', function(){
    
    let rand = Math.floor(10 + Math.random()*50)
    console.log("Your file downloaded in "+ rand/10 +" Seconds" )
    let time = setInterval(() => {
        count++
        percentage.innerHTML = count +"%";
        inner.style.width = count +"%";
        btn.style.pointerEvents = 'none';
    }, rand);
    setTimeout(() => {
        clearTimeout(time);
        btn.innerHTML = "Downloaded";
        btn.style.backgroundColor = 'rgb(114, 255, 182)'
    }, rand*100); 
    

})


