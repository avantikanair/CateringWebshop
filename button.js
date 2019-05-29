
// Add an EventListener to every add-to-cart button in the shop and link it
// to the addToCart(itemID, quantity)
const buttons = document.getElementsByClassName('addToCart')
console.log(buttons);


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        var quantity = buttons[i].previousElementSibling.value
        addToCart(event.target.dataset.id, Number(quantity))
    })
}