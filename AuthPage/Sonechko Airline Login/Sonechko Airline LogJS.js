function submitForm() {
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (name && surname && email && password) {
		let userData = {
			name, surname, email, password
		}
		localStorage.setItem("airline-user-info", JSON.stringify(userData))
		window.location.href = "/";
		alert("Ви увійшли в акаунт!");
	} else {
		alert("Будь ласка, заповніть всі поля перед відправкою.");
	}
}