
function toggle_menu() {
	document.getElementById( 'menu' ).classList.toggle( 'visible' ); // Display mobile navigation when clicked
}
	
	var retrievedObject = localStorage.getItem('username'); // Retrieve items from local sotrage
	var retrievedObject2 = localStorage.getItem('password');
	var retrievedObject3 = localStorage.getItem('firstname');

	var loginConfi = JSON.parse(localStorage.getItem('login')) || []; // Create variable, containg whether user is logged in or not.

	userLS = JSON.parse(retrievedObject) // Retrieve data from local storage.
	passLS = JSON.parse(retrievedObject2)
	firstLS = JSON.parse(retrievedObject3)

	// ANCHOR If signned in do or check the following:
	if(loginConfi != "1" && loginConfi.length != 0) {
		var capName = loginConfi[0].charAt(0).toUpperCase() + loginConfi[0].slice(1)
		document.getElementById("navSlog").textContent = "🏍️ Welcome back " + capName + "! 🏍️";
		document.getElementById("loginButtonMob").textContent = "Logout"; // Change text to logout
		document.getElementById("loginButton").textContent = "Logout";    // Change text to logout
		document.getElementById("loginButton").id = 'logout'		      // Change button to logout
		document.getElementById("loginButtonMob").id = "logoutMob";       // Change button to logout
		
		if(document.getElementById("signnedIn") != null) { // If signnedIn element id isnt being used 
			document.getElementById("signnedIn").style.display = "block"; // Display the item
			document.getElementById("h1Link").style.display = "none"; // Remove the h1 item display
		}
	

		document.getElementById("logout").addEventListener("click", function() { // When logout button is clicked, do the following
			var login = JSON.parse(localStorage.getItem('login')) || []; // Retrieve login data from localStorage in form of array
			login.shift() // Remove the first element of the login array
			login.push("1") // Add '1' to login array, to represent a user isnt logged in.
			localStorage.setItem('login', JSON.stringify(login)); // Set login data from localstorage to login array
			document.getElementById("logout").id = 'loginButton' // Change button to login
			document.getElementById("logoutMob").id = 'loginButton' // Change button to login
			document.getElementById("signnedIn").style.display = "none"; // Change signnedIn button display to none
			document.getElementById("h1Link").style.display = "block"; // Show h1 item display
			alert("Logout Successful"); // Notify user of logout
		  }, false);

		  document.getElementById("logoutMob").addEventListener("click", function() { // When logout button for mobile is clicked
			var login = JSON.parse(localStorage.getItem('login')) || []; // Retrieve login data from localStorage in form of array
			login.shift() // Remove the first element of the login array
			login.push("1") // Add '1' to login array, to represent a user isnt logged in.
			localStorage.setItem('login', JSON.stringify(login)); // Set login data from localstorage to login array
			document.getElementById("logout").id = 'loginButton' // Change button to login
			document.getElementById("logoutMob").id = 'loginButton' // Change button to login
			document.getElementById("signnedIn").style.display = "none"; // Change signnedIn button display to none
			document.getElementById("h1Link").style.display = "block"; // Show h1 item display
			alert("Logout Successful"); // Notify user of logout
		  }, false); 
	}

var fnEl = document.getElementById('Firstname');// Retrieve form firstname
var lnEl = document.getElementById('Lastname'); // Retrieve form  lastname
var unEl = document.getElementById('Username'); // Retrieve form username
var eaEl = document.getElementById('Email'); 	// Retrieve form email
var pwEl = document.getElementById('Password'); // Retrieve form password

var user = document.getElementById('loginUN');	// Retrieve form login username
var pass = document.getElementById('loginPW'); // Retrieve form  login password

function store() {
	var usernames = JSON.parse(localStorage.getItem('username')) || [];   // Retrieve usernames from localStorage
	var passwords = JSON.parse(localStorage.getItem('password')) || [];   // Retrieve passwords from localStorage
	var firstnames = JSON.parse(localStorage.getItem('firstname')) || []; // Retrieve firstnames from localStorage
	var lastnames = JSON.parse(localStorage.getItem('lastname')) || [];   // Retrieve lastnames from localStorage
	var emails = JSON.parse(localStorage.getItem('email')) || []; 		  // Retrieve emails from localStorage

	passwords.push(pwEl.value) 				  // Add password to localStorage array
	usernames.push(unEl.value.toLowerCase())  // Add username to localStorage array
	firstnames.push(fnEl.value.toLowerCase()) // Add firstname to localStorage array
	lastnames.push(lnEl.value.toLowerCase())  // Add lastname to localStorage array
	emails.push(eaEl.value.toLowerCase())     // Add email to localStorage array

	localStorage.setItem('username', JSON.stringify(usernames)); // Add the following arrays to localStorage 
	localStorage.setItem('password', JSON.stringify(passwords));
	localStorage.setItem('firstname', JSON.stringify(firstnames));
	localStorage.setItem('lastname', JSON.stringify(lastnames));
	localStorage.setItem('email', JSON.stringify(emails));
	
}

function showError(input, message) { // Display error with message 
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
 
function showSuccess(input) { // Display success if input is correct
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
 
function checkRequired(req) { // Check the fields to see if input is valid
        if (req.value.trim() == '' || req.value.includes(' ')) {
            showError(req, `${getFieldName(req)} invalid whitespace`)
        } else {
			showSuccess(req)
			return true
        }
}

// Check input length 
function checkNames(input, min, max) { // Check the fields to see if input is valid
	var letters = /^[A-Za-z]+$/;
    if (input.value.length < min) {
        showError(
            input, `${getFieldName(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(
            input, `${getFieldName(input)} must be less than ${max} characters`
        )
    } else if (input.value.match(letters)) {
			showSuccess(input)
			return true
		} else {
			showError(input, `${getFieldName(input)} invalid characters`)
		}

    }

function checkUsername(input, min, max) { // Check the fields to see if input is valid
	var retrievedObject = localStorage.getItem('username');
	var userLS = JSON.parse(retrievedObject)
	if(userLS == null) {
		userLS = []
	}
	var name = input.value
	if (input.value.length < min) {
        showError(
            input, `${getFieldName(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(
            input, `${getFieldName(input)} must be less than ${max} characters`
        )
    } else if (userLS.indexOf(name.toLowerCase()) != -1) {
			showError(input, `${getFieldName(input)} username is already taken`)		
	} else {
		if (input.value.trim() == '' || input.value.includes(' ')) {
            showError(input, `${getFieldName(input)} invalid whitespace`)
        } else {
			showSuccess(input)
			return true
        }
	}
}


function checkLength(input, min, max) { // Check the fields to see if input is valid
	if (input.value.length < min) {
        showError(
            input, `${getFieldName(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(
            input, `${getFieldName(input)} must be less than ${max} characters`
        )
    } else {
		showSuccess(input)
		return true
	}
}
 
// Check passwords match 
function checkPasswordsMatch(input1, input2) { // Check the passwords to see if they match
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    } else {
		showSuccess(input2)
		return true
	}
}
 
// Get fieldname from input
function getFieldName(input) { // Retrieve field input
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
 
// Event Listeners
signup.addEventListener('submit', function (e) { // When registration submit button is clicked
    e.preventDefault()				// Error check
	checkNames(Firstname, 3, 25)
	checkNames(Lastname, 3, 25)
	checkUsername(Username, 5, 25)
	checkLength(Password, 6, 25)
	checkPasswordsMatch(Password, Password2)

	if (checkNames(Firstname, 3, 25) == true && checkNames(Lastname, 3, 25) == true && 
	checkUsername(Username, 5, 25) == true && checkLength(Password, 6, 25) == true && checkPasswordsMatch(Password, Password2) == true) { // If this matches, then inputs are correct
		store(); // Store the information
		alert("Registration completed."); // Notify the user
		window.location.href = "index.html"; // Return user to window.
	}
})

login.addEventListener('submit', function (e) { // When login submit button is clicked
	e.preventDefault()
	var userInputToLC = user.value.toLowerCase();
	if(userLS != null) { // If username is not taken
		if(userLS.indexOf(userInputToLC) != -1 && pass.value == passLS[userLS.indexOf(userInputToLC)]) { // If usernames and passwords match what is in local storage at given indexes/items
			alert("Login Successful"); // Notify user
			window.location.href = "index.html"; // Return user to index
			var login = JSON.parse(localStorage.getItem('login')) || []; // Get login data
			if(login.length != 0) { // If not logged in
				login.shift(); // remove data from login array
				localStorage.setItem('login', JSON.stringify(login)); // Set array to local storage
			}
			login.push(firstLS[userLS.indexOf(userInputToLC)]) // Add login details to array
			localStorage.setItem('login', JSON.stringify(login)); // Set login details in local storage
		} else {
			console.log("no match") // Credentials dont match, notify user.
			alert("Incorrect login");
		}
	
	} else {
		alert("No accounts have been created"); // If their are no accounts, notify user.
	}
})


