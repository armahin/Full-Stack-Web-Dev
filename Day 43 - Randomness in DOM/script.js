arr = [
    {
        team: "Chennai Super Kings",
        captain: "MS Dhoni",
        primary: "#FFCB03",
        secondary: "#3B51A4"
    },
    {
        team: "Mumbai Indians",
        captain: "Hardik Pandya",
        primary: "#004BA0",
        secondary: "#D1AB3E"
    },
    {
        team: "Royal Challengers Bengaluru",
        captain: "Faf du Plessis",
        primary: "#EC1C24",
        secondary: "#000000"
    },
    {
        team: "Kolkata Knight Riders",
        captain: "Shreyas Iyer",
        primary: "#3A225D",
        secondary: "#D4AF37"
    },
    {
        team: "Delhi Capitals",
        captain: "Rishabh Pant",
        primary: "#004C93",
        secondary: "#EF1B23"
    },
    {
        team: "Rajasthan Royals",
        captain: "Sanju Samson",
        primary: "#FF69B4",
        secondary: "#1C1C1C"
    },
    {
        team: "Sunrisers Hyderabad",
        captain: "Pat Cummins",
        primary: "#F26522",
        secondary: "#000000"
    },
    {
        team: "Punjab Kings",
        captain: "Shikhar Dhawan",
        primary: "#ED1B24",
        secondary: "#A7A9AC"
    },
    {
        team: "Gujarat Titans",
        captain: "Shubman Gill",
        primary: "#1C1C1C",
        secondary: "#0F3057"
    },
    {
        team: "Lucknow Super Giants",
        captain: "KL Rahul",
        primary: "#A72056",
        secondary: "#0057E2"
    }
]

let btn = document.querySelector("button");
let box = document.querySelector("#box");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
btn.addEventListener("click",function(){
    rand = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[rand].team;
    h1.style.color = arr[rand].secondary;
    h1.style.fontSize = "30px";
    h2.innerHTML = arr[rand].captain;
    h2.style.fontSize = "20px";
    box.style.backgroundColor = arr[rand].primary;
    btn.style.backgroundColor = arr[rand].secondary;
    btn.style.color = "white";
})
