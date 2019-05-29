// store delivery details
class Delivery {
    constructor(deliveryAddress, phoneNo, date, time) {
        this.deliveryAddress = deliveryAddress;
        this.phoneNo = phoneNo;
        this.date = date;
        this.time = time;
    }
}


var delivery = []


//create ID/ binding for each input element
const continueBtnUI = document.getElementById('continue-btn')
const addressUI = document.getElementById('add-ress')
const phoneNumberUI = document.getElementById('phone-number')
const deliveryDateUI = document.getElementById('delivery-Date')
const deliveryTimeUI = document.getElementById('delivery-Time')
