
const reqState = [
	"Request has not yet been sent",
	"Receiving headers",
	"Headers received",
	"Downloading data"
]

const getData = repo => new Promise((resolve, reject) =>{
	const req = new XMLHttpRequest()
	const user = sessionStorage.getItem("user")
	var url = `https://api.github.com/users/${user}`

	if (repo) {
		url += "/repos"
		var ele = document.getElementById("repos")
	} else {
		var ele = document.getElementById("user")
	}

	req.open('GET', url, true)

	req.onreadystatechange = function() {
		if (req.readyState !== 4) {
			ele.innerHTML = reqState[req.readyState]
			return
		}

		if (req.status === 200) {
			resolve(this.response)
		}
		
		//handle errors
		if (!navigator.onLine) {
			reject("Offline")
		} else if ("message" in JSON.parse(this.response)) {
			reject("Non-existent")
		}

		reject("Normal error")
	}

	req.send()
})

Promise.all([getData(false), getData(true)]).then(data => {
	sessionStorage.setItem("User data", data[0])
	sessionStorage.setItem("Repositories", data[1])
	
	location.href = "profile.html"

}).catch(error => {
	sessionStorage.setItem("Error", error)
	
	location.href = "errorScreen.html"
})
