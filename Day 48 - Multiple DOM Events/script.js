let img = document.querySelector('img');

let body = document.body
body.addEventListener('mousemove',function(det){
    img.style.left = det.x+ 'px'
    img.style.top = det.y + 'px'
})
