// Create a function to find an item based on its ID
// The function should take both the array and ID as inputs
const findDishById = (data, id) => {
    const dish = data.find((dish) => {
        return dish.id === id
    })
    return dish
}

// Initialize the cart array
var cart = []


// retrieve currentUser
currentUser = JSON.parse(localStorage.getItem("currentUser"))
var uName = currentUser


// Create a function that adds an item by its ID, its quantity and currentUser to the shopping cart
//if !finddish by id- ?? dont understand
const addToCart = (id, quant, currentUser) => {
    console.log(`${id} has been added ${quant} times by ${uName}`);
    if (!findDishById(cart, id)) {

        //add new property to cart object username = currentUser
        //why ...findDish??
        cart.push({ ...findDishById(dishArray, id), quantity: quant, currentUser: uName })
    } else {
        findDishById(cart, id).quantity += quant
    }
    saveCart()
}


// Create a function that loads the cart from localStorage
const loadCart = () => {
    if (localStorage.getItem('cart') === null) {
        cart = []
    } else {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}


// Create a function that saves the cart to localStorage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
    alert("Added to shopping cart")
}


// Create a function that returns the current shopping cart
function getCart() {
    return cart
}


// Load the cart array
loadCart()