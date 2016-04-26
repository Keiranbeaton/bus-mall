var imageArray = [];
var image = document.createElement('img');
var image1 = document.createElement('img');
var image2 = document.createElement('img');
var allContainer = document.getElementById('div-container')
var totalClicks = 0;


function Image(imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.shown = function() {
    this.timesShown += 1;
  }
  this.clicks = function() {
    this.timesClicked += 1;
  }
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
function randomImage() {
  var imageChoiceArray = [];
  for(i = 0; i < 3; i++) {
    var imageNumber = Math.floor(Math.random() * 20);
    if(imageArray[imageNumber] == imageChoiceArray[0] || imageArray[imageNumber] == imageChoiceArray[1]) {
      while(imageArray[imageNumber] == imageChoiceArray[0] || imageArray[imageNumber] == imageChoiceArray[1]) {
        imageNumber = Math.floor(Math.random() * 20);
      }
    }
    imageChoiceArray.push(imageArray[imageNumber]);
    imageChoiceArray[i].shown();
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
  totalClicks += 1;
  for(j = 0; j < imageArray.length; j++) {
    if(event.target.id == imageArray[j].imageName) {
      imageArray[j].clicks();
    }
  }
}


randomImage();

image.addEventListener('click', handleClick);
image1.addEventListener('click', handleClick);
image2.addEventListener('click', handleClick);
allContainer.addEventListener('click', randomImage);
