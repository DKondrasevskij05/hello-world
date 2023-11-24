// scripts.js
window.onload = function() {
    var userName = prompt('Введіть ваше ім\'я:');
    if (userName === null || userName === '') {
        userName = 'Anonymous';
    }
    var greetingMessage = 'Hello, ' + userName + '!';
    alert(greetingMessage);
};
