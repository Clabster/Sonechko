let accountBtn = document.querySelector(".account")

let userInfoDiv = document.querySelector(".userInfo")
let userName = document.querySelector(".userName")
let email = document.querySelector(".email")

let closeUserInfo = document.querySelector(".close")
let logout = document.querySelector(".logout")

let userInfo

function getData() {
	let data = JSON.parse(localStorage.getItem("airline-user-info"))

	if (data) {
		userInfo = data
	}
}

getData()

accountBtn.addEventListener("click", function () {
	if (userInfo) {
		userInfoDiv.style.display = "block"
		userName.innerHTML = userInfo.name + " " + userInfo.surname
		email.innerHTML = userInfo.email

	} else {
		window.location.href = "/AuthPage/Sonechko%20Airline%20Notification%20of%20absence/Sonechko%20Airlines%20RegOnLog.html";
	}
})

closeUserInfo.addEventListener("click", function () {
	userInfoDiv.style.display = "none"
})

logout.addEventListener("click", function () {
	localStorage.clear()
	window.location.reload()
})
