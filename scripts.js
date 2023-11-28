// scripts.js
window.onload = function() {
    getArguments();
};

function getArguments() {
    var number1 = prompt('Введіть перше число:');
    var number2 = prompt('Введіть друге число:');

 if (number1 === null || number2 === null) {
        return;
    }

    // Перевірка на пустий рядок
    if (number1 === '' || number2 === '') {
        alert('Будь ласка, введіть числа.');
        getArguments();
        return;
    }

    var mult = calcMult(parseFloat(number1), parseFloat(number2));
    alert('Сума введених чисел: ' + mult);
}

function calcMult(num1, num2) {
    return num1 * num2;
}