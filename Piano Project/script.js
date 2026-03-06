let keys = document.querySelectorAll('.major, .minor');
let body = document.body;
// Major keys 
let majorKeyMap = {
    'q': 'C1',
    'w': 'D1',
    'e': 'E1',
    'r': 'F1',
    't': 'G1',
    'y': 'A1',
    'u': 'B1',

    'i': 'C2',
    'o': 'D2',
    'p': 'E2',
    'a': 'F2',
    's': 'G2',
    'd': 'A2',
    'f': 'B2',
};

// Minor keys 
let minorKeyMap = {
    '2': 'Cs1',
    '3': 'Ds1',
    '5': 'Fs1',
    '6': 'Gs1',
    '7': 'As1',

    '9': 'Cs2',
    '0': 'Ds2',
    '=': 'Fs2',
    '-': 'Gs2',
    '[': 'As2',

    
};
body.addEventListener('keypress', function(event){
    // Check major keys
    if (majorKeyMap[event.key]) {

        console.log(majorKeyMap[event.key])
        let note = majorKeyMap[event.key];
        let audio = new Audio(`audio/First Octave/${note}.mp3`);
        audio.play();

        keys.forEach(function(val){
            if(val.textContent === note){
                val.style.boxShadow = 'none';
                val.style.backgroundColor = '#E0E0E0';
                val.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    val.style.transform = 'scale(1)';
                    val.style.boxShadow = '1px 3px 1px rgb(195, 195, 195)';
                    val.style.backgroundColor = 'white';
                    
                }, 150);
            }
        });
    }

    // Check minor keys
    if (minorKeyMap[event.key]) {
        let note = minorKeyMap[event.key];
        let audio = new Audio(`audio/First Octave/${note}.mp3`);
        audio.play();

        keys.forEach(function(val){
            if(val.textContent === note){
                val.style.backgroundColor = '#404040';
                val.style.transform = 'scale(0.97)';
                val.style.boxShadow = 'none';
                setTimeout(() => {
                    val.style.transform = 'scale(1)';
                    val.style.boxShadow = '1px 3px 1px rgb(195, 195, 195)';
                    val.style.backgroundColor = 'black';
                    
                }, 150);
            }
        });
    }
});
keys.forEach(function(val){
    val.addEventListener('click',function(){
        let note = val.textContent;
        let audio = new Audio(`audio/First Octave/${note}.mp3`);
        audio.play();
        if(val.textContent.includes('s')){
                val.style.backgroundColor = '#404040';
            }
            else{
                val.style.backgroundColor = '#E0E0E0';
            }
        
        val.style.transform = 'scale(0.97)';
        setTimeout(() => {
            val.style.transform = 'scale(1)';
            if(val.textContent.includes('s')){
                val.style.backgroundColor = 'black';
            }
            else{
                val.style.backgroundColor = 'white';
            }
            
        }, 160);
    })
})