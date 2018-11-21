var flashlightToggle = document.getElementById('flashlightToggle');
flashlightToggle.addEventListener('click', function () {
    flashlightJS.flashlight.toggle();
});

var lightsToggle = document.getElementById('lightsToggle');
lightsToggle.addEventListener('click', function () {
    flashlightJS.lights.toggle();
});