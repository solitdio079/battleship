import "./style.css"
import homePage from "./home"
import menuPage from "./menu"
import contactPage from "./contact"
const menuBtn = document.querySelector("#menu")
const homeBtn = document.querySelector("#home")
const contactBtn = document.querySelector("#contact")
const allBtn = [...document.querySelectorAll("nav button")]
console.log("My webpack app!")

homePage()
homeBtn.classList.add("btn-active")
//menuPage()
//contactPage()

menuBtn.addEventListener("click", () => {
    allBtn.forEach((btn) => btn.classList.remove("btn-active"))
    menuBtn.classList.add("btn-active")
    menuPage()
})
homeBtn.addEventListener("click", () => {
    allBtn.forEach((btn) => btn.classList.remove("btn-active"))
    homeBtn.classList.add("btn-active")
    homePage()
})

contactBtn.addEventListener("click", () => {
    allBtn.forEach((btn) => btn.classList.remove("btn-active"))
    contactBtn.classList.add("btn-active")
    contactPage()
})
