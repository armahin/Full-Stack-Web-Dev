function openFeatures() {
    let allElements = document.querySelectorAll(".elem");
    let fullElement = document.querySelectorAll(".fullelem")
    let close = document.querySelectorAll(".close")

    allElements.forEach((elem) => {
        elem.addEventListener("click", () => {
            fullElement[elem.id].style.display = 'block';
        })
    })

    close.forEach((close) => {
        close.addEventListener("click", () => {
            fullElement[close.id].style.display = 'none';
        })

    })

}

openFeatures();

