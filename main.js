"use strict";
// Html Title
document.title = "project-js-15";
// Get Element From HTML and Declare Variable
let divContainer = document.getElementById("container");
let inputPixels = document.getElementById("pixels");
let inputEM = document.getElementById("em");
let pixelValue = 0;
let EMValue = 0;
// JS Style
document.body.style.cssText = `
    font-family: sans-serif;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 40px;
    font-size: 25px;
`;
divContainer.style.cssText = `
    display: flex;
    gap: 10px;
    font-size: 20px;
`;
inputPixels.style.cssText = `
    padding: 5px;
    text-align: center;
    font-size: 25px;
`;
inputEM.style.cssText = `
    padding: 5px;
    text-align: center;
    font-size: 25px;
`;
// operations
if (inputPixels && inputEM) {
    inputPixels.oninput = function () {
        pixelValue = parseFloat(inputPixels.value);
        if (!isNaN(pixelValue)) {
            pixelValue = pixelValue / 16;
            inputEM.value = pixelValue;
        }
        else {
            inputEM.value = '';
        }
        console.log(pixelValue);
    };
}
else {
    console.error("Input elements not found.");
}
if (inputPixels && inputEM) {
    inputEM.oninput = function () {
        EMValue = parseFloat(inputEM.value);
        if (!isNaN(EMValue)) {
            EMValue = EMValue * 16;
            inputPixels.value = EMValue;
        }
        else {
            inputPixels.value = '';
        }
        console.log(EMValue);
    };
}
else {
    console.error("Input elements not found.");
}
