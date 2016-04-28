var surveyPrompt = document.getElementById('survey-prompt');
var imagesContainer = document.getElementById('images-container');
var resultsPrompt = document.getElementById('results-prompt');
var chartsContainer = document.getElementById('charts-container');
var clickChart = document.getElementById('click-chart').getContext('2d');
var clearLocalStorage = document.getElementById('clear-local-storage');
var imageArray = [];
var clicksArray = [];
var shownArray = [];
var nameArray = [];
var percentClicked =[];
var totalClicks = 0;
var clicksRemaining = 25;

function Image(imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  imageArray.push(this);
}

var babySweep = new Image('Baby Sweep', 'img/baby-sweep.png');
var bananaCutter = new Image('Banana Cutter', 'img/banana-cutter.jpg');
var breakfastMaker = new Image('Breakfast Maker', 'img/breakfast-maker.jpg');
var cthulhu = new Image('Cthulhu', 'img/cthulhu-action-figure.jpg');
var dogDuckBill = new Image('Dog Duck Bill', 'img/dog-duck-bill.jpg');
var dragon = new Image('Dragon Meat', 'img/dragon-meat.jpg');
var chair = new Image('Chair', 'img/inverted-chair.jpg');
var bubblegum = new Image('Bubblegum', 'img/meatball-bubblegum.jpg');
var boots = new Image('Boots', 'img/open-toed-boots.jpg');
var pen = new Image('Pen', 'img/pen-utensils.jpg');
var petSweep = new Image('Pet Sweep', 'img/pet-sweep.jpg');
var pizzaScissors = new Image('Pizza Scissors', 'img/pizza-scissors.jpg');
var bag = new Image('R2-D2 Bag', 'img/r2d2-bag.jpg', 0, 0);
var shark = new Image('Shark Sleeping Bag', 'img/shark-sleeping-bag.jpg');
var tauntaun = new Image('Tauntaun Sleeping Bag', 'img/tauntaun-sleeping-bag.jpg');
var toiletTablet = new Image('Toilet Tablet', 'img/toilet-paper-tablet.jpg');
var unicorn = new Image('Unicorn Meat', 'img/unicorn-meat.jpg');
var tentacle = new Image('USB Tentacle', 'img/usb-tentacle.gif');
var waterCan = new Image('Watering Can', 'img/watering-can-dumb.jpg');
var wineGlass = new Image('Wine Glass', 'img/wine-glass-weird-opening.jpg');

function getRandomImageNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage() {
  while (imagesContainer.firstChild) {
    imagesContainer.removeChild(imagesContainer.firstChild);
  }
  if (surveyPrompt.style.display !== 'flex'|| imagesContainer.style.display !== 'flex'|| resultsPrompt.style.display !== 'none'|| chartsContainer.style.display !== 'none') {
    surveyPrompt.style.display = 'flex';
    imagesContainer.style.display = 'flex';
    resultsPrompt.style.display = 'none';
    chartsContainer.style.display = 'none';
  }
  var randomImageArray = [];
  for(var i = 0; i < 3; i++) {
    var randomImageNumber = getRandomImageNumber(19, 0);
    while(imageArray[randomImageNumber] == randomImageArray[0] || imageArray[randomImageNumber] == randomImageArray[1]) {
      randomImageNumber = getRandomImageNumber(19, 0);
    }
    randomImageArray.push(imageArray[randomImageNumber]);
    randomImageArray[i].timesShown++;
    var imageDiv = document.createElement('div');
    var image = document.createElement('img');
    imageDiv.className = 'single-image';
    image.src = randomImageArray[i].filePath;
    imageDiv.id = randomImageArray[i].imageName;
    imageDiv.appendChild(image);
    imagesContainer.appendChild(imageDiv);
  }
}

function updateArrays() {
  for (var i = 0 ; i < imageArray.length; i++) {
    shownArray[i] = imageArray[i].timesShown;
    clicksArray[i] = imageArray[i].timesClicked;
  }
}

function handleClick(event) {
  event.preventDefault();
  if(clicksRemaining > 0) {
    totalClicks += 1;
    clicksRemaining -= 1;
    for(var i = 0; i < imageArray.length; i++) {
      if(event.target.id == imageArray[i].imageName) {
        imageArray[i].timesClicked++;
      }
    }
    localStorage.setItem('imageData', JSON.stringify(imageArray));
    updateArrays();
    getRandomImage();
  } else {
    surveyPrompt.style.display = 'none';
    imagesContainer.style.display = 'none';
    resultsPrompt.style.display = 'flex';
  }
}

function showTable() {
  resultsPrompt.style.display = 'none';
  clearLocalStorage.style.display = 'flex';
  chartsContainer.style.display = 'flex';
  for(var i = 0; i < imageArray.length; i++) {
    nameArray.push(imageArray[i].imageName);
    shownArray[i] = imageArray[i].timesShown;
    clicksArray[i] = imageArray[i].timesClicked;
    percentClicked.push((imageArray[i].timesClicked / imageArray[i].timesShown) * 100);
  }
  var data = {
    labels: nameArray,
    datasets: [{label: "Times Clicked", backgroundColor: "rgba(10,226,161,0.2)", borderColor: "rgba(10,226,161,1)", borderwidth: 1, hoverBackgroundColor: "rgba(10,226,161,.4)", hoverBorderColor: "rgba(10,226,161,1)", data: clicksArray}, {label: "Times Displayed", backgroundColor: "rgba(54,162,235,0.2)", borderColor: "rgba(54,162,235,1)", borderwidth: 1, hoverBackgroundColor: "rgba(54,162,235,.4)", hoverBorderColor: "rgba(54,162,235,1)", data: shownArray}]
  }
  var myBarChart = new Chart(clickChart, {
      type: 'bar',
      data: data
  });
}

function moreClicks() {
  clicksRemaining += 10;
  getRandomImage();
}

(function checkLocal() {
  if(localStorage.imageData) {
    console.log('Local storage exists for imageData');
    var parsedImageData = JSON.parse(localStorage.imageData);
    imageArray = parsedImageData;
    updateArrays();
  } else {
    console.log('local storage does not exist');
  }
})();

clearLocalStorage.addEventListener('click', function() {
  localStorage.clear();
});
imagesContainer.addEventListener('click', handleClick);
document.getElementById('resultsButton').addEventListener('click', showTable);
document.getElementById('continueButton').addEventListener('click', moreClicks);

getRandomImage();
