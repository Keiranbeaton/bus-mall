var imageArray = [];

function Image(name, filePath, timesShown, timesClicked) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  this.image = 0;
  // this.newImage = function() {
  //   this.image = document.createElement('img');
  //   this.image.src = this.filePath;
  // }
  this.shown = function() {
    this.timesShown += 1;
  }
  this.clicks = function() {
    this.timesClicked += 1;
  }
  imageArray.push(this);
}

function chooseImage() {
  var imageChoiceArray = [];
  var numberChoiceArray = [];
  for(i = 0; i < 3; i++) {
    var imageNumber = Math.floor(Math.random() * 20);
    if(i == 0) {
      console.log('if ' + imageNumber);
    } else if(imageNumber == numberChoiceArray[0] || imageNumber == numberChoiceArray[1]) {
      console.log('first else if ' + imageNumber);
      while(imageNumber == numberChoiceArray[0] || imageNumber == numberChoiceArray[1]) {
        console.log('While of first else if ' + imageNumber);
        imageNumber = Math.floor(Math.random() * 20);
      }
    } else {
        console.log('else ' + imageNumber);
    }
    imageArray[imageNumber].shown();
    numberChoiceArray.push(imageNumber);
    imageChoiceArray.push(imageArray[imageNumber]);
  }
      console.log(imageChoiceArray);
      var leftContainer = document.getElementById('image-container-1');
      var leftImage = document.createElement('img');
      leftImage.src = imageChoiceArray[0].filePath;
      var centerContainer = document.getElementById('image-container-2');
      var centerImage = document.createElement('img');
      centerImage.src = imageChoiceArray[1].filePath;
      var rightContainer = document.getElementById('image-container-3');
      var rightImage = document.createElement('img');
      rightImage.src = imageChoiceArray[2].filePath;
      leftContainer.appendChild(leftImage);
      centerContainer.appendChild(centerImage);
      rightContainer.appendChild(rightImage);
}



var babySweep = new Image('Baby Sweep', 'img/baby-sweep.png', 0, 0);
var bananaCutter = new Image('Banana Cutter', 'img/banana-cutter.jpg', 0, 0);
var breakfastMaker = new Image('Breakfast Maker', 'img/breakfast-maker.jpg', 0, 0);
var cthulu = new Image('Cthulu', 'img/cthulu-action-figure.jpg', 0, 0);
var dogDuckBill = new Image('Dog Duck Bill', 'img/dog-duck-bill.jpg', 0, 0);
var dragon = new Image('Dragon Meat', 'img/dragon-meat.jpg', 0, 0);
var chair = new Image('Chair', 'img/inverted-chair.jpg', 0, 0);
var bubblegum = new Image('Bubblegum', 'img/meatball-bubblegum.jpg', 0, 0);
var boots = new Image('Boots', 'img/open-toed-boots.jpg', 0, 0);
var pen = new Image('Pen', 'img/pen-utensils.jpg', 0, 0);
var petSweep = new Image('Pet Sweep', 'img/pet-sweep.jpg', 0, 0);
var pizzaScissors = new Image('Pizza Scissors', 'img/pizza-scissors.jpg', 0, 0);
var bag = new Image('R2-D2 Bag', 'img/r2d2-bag.jpg', 0, 0);
var shark = new Image('Shark Sleeping Bag', 'img/shark-sleeping-bag.jpg', 0, 0);
var tauntaun = new Image('Tauntaun Sleeping Bag', 'img/tauntaun-sleeping-bag.jpg', 0, 0);
var toiletTablet = new Image('Toilet Tablet', 'img/toilet-paper-tablet.jpg', 0, 0);
var unicorn = new Image('Unicorn Meat', 'img/unicorn-meat.jpg', 0, 0);
var tentacle = new Image('USB Tentacle', 'img/usb-tentacle.gif', 0, 0);
var waterCan = new Image('Watering Can', 'img/watering-can-dumb.jpg', 0, 0);
var wineGlass = new Image('Wine Glass', 'img/wine-glass-weird-opening.jpg', 0, 0);
