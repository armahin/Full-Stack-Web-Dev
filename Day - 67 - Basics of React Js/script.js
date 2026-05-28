// Creating element with vanilla js

// let h2 = document.createElement('h2')
// h2.innerHTML = "Aree madarchod!"
// document.body.appendChild(h2);

// Creating element with React
// let container = document.querySelector(".container")
// let h1 = React.createElement('h1',null,"Hola! Mamacita! From React")
// let h2 = React.createElement('h2',null,"Arekta dilam bhoira!")
// let div = React.createElement('div',{id:'parent'},[h1,h2])

// var root = ReactDOM.createRoot(container);
// root.render(div);


import parent from "./parent.js";

var root = ReactDOM.createRoot(document.querySelector(".container"))

root.render(parent())