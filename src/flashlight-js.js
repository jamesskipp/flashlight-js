/**
 * @author jskipp
 */
!window.flashlightJS &&
(window.flashlightJS = (function () {

    'use strict';
 
    var flashlightContainer = document.createElement('div');
    flashlightContainer.style.overflow = 'hidden';
    flashlightContainer.style.position = 'fixed';
    flashlightContainer.style.left = 0;
    flashlightContainer.style.top = 0;
    flashlightContainer.style.width = '100vw';
    flashlightContainer.style.height = '100vh';
    flashlightContainer.style.display = 'none';
    flashlightContainer.style.zIndex = 985088;
    flashlightContainer.style.pointerEvents = 'none';

    var flashlightPoint = document.createElement('div');
    flashlightPoint.style.position = 'absolute';
    flashlightPoint.style.height = '3px';
    flashlightPoint.style.width = '3px';
    flashlightPoint.style.borderRadius = '50%';
    flashlightPoint.style.pointerEvents = 'none';

    var flashlightArea = document.createElement('div');
    flashlightArea.style.height =' 200px';
    flashlightArea.style.width = '200px';
    flashlightArea.style.position = 'relative';
    flashlightArea.style.right = '5100px';
    flashlightArea.style.bottom = '5100px';
    flashlightArea.style.border = '5000px solid black';
    flashlightArea.style.borderRadius = '50%';
    flashlightArea.style.opacity = .96;
    flashlightArea.style.boxSizing = 'border-box';
    flashlightArea.style.pointerEvents = 'none';

    var flashlightBlur = document.createElement('div');
    flashlightBlur.style.boxShadow = '0px 0px 18px 8px inset black';
    flashlightBlur.style.height = '202px';
    flashlightBlur.style.width = '202px';
    flashlightBlur.style.borderRadius = '50%';
    flashlightBlur.style.left = '-1px';
    flashlightBlur.style.top = '-1px';
    flashlightBlur.style.position = 'relative';
    flashlightBlur.style.pointerEvents = 'none';

    flashlightArea.appendChild(flashlightBlur);
    flashlightPoint.appendChild(flashlightArea);
    flashlightContainer.appendChild(flashlightPoint);

    var firstTimeLoad = true;
    if (!document || !document.body) {
        window.addEventListener('DOMContentLoaded', function () {
            if (firstTimeLoad) {
                document.body.appendChild(flashlightContainer);
                firstTimeLoad = false;
            }
        });
    } else {
        document.body.appendChild(flashlightContainer);
    }

    var flashlightIsOn = false;
    var lightsAreOn = true;
    var mouseLocation = {
        left: 0,
        top: 0
    }
    
    function updateFlashlightLocation() {
        flashlightPoint.style.left = mouseLocation.left + 'px';
        flashlightPoint.style.top = mouseLocation.top + 'px';
    }

    window.addEventListener('mousemove', function (event) {
        mouseLocation.left = event.clientX;
        mouseLocation.top = event.clientY;
        if (flashlightIsOn) {
            updateFlashlightLocation();
        }
    });

    var flashlightJS = {
        lights: {},
        flashlight: {},
    };

    flashlightJS.flashlight.on = function flashlightOn() {
        flashlightIsOn = true;
        updateFlashlightLocation();
        flashlightArea.style.boxSizing = 'unset';
    }

    flashlightJS.flashlight.off = function flashlightOff() {
        flashlightIsOn = false;
        flashlightArea.style.boxSizing = 'border-box';
    }

    flashlightJS.flashlight.toggle = function flashlightToggle() {
        if (flashlightIsOn) {
            flashlightJS.flashlight.off();
        } else {
            flashlightJS.flashlight.on();
        }
    }

    flashlightJS.flashlight.getIsOn = function flashlightGetIsOn() {
        return flashlightIsOn;
    }

    flashlightJS.lights.on = function lightsOn() {
        lightsAreOn = true;
        flashlightContainer.style.display = 'none';
    }

    flashlightJS.lights.off = function lightsOff() {
        lightsAreOn = false;
        flashlightContainer.style.display = 'inline-block';
    }

    flashlightJS.lights.toggle = function lightsToggle() {
        if (lightsAreOn) {
            flashlightJS.lights.off();
        } else {
            flashlightJS.lights.on();
        }
    }

    flashlightJS.lights.getIsOn = function lightsGetIsOn() {
        return lightsAreOn;
    }  

    return flashlightJS;
})());