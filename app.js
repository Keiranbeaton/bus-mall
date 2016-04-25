var imageArray = [];

function Image(name, filePath, timesShown, timesClicked) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  imageArray.push(this);

  function handleClick(event) {

  }
}
function chooseImage() {
  var imageChoiceArray = []
  for(i = 0; i < 3, i++) {
    var imageNumber = math.floor(math.random()) * 20;
    while(imageChoiceArray[i] == imageChoiceArray[i-1]) {
      imageNumber = math.floor(math.random()) *20;
    }
  }
}
var babySweep = new Image(babySweep; bus-mall\img\baby-sweep.png, 0, 0);
