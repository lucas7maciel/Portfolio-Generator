
function setUserData() {
	var data = JSON.parse(sessionStorage.getItem("User data"))
    
    document.getElementById("profilePic").src = data.avatar_url
    document.getElementById("profilePic").alt = `${data.login}' avatar`
    document.getElementById("nick").textContent = data.login

    document.getElementById("repositories").textContent = data.public_repos
    document.getElementById("registered").textContent = data.created_at.slice(0, 10)
    document.getElementById("followers").textContent = data.followers
    document.getElementById("type").textContent = data.type
}

function setRepos() {
	var data = JSON.parse(sessionStorage.getItem("Repositories"))
	const container = document.querySelector(".repoContainer")

	if (data.length == 0) {
		container.insertAdjacentHTML("beforeend",
			"<h2>This user has no repositories yet :(</h2>"
		)
	}

	for (let i = 0; i < data.length; i++) { //this loop creates a container for each repository
		const repoClass = `repo${i + 1}`

		container.insertAdjacentHTML("beforeend",
		`<div class='repos ${repoClass}'>
		<a id='title' target='blank'></a>
		<p id='description'></p>
		<p id='languages'></p>
		</div>`)

		//set the repository informations
		document.querySelector(`.${repoClass} #title`).textContent = data[i].name.replace("-", " ")
		document.querySelector(`.${repoClass} #title`).setAttribute("href", `https://github.com/${data[i].owner.login}/${data[i].name}`)

		document.querySelector(`.${repoClass} #description`).textContent = data[i].description
		document.querySelector(`.${repoClass} #languages`).textContent = data[i].language

	}
}
