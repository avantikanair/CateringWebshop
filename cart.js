// Generate the Cart DOM structure
generateCartDOM()


// Enable remove button
const removeButtons = document.getElementsByClassName('remove-cart-btn')

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', (event) => {
        var productName = cart[i].name
        console.log(productName)

        var newCart = []

        for (k = 0; k < cart.length; k++) {
            if (cart[k].name !== productName) {
                newCart.push(cart[k])
            }
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        location.reload()
    })
}


// Input delivery details
continueBtnUI.onclick = function () {

    if (addressUI.value.length == 0) {
        console.log("Hi")
        document.getElementById("orderResultSpan").innerText = "Please enter your address";
        return false
    }

    if (phoneNumberUI.value.length < 8) {
        document.getElementById('orderResultSpan').innerText = "Please enter your phone number"
        return false
    }

    if (deliveryDateUI.value.length == 0) {
        document.getElementById('orderResultSpan').innerText = "Please choose your delivery date"
        return false
    }

    if (deliveryTimeUI.value.length == 0) {
        document.getElementById('orderResultSpan').innerText = "Please choose your delivery time"
        return false
    }

    var deliveryAddress = addressUI.value
    var phoneNo = phoneNumberUI.value
    var deliveryDate = deliveryDateUI.value
    var deliveryTime = deliveryTimeUI.value

    delivery.push(new Delivery(deliveryAddress, phoneNo, deliveryDate, deliveryTime))
    localStorage.setItem('delivery', JSON.stringify(delivery));

    window.location.assign('./order.html')
}


// block out days before today
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setDate")[0].setAttribute('min', today);