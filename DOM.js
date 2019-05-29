var usersStorage = JSON.parse(localStorage.getItem("users"))
var cartStorage = JSON.parse(localStorage.getItem("cart"))


// Create a function that generates the DOM structure
const generateCartDOM = () => {

    let html = ''
    var calTotal = 0
    for (i = 0; i < cartStorage.length; i++) {
        if (currentUser == cartStorage[i].currentUser) {
            function createCartTableRows() {
                return `<tr><td>  ${cartStorage[i].name}  </td><td>  ${cartStorage[i].price}  </td><td>  ${cartStorage[i].quantity}</td> 
                        <td><button class="remove-cart-btn" data-id="${cart.id}">Remove</button></td></tr>`
            }
            html += createCartTableRows()
            calTotal += cartStorage[i].price * cartStorage[i].quantity
        }
    }
    html += `<tr><td>Total:</td><td id="total">${calTotal.toLocaleString()} </td></tr>`
    document.getElementById("cart-content").innerHTML = html
}