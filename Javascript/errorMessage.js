
const json = {
	"Normal error": {
		"Text": "Data could not be accessed",
		"Tip": "Try again later"
	},

	"Offline": {
		"Text": "Data could not be accessed because you are offline",
		"Tip": "Check your internet connection"
	},
	
	"Non-existent": {
		"Text": "Request did not work because this user does not exist",
		"Tip": "Make sure you spelled the nickname correctly"
	}
}

window.addEventListener('load', function() {
	const error = sessionStorage.getItem("Error")

	document.getElementById("message").innerHTML = json[error]["Text"]
	document.getElementById("tip").innerHTML = json[error]["Tip"]
})
