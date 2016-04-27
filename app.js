var imageArray = [];
var nameArray = [];
var imageDisplayed = [];
var imageClicked = [];
var percentClicked = [];
var image = document.createElement('img');
var image1 = document.createElement('img');
var image2 = document.createElement('img');
var main = document.getElementById('main');
var textPrompt = document.getElementById('text-prompt');
var donePrompt = document.createElement('article');
var doneMessage = document.createElement('article');
var buttonBox = document.createElement('div');
doneMessage.textContent = 'Thank you for taking the time to complete our survey. Here are the results so far.'
var doneButton = document.createElement('button');
doneButton.textContent = 'DONE';
var continueButton = document.createElement('button');
continueButton.textContent = 'CONTINUE';
var buttonExplanation = document.createElement('p');
buttonExplanation.textContent = 'Thank you for completing 25 clicks of our survey. If you would like to view the results, click the "done" button. If you would like to select 10 more products, click the "continue" button';
var allContainer = document.getElementById('div-container')
var clickChart = document.getElementById('click-chart').getContext('2d');
var percentChart = document.getElementById('percent-chart').getContext('2d');
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
var cthulu = new Image('Cthulu', 'img/cthulu-action-figure.jpg');
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

function updateArrays() {
  for (var i = 0 ; i < imageArray.length; i++) {
    imageDisplayed[i] = imageArray[i].timesShown;
    imageClicked[i] = imageArray[i].timesClicked;
  }
}

function randomImage() {
  var imageChoiceArray = [];
  for(var i = 0; i < 3; i++) {
    var imageNumber = Math.floor(Math.random() * 20);
    if(imageArray[imageNumber] == imageChoiceArray[0] || imageArray[imageNumber] == imageChoiceArray[1]) {
      while(imageArray[imageNumber] == imageChoiceArray[0] || imageArray[imageNumber] == imageChoiceArray[1]) {
        imageNumber = Math.floor(Math.random() * 20);
      }
    }
    imageChoiceArray.push(imageArray[imageNumber]);
    imageChoiceArray[i].timesShown++;
  }
  image.src = imageChoiceArray[0].filePath;
  image.id = imageChoiceArray[0].imageName;
  image1.src = imageChoiceArray[1].filePath;
  image1.id = imageChoiceArray[1].imageName;
  image2.src = imageChoiceArray[2].filePath;
  image2.id = imageChoiceArray[2].imageName;
  allContainer.appendChild(image);
  allContainer.appendChild(image1);
  allContainer.appendChild(image2);
}

function handleClick(event) {
  if(clicksRemaining > 0) {
    totalClicks += 1;
    localStorage.setItem('clickData', JSON.stringify(totalClicks));
    for(var j = 0; j < imageArray.length; j++) {
      if(event.target.id == imageArray[j].imageName) {
        imageArray[j].timesClicked++;
      }
    }
    localStorage.setItem('imageData', JSON.stringify(imageArray));
    updateArrays();
    randomImage();
  } else {
    allContainer.removeChild(image);
    allContainer.removeChild(image1);
    allContainer.removeChild(image2);
    main.replaceChild(donePrompt, textPrompt);
    donePrompt.appendChild(buttonExplanation);
    donePrompt.appendChild(buttonBox);
    buttonBox.appendChild(continueButton);
    buttonBox.appendChild(doneButton);
  }
  clicksRemaining -= 1;
}

function showTable() {
  var data = {
    labels: nameArray,
    datasets: [{label: "Times Clicked", backgroundColor: "rgba(10,226,161,0.2)", borderColor: "rgba(10,226,161,1)", borderwidth: 1, hoverBackgroundColor: "rgba(10,226,161,.4)", hoverBorderColor: "rgba(10,226,161,1)", data: imageClicked}]
  }
  var data1 = {
    labels : nameArray,
    datasets : [{label: "% of Time Clicked When Displayed", backgroundColor: "rgba(54,162,235,0.2)", borderColor: "rgba(54,162,235,1)", borderwidth: 1, hoverBackgroundColor: "rgba(54,162,235,.4)", hoverBorderColor: "rgba(54,162,235,1)", data: percentClicked}]
  }
  main.removeChild(allContainer);
  donePrompt.removeChild(buttonBox);
  donePrompt.replaceChild(doneMessage, buttonExplanation);
  for(var k = 0; k < imageArray.length; k++) {
    nameArray.push(imageArray[k].imageName);
    imageDisplayed[k] = imageArray[k].timesShown;
    imageClicked[k] = imageArray[k].timesClicked;
    percentClicked.push((imageArray[k].timesClicked / imageArray[k].timesShown) * 100);
  }
  var myBarChart = new Chart(clickChart, {
      type: 'bar',
      data: data
  });
  var myBarChart1 = new Chart(percentChart, {
    type: 'bar',
    data: data1
  });
};

function moreClicks() {
  clicksRemaining += 10;
  main.replaceChild(textPrompt, donePrompt);
  randomImage();
}

(function checkLocal() {
  if(localStorage.clickData) {
    console.log('Local storage exists for total clicks');
    var parsedTotalClicks = JSON.parse(localStorage.clickData);
    totalClicks = parsedTotalClicks;
  }
  if(localStorage.imageData) {
    console.log('Local storage exists for imageData');
    var parsedImageData = JSON.parse(localStorage.imageData);
    imageArray = parsedImageData;
    updateArrays();
  } else {
    console.log('local storage does not exist');
  }
})();

document.getElementById('clear-local-storage').addEventListener('click', function() {
  localStorage.clear();
});

function addArrays(array) {
  var newNumber = 0;
  for (var i = 0; i < imageArray.length; i++) {
    newNumber += array[i];
  }
  return newNumber;
}

randomImage();

image.addEventListener('click', handleClick);
image1.addEventListener('click', handleClick);
image2.addEventListener('click', handleClick);
doneButton.addEventListener('click', showTable);
continueButton.addEventListener('click', moreClicks);
