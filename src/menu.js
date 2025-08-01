const menuArray = [
    {
        name: "Iskender",
        ingredients: ["Meat", "Butter", "Bread", "Tomato", "Yoghurt"],
        price: 250,
    },
    {
        name: "Adana Kebap",
        ingredients: ["Minced Meat", "Butter", "Bread", "Tomato", "Pepper"],
        price: 200,
    },
    {
        name: "Baklava",
        ingredients: ["Flour", "Hazel Nuts", "A LOT OF SUGAR"],
        price: 300,
    },
    {
        name: "Doner Kebap",
        ingredients: ["Chicken", "Onions", "Special Sauce"],
        price: 100,
    },
    {
        name: "Dolma",
        ingredients: ["Pepper", "Onions", "Rice"],
        price: 75,
    },
    {
        name: "Karni Yarik",
        ingredients: ["Minced Meat", "Eggplants", "Butter", "Tomato"],
        price: 175,
    },
]

function menuPage() {
    const menuEl = document.createElement("div")
    const contentEl = document.querySelector(".content")
    contentEl.innerHTML = ""
    menuEl.classList.add("menu")
    menuArray.forEach((item) => {
        const menuItemEl = document.createElement("div")
        menuItemEl.classList.add("menu-item")
        const h2El = document.createElement("h2")
        h2El.textContent = item.name

        const ingredientsParagraphEl = document.createElement("p")
        ingredientsParagraphEl.classList.add("ingredients")
        // ingredient list
        ingredientsParagraphEl.textContent = "Ingredients"
        const ingredientsUlEl = document.createElement("ul")
        item.ingredients.forEach((ingredient) => {
            const ingredientLiEl = document.createElement("li")
            ingredientLiEl.textContent = ingredient
            ingredientsUlEl.appendChild(ingredientLiEl)
        })
        // the price
        const priceParagraphEl = document.createElement("p")
        priceParagraphEl.classList.add("price")
        priceParagraphEl.textContent = `${item.price} TL`

        // append everything to each other
        ingredientsParagraphEl.appendChild(ingredientsUlEl)
        menuItemEl.appendChild(h2El)
        menuItemEl.appendChild(ingredientsParagraphEl)
        menuItemEl.appendChild(priceParagraphEl)

        menuEl.appendChild(menuItemEl)
    })

    contentEl.appendChild(menuEl)
}
export default menuPage
