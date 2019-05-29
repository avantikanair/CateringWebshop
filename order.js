// 1. Print name of customer
currentUser = JSON.parse(localStorage.getItem("currentUser"))

html = ""
for (i = 0; i < usersStorage.length; i++) {
    if (currentUser == usersStorage[i].username) {
        function createNameTableRows() {
            return `<tr><td>  ${usersStorage[i].firstName}  </td><td>  ${usersStorage[i].lastName}  </td> </tr>`
        }
        html += createNameTableRows()
    }
}
document.getElementById("usersInfo").innerHTML = html;


// 2. Print order details
html2 = ""
var calTotal = 0
for (i = 0; i < cartStorage.length; i++) {
    if (currentUser == cartStorage[i].currentUser) {
        function createCartTableRows() {
            return `<tr><td>  ${cartStorage[i].name}  </td><td>  ${cartStorage[i].price}  </td>  <td>  ${cartStorage[i].quantity}  </td> </tr>`
        }
        html2 += createCartTableRows()
        calTotal += cartStorage[i].price * cartStorage[i].quantity
    }
}

html2 += `<tr><td>Total:</td><td id="total">${calTotal.toLocaleString()} </td></tr>`
document.getElementById("cart-final-content").innerHTML = html2


// 3. Print delivery details 
var deliveryStorage = JSON.parse(localStorage.getItem("delivery"))
console.log(deliveryStorage)

html3 = ""
for (i = 0; i < usersStorage.length; i++) {
    if (currentUser == usersStorage[i].username) {
        function createTableRows() {
            return `<tr><td>Delivery Address:</td><td> ${deliveryStorage[0].deliveryAddress}</td></tr>
            <tr><td>Phone number:</td><td> ${deliveryStorage[0].phoneNo}</td></tr>
            <tr><td>Delivery Date:</td><td> ${deliveryStorage[0].date}</td></tr>
            <tr><td>Delivery Time:</td><td> ${deliveryStorage[0].time}</td></tr>`
        }
        html3 += createTableRows()
    }
}

document.getElementById("deliveryInfo").innerHTML = html3;