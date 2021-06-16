const cloneInstructionsDiv = document.querySelector("#clone")
const cloneInstructionsButton = document.querySelector("#clone-instructions-button")



const cloneInstructions = (event) => {
    console.log("CLicked!")
    toggleInstructions(cloneInstructionsButton, cloneInstructionsDiv)
}



const toggleInstructions = (button, instructions) => {

    if (instructions.style.display == "none") {
        instructions.style.display = "block"
        button.innerHTML = "Hide"
    }
    else {
        instructions.style.display = "none"

        button.innerHTML = "Show instructions"
    }
}
