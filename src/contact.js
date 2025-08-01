function contactPage() {
    const contentEl = document.querySelector(".content")
    contentEl.innerHTML = ""

    const contactEl = document.createElement("div")
    contactEl.classList.add("contact")

    const addressPEl = document.createElement("p")
    addressPEl.textContent =
        "Address: Kuzeykent mah, mutlu sokak, No14, Daire 175"

    const emailPEl = document.createElement("p")
    emailPEl.textContent = "Email: info@turkishdelight.com"

    const phonePEl = document.createElement("p")
    phonePEl.textContent = "Phone: +90 500 567 54 45"

    contactEl.appendChild(addressPEl)
    contactEl.appendChild(phonePEl)
    contactEl.appendChild(emailPEl)

    contentEl.appendChild(contactEl)
}
export default contactPage
