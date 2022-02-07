
if (sessionStorage.getItem("Dark Mode") == null) {
	sessionStorage.setItem("Dark Mode", "Disabled")
}

window.onload = function check() {
	if (typeof Storage !== "undefined") return

	alert("Unfortunately, your browser does not support Storage API.")
	document.getElementById("start").disabled = true
}

function start() {
	sessionStorage.setItem("user", document.getElementById("userform").value)

	location.href = "Pages/loading.html"
}