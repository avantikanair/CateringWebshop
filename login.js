// bind button to a loginUI variable for later use
var loginUI = document.getElementById('login-btn')


//create StoredUsers object to get item from local storage 
var storedUsers = JSON.parse(localStorage.getItem('users'))


// trigger login button
loginUI.onclick = function () {
    var inputUsername = document.getElementById('logusername');
    var inputPassword = document.getElementById('logpassword');

    // checks if the user has inputted values for usernaame and password 
    if (inputUsername.value.length === 0 || inputPassword.value.length === 0) {
        document.getElementById('resultSpan2').innerText = "You need to enter a username and password to login";
        return false
    }

    // check if username/ password are correct
    for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].username != inputUsername.value || storedUsers[i].password != inputPassword.value) {
            document.getElementById('resultSpan2').innerText = "You have entered the incorrect username/password";
        }
        else {
            // update currentUser
            currentUser = inputUsername.value
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            // redirect to dish page
            window.location.assign('./dishexample.html')
        }
    }
}