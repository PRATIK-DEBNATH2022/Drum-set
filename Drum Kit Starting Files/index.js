var n= document.queryselector(."drum").length;
for(var i=0;i<n;i++){
  document.queryselectorAll(".drum")[i].addEventListener("click",function(){

    var button= this.innerHtml;

    switch (button) {
      case "w":
      var audio - new audio("sounds/tom-1.mp3");
      tom1.play();

      case "a":
      var audio - new audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case  "s":  var audio - new audio("sounds/tom-1.mp3");
        tom3.play();

        break;

      case "d":
      var audio - new audio("sounds/tom-1.mp3");
      tom4.play();
      break;

      default:

    }
  });
}
