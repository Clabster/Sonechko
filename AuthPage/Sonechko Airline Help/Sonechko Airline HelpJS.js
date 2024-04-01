window.addEventListener('beforeunload', function (e) {
    // Скасування події оновлення сторінки
    e.preventDefault();
    // Встановлення властивості відповіді на подію
    e.returnValue = '';
});


function checkEmail() {
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value.trim(); // Отримати значення поля вводу електронної пошти та видалити зайві пробіли

    if (email !== '') {
        alert('Дякуємо за скаргу, ми відповімо вам на ваш E-mail та виправимо помилки.');
    }
}
