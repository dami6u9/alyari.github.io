document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}); //Anula el click derecho

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }
}); //Anula el F12