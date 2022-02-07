
window.addEventListener('load', function() {
	setTheme()
})

function setTheme() {
	if (sessionStorage.getItem("Dark Mode") == "Enabled") {
		document.body.classList.add('dark')
	}
}

function changeTheme() {
	if (sessionStorage.getItem("Dark Mode") == "Enabled") {
		sessionStorage.setItem("Dark Mode", "Disabled")
	} else {
		sessionStorage.setItem("Dark Mode", "Enabled")
	}

	document.body.classList.toggle('dark')
	console.log(document.body.classList)
	console.log(sessionStorage.getItem("Dark Mode"))
}