function homePage() {
    const contentEl = document.querySelector(".content")
    const containerEl = document.createElement("div")
    const textContentEl = document.createElement("div")
    contentEl.innerHTML = ""

    textContentEl.classList.add("text-content")
    containerEl.classList.add("container")

    const smallEl = document.createElement("small")
    smallEl.textContent = "Welcome to our brand new"

    const h1El = document.createElement("h1")
    h1El.textContent = "Restaurant"

    const pEl = document.createElement("p")
    pEl.textContent =
        "Where you can taste every kind of cuisine, we specialize in turkish cuisine."

    const buttonEl = document.createElement("button")
    buttonEl.textContent = "See the Menu"

    textContentEl.appendChild(smallEl)
    textContentEl.appendChild(h1El)
    textContentEl.appendChild(pEl)
    textContentEl.appendChild(buttonEl)

    containerEl.appendChild(textContentEl)
    contentEl.appendChild(containerEl)
}

export default homePage
