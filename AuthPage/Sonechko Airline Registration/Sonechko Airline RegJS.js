function submitForm() {
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (name && surname && email && password) {
		alert("Ви зареєстровані!")

		window.location.href = "/AuthPage/Sonechko%20Airline%20Login/Sonechko%20Airline%20LogHTML.html";
	} else {
		alert("Будь ласка, заповніть всі поля перед відправкою.");
	}
}