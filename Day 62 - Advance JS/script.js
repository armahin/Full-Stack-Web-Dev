// Promises
// async await
// settimeout settinterval 

// Promises - Ekta kaaj jeye koro etare bole pending state ekhon 2 ta jinish hoite pare ekta hocche kaaj hoye gese (resolved) arekta hoynai (reject)
const prm = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject();
    }, 10000);
})

prm.then(function(){
    console.log("Data Ashche mama")
})

prm.catch(()=>{
    console.log("Dhet madarchod data ashenai")
})

// Fetching 

fetch(`https://randomuser.me/api/`).then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data.results[0].name.first);
}).catch(()=>{
    console.error("Data didn't fetch!")
})


// Try and Catch

try{
    console.log(a.name)
}catch(err){
    console.log("HUUP")
}

