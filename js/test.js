
var outputArray = new Array("Fizz","Buzz","Whizz");
var outputHtml = "";
window.onload = function(){
  var btn = document.getElementById("my-button");
  btn.onclick = function(){
    var inputArray = new Array(parseInt($("#input1").val()),parseInt($("#input2").val()),parseInt($("#input3").val()));
    if (isNumber(inputArray[0]) && isNumber(inputArray[1]) && isNumber(inputArray[2])) {
      playGame(inputArray);
    }else {
      alert("输入数字错误！");
    }
  }
}

function playGame(inputArray) {
  for (var i = 1; i < 101; i++) {
    if(isRoleFive(i,inputArray[0])){
      continue;
    }else {
      var result = "";
      for (var j = 0; j < inputArray.length; j++) {
        if (isDivisible(inputArray[j],i)) {
          result += outputArray[j];
        }
      }
      if (result == "") {
        result = i;
      }
      createHtml(i + "==>" + result);
    }
  }
  output();
}

function output() {
  $("#output").html(outputHtml);
}

function isNumber(object){
  if (_.isNumber(object) && object.toString().length ==1) {
    return true;
  }
  else {
    return false;
  }
}

function createHtml(output) {
  var html = "<div>" + output + "</div>"
  outputHtml += html;
}

function isDivisible(input,object) {
  if (object%input == 0) {
    return true;
  }else {
    return false;
  }
}

function isRoleFive(number,input1){
  if (number.toString().indexOf(input1)!=-1) {
    var result = number + "==>" + outputArray[0];
     createHtml(result);
     return true;
  }else {
    return false;
  }
}
