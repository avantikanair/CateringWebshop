var users;


// create users array
if (localStorage.getItem('users') === null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
        users[i] = new User(users[i].firstName, users[i].lastName, users[i].username, users[i].password);
    }
}


// creating an id/binding for each input element - later used to check if value length is okay
//getElementbyID - here ID is previously saved in HTML 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username')
const passwordUI = document.getElementById('password')
const checkBoxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')


//trigger the click button 
// first function is to check if all conditions are met 
submitBtnUI.onclick = function () {

    if (firstNameUI.value.length == 0) {
        document.getElementById('resultSpan').innerText = "Please enter first name"
        return false
    }

    if (lastNameUI.value.length == 0) {
        document.getElementById('resultSpan').innerText = "Please enter last name"
        return false
    }

    if (usernameUI.value.length == 0) {
        document.getElementById('resultSpan').innerText = "Please enter user name"
        return false
    }

    if (passwordUI.value.length < 8) {
        document.getElementById('resultSpan').innerText = "Password too short, please have at least 8 characters"
        return false
    }

    if (checkBoxUI.checked == false) {
        document.getElementById('resultSpan').innerText = "Please agree with our terms and conditions"
        return false
    }


    // Create new user object only if user agreed to the terms and conditions
    if (checkBoxUI.checked) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        //should have written username in camelcase  
        var username = usernameUI.value
        var password = passwordUI.value

        //check if matches with saved usernames
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                alert('this user is already registered');
                return false
            }
        }

        //store user i to the array of users 
        users.push(new User(firstName, lastName, username, password))
        localStorage.setItem('users', JSON.stringify(users));

        // update currentUser
        currentUser = username
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        //redirect user to dish page 
        window.location.assign('./dishexample.html')
    }
}