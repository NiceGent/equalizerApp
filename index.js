const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const colorThree = document.getElementById("color-three");
const colorFour = document.getElementById("color-four");
const colorFive = document.getElementById("color-five");
const colorSix = document.getElementById("color-six");
const colorSeven = document.getElementById("color-seven");
const colorArray = [colorOne, colorTwo, colorThree, colorFour, colorFive, colorSix, colorSeven];

const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const colorBtn = document.getElementById("color-btn");

let dancinglights = null;

playBtn.addEventListener("click", renderEqualizer);

function renderEqualizer() {
    playBtn.removeEventListener("click", renderEqualizer);
    dancinglights = setInterval(function dancingLights() {
        for(i = 0; i < colorArray.length; i ++) {
            colorArray[i].style.height = randomHeight();
            console.log(lineHeight)
        }
    }, 200)
}

stopBtn.addEventListener("click", function() {
    clearInterval(dancinglights);
    playBtn.addEventListener("click", renderEqualizer);
}) 

function randomHeight() {
    return lineHeight = `${(Math.floor(Math.random() * 10) + 1)}0%`;
};

colorBtn.addEventListener("click", function(){
    const colourSetOneRed = ["#DAF7A6", "#FFC300", "#FFA07A","#FF5733", "#C70039", "#900C3F", "#581845"];
    const colourSetTwoBlue = ["#191970", "#0000ff", "#add8e6", "#b0c4de", "#87cefa", "#87ceeb", "#6495ed"];
    const colourSetThreeGreen = ["#008000", "#98fb98", "#90ee90", "#8fbc8f", "#adff2f", "#7fff00", "#00ff00"];
    const colourSetRainbow = ["purple", "blue", "cyan", "green", "yellow", "orange", "red"];

    const lightColours = [colourSetOneRed, colourSetTwoBlue, colourSetThreeGreen, colourSetRainbow];
    let randomLightColours = lightColours[Math.floor(Math.random() * lightColours.length)];

    for(i = 0; i < colorArray.length; i++) {
        colorArray[i].style.backgroundColor = randomLightColours[i];
    }
});