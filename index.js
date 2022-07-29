const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const colorThree = document.getElementById("color-three");
const colorFour = document.getElementById("color-four");
const colorFive = document.getElementById("color-five");
const colorSix = document.getElementById("color-six");
const colorSeven = document.getElementById("color-seven");

const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const colorBtn = document.getElementById("color-btn");

let dancinglights = null;

playBtn.addEventListener("click", function() {
    dancinglights = setInterval(function dancingLights() {
        colorOne.style.height = randomHeight() + `0%`;
        colorTwo.style.height = randomHeight() + `0%`;
        colorThree.style.height = randomHeight() + `0%`;
        colorFour.style.height = randomHeight() + `0%`;
        colorFive.style.height = randomHeight() + `0%`;
        colorSix.style.height = randomHeight() + `0%`;
        colorSeven.style.height = randomHeight() + `0%`;
    }, 200) 
});


stopBtn.addEventListener("click", function() {
    clearInterval(dancinglights);
})

function randomHeight() {
    return lineHeight = Math.floor(Math.random() * 10) + 1;
};

colorBtn.addEventListener("click", function(){
    let colourSetOneRed = ["#DAF7A6", "#FFC300", "#FFA07A","#FF5733", "#C70039", "#900C3F", "#581845"];
    let colourSetTwoBlue = ["#191970", "#0000ff", "#add8e6", "#b0c4de", "#87cefa", "#87ceeb", "#6495ed"];
    let colourSetThreeGreen = ["#008000", "#98fb98", "#90ee90", "#8fbc8f", "#adff2f", "#7fff00", "#00ff00"];
    let colourSetRainbow = ["purple", "blue", "cyan", "green", "yellow", "orange", "red"];

    let lightColours = [colourSetOneRed, colourSetTwoBlue, colourSetThreeGreen, colourSetRainbow];
    let randomLightColours = lightColours[Math.floor(Math.random() * lightColours.length)];

    colorOne.style.backgroundColor = randomLightColours[0];
    colorTwo.style.backgroundColor = randomLightColours[1];
    colorThree.style.backgroundColor = randomLightColours[2];
    colorFour.style.backgroundColor = randomLightColours[3];
    colorFive.style.backgroundColor = randomLightColours[4];
    colorSix.style.backgroundColor = randomLightColours[5];
    colorSeven.style.backgroundColor = randomLightColours[6];
});