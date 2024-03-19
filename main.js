
let selection
let ratingButtons = document.querySelectorAll(".ratingButton");

ratingButtons.forEach(button => {
    button.addEventListener('click', clicked)
})

function clicked() {
    ratingButtons.forEach(button => {
        button.classList.remove("clicked")
    })
        this.classList.toggle("clicked")
        selection = this.textContent
}

function submitClicked() {
    let main1 = document.getElementsByClassName("main1")
    let main2 = document.getElementsByClassName("main2")
    let selectionP = document.getElementById("selection")

    // console.log(main1[0].classList);
    main2[0].classList.add("show")
    main1[0].classList.add("hide")
    selectionP.innerText = selection

    confetti()
}