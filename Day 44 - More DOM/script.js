const quotes = [
"The universe rewards curiosity.",
"Small steps still move mountains.",
"Clarity is a form of courage.",
"Every expert once fumbled the basics.",
"Patience is quiet power.",
"Good questions build better worlds.",
"Chaos is often a doorway to creativity.",
"Truth survives careful inspection.",
"Learning compounds like interest.",
"Action beats endless planning.",
"The mind grows where wonder lives.",
"Simple ideas often travel farthest.",
"Progress hides in daily habits.",
"A calm mind sees deeper patterns.",
"Reality is stranger than fiction.",
"Observation is the scientist’s superpower.",
"Curiosity turns confusion into discovery.",
"Understanding dissolves fear.",
"Complex problems love simple thinking.",
"Discipline quietly builds freedom.",
"Knowledge expands the map of reality.",
"Every mistake carries a lesson inside.",
"Thought is the laboratory of the mind.",
"Imagination prototypes the future.",
"Evidence beats opinion.",
"Good design hides its effort.",
"Persistence rewrites probability.",
"A sharp mind loves clear logic.",
"Discovery favors the patient observer.",
"Truth rarely fears questions.",
"Practice turns chaos into skill.",
"Insight arrives after long confusion.",
"Nature whispers its secrets slowly.",
"Creativity thrives under constraints.",
"Focus multiplies effort.",
"A curious mind is hard to fool.",
"Learning rewires the brain.",
"Data tells stories when asked well.",
"Wonder is the seed of science.",
"Knowledge is portable power.",
"Understanding is quiet victory.",
"Time rewards consistent work.",
"Questions open locked doors.",
"Progress loves iteration.",
"Logic is the skeleton of thought.",
"Patterns hide in plain sight.",
"Thought experiments stretch reality.",
"Bold ideas begin as whispers.",
"Clarity defeats complexity.",
"Learning never wastes effort.",
"Evidence sharpens belief.",
"Good thinking requires patience.",
"Systems reveal hidden connections.",
"Insight grows in silence.",
"Curiosity is intellectual oxygen.",
"Hard problems sculpt strong minds.",
"Truth welcomes scrutiny.",
"Observation beats assumption.",
"Small improvements compound massively.",
"Discovery hides in overlooked details.",
"Clear writing reflects clear thinking.",
"Science begins with doubt.",
"Understanding reduces noise.",
"Good models simplify reality.",
"Reason is humanity’s compass.",
"Knowledge evolves through questions.",
"Confusion is the start of wisdom.",
"Slow thinking prevents big mistakes.",
"Better tools build better ideas.",
"Creativity recombines old knowledge.",
"Logic organizes chaos.",
"Understanding builds confidence.",
"Good questions outlive answers.",
"Curiosity travels further than certainty.",
"Thoughtful minds shape the future.",
"Discovery rewards persistence.",
"Knowledge invites humility.",
"Complexity often masks simplicity.",
"Insight grows from attention.",
"Learning sharpens perception.",
"Evidence anchors belief.",
"Reason illuminates uncertainty.",
"Understanding deepens freedom.",
"Clear thought is rare power.",
"Questions refine knowledge.",
"Discovery loves bold curiosity.",
"Learning stretches imagination.",
"Truth emerges through testing.",
"Thinking carefully saves time.",
"Knowledge builds possibility.",
"Observation fuels insight.",
"Curiosity unlocks hidden worlds.",
"Patience reveals patterns.",
"Understanding turns noise into meaning.",
"Reason strengthens judgment.",
"Discovery begins with noticing.",
"Learning fuels innovation.",
"Thoughtful work shapes reality.",
"Insight rewards persistence."
];

let main = document.querySelector('main')
let btn = document.querySelector('button')




btn.addEventListener('click', function(){
    let x = Math.floor(Math.random()*90)
    let y = Math.floor(Math.random()*90)
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let h1 = document.createElement('h1')
    let ranq = Math.floor(Math.random()*quotes.length)
    h1.innerHTML = quotes[ranq];
    console.log(h1)
    let scal = Math.random()*2 + 0.5
    let rota = Math.floor(Math.random()*361)
    h1.style.fontSize = '20px'
    h1.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    h1.style.borderRadius = '20px';
    main.appendChild(h1)
    h1.style.position = 'absolute'
    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.scale = scal;
    h1.style.rotate = rota +'deg';
    h1.style.whiteSpace = "nowrap";  

})
