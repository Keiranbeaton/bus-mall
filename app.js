function Image(name, filePath, timesShown, timesClicked) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  this.shown = function() {
    this.timesShown += 1;
  }
  this.clicks = function() {
    this.timesClicked += 1;
  }
  imageArray.push(this);
}

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
  image1.src = imageChoiceArray[1].filePath;
  image2.src = imageChoiceArray[2].filePath;
  allContainer.appendChild(image);
  allContainer.appendChild(image1);
  allContainer.appendChild(image2);
}

function handleClick(event) {
  console.log(event.target.src + ' event target source');
  console.log(imageArray.length + ' image array length');
  for(j = 0; j < imageArray.length; j++) {
    if(event.target.src == imageArray[j].filePath) {
      imageArray[j].clicks();
      console.log(imageArray[j]);
    }
  }
}

var imageArray = [];
var image = document.createElement('img');
var image1 = document.createElement('img');
var image2 = document.createElement('img');
var allContainer = document.getElementById('div-container')

var babySweep = new Image('Baby Sweep', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/baby-sweep.png', 0, 0);
var bananaCutter = new Image('Banana Cutter', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/banana-cutter.jpg', 0, 0);
var breakfastMaker = new Image('Breakfast Maker', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/breakfast-maker.jpg', 0, 0);
var cthulu = new Image('Cthulu', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/cthulu-action-figure.jpg', 0, 0);
var dogDuckBill = new Image('Dog Duck Bill', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/dog-duck-bill.jpg', 0, 0);
var dragon = new Image('Dragon Meat', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/dragon-meat.jpg', 0, 0);
var chair = new Image('Chair', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/inverted-chair.jpg', 0, 0);
var bubblegum = new Image('Bubblegum', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/meatball-bubblegum.jpg', 0, 0);
var boots = new Image('Boots', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/open-toed-boots.jpg', 0, 0);
var pen = new Image('Pen', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/pen-utensils.jpg', 0, 0);
var petSweep = new Image('Pet Sweep', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/pet-sweep.jpg', 0, 0);
var pizzaScissors = new Image('Pizza Scissors', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/pizza-scissors.jpg', 0, 0);
var bag = new Image('R2-D2 Bag', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/r2d2-bag.jpg', 0, 0);
var shark = new Image('Shark Sleeping Bag', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/shark-sleeping-bag.jpg', 0, 0);
var tauntaun = new Image('Tauntaun Sleeping Bag', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/tauntaun-sleeping-bag.jpg', 0, 0);
var toiletTablet = new Image('Toilet Tablet', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/toilet-paper-tablet.jpg', 0, 0);
var unicorn = new Image('Unicorn Meat', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/unicorn-meat.jpg', 0, 0);
var tentacle = new Image('USB Tentacle', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/usb-tentacle.gif', 0, 0);
var waterCan = new Image('Watering Can', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/watering-can-dumb.jpg', 0, 0);
var wineGlass = new Image('Wine Glass', 'file:///C:/Users/keira/code_fellows/201/bus-mall/img/wine-glass-weird-opening.jpg', 0, 0);

randomImage();

image.addEventListener('click', handleClick);
image1.addEventListener('click', handleClick);
image2.addEventListener('click', handleClick);
allContainer.addEventListener('click', randomImage);
