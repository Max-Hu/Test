window.onload = function(){
  var btn = document.getElementById("my-button");
  btn.onclick = function(){
    var inputArray = new Array(parseInt($("#input1").val()),parseInt($("#input2").val()),parseInt($("#input3").val()));
    if (checkInput(inputArray)) {
      playGame(inputArray);
    }
  }
}
