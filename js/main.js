const cloneInstructionsDiv = document.querySelector("#clone")
const cloneInstructionsButton = document.querySelector("#clone-instructions-button")

const currentFocusedAnyKeyButton = document.querySelector("#current-focused-any-key-button")
const currentFocusedAnyKey = document.querySelector("#current-focus-any-key")

const currentFocusedPButton = document.querySelector("#current-focus-p-button")
const currentFocusedP = document.querySelector("#current-focus-p")

const currentStateButton = document.querySelector("#current-state-button")
const currentState = document.querySelector("#current-state")



const cloneInstructions = (event) => {
    hideAllInstructions()
    toggleInstructions(cloneInstructionsButton, cloneInstructionsDiv)
}
const currentFocusedAnyKeyInstructions = (event) => {
    hideAllInstructions()
    toggleInstructions(currentFocusedAnyKeyButton, currentFocusedAnyKey)
}
const currentFocusedPInstructions = (event) => {
    hideAllInstructions()
    toggleInstructions(currentFocusedPButton, currentFocusedP)
}

const currentFocusedInstructions = (event) => {
    hideAllInstructions()
    toggleInstructions(currentFocusedAnyKeyButton, currentFocusedAnyKey)
}

const currentStateInstructions = (event) => {
    hideAllInstructions()
    toggleInstructions(currentStateButton, currentState)
}

// Functions

const toggleInstructions = (button, instructions) => {

    if (instructions.style.display == "none") {
        instructions.style.display = "block"
        button.innerHTML = "Hide instructions"
        button.setAttribute("aria-expanded", "true")
    }
    else {
        instructions.style.display = "none"
        button.innerHTML = "Show instructions"
        button.setAttribute("aria-expanded", "false")
    }
}

const hideInstructions = (button, instructions) => {
    instructions.style.display = "none"
    button.innerHTML = "Show instructions"
    button.setAttribute("aria-expanded", "false")
}

const hideAllInstructions = () => {
    hideInstructions(cloneInstructionsButton, cloneInstructionsDiv)
    hideInstructions(currentFocusedAnyKeyButton, currentFocusedAnyKey)
    hideInstructions(currentFocusedPButton, currentFocusedP)
    hideInstructions(currentFocusedAnyKeyButton, currentFocusedAnyKey)
    hideInstructions(currentStateButton, currentState)
}