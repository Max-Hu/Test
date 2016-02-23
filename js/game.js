
var outputArray = new Array("Fizz","Buzz","Whizz");
var outputHtml = "";

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

function isDivisible(divisor,dividend) {
  if (dividend%divisor == 0) {
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

function checkInput(inputArray) {
  if(!checkSameNumber(inputArray)) {
    alert("输入数字重复！");
    return false;
  }
  if (!checkIllegalNumber){
    alert("输入数字非法！");
    return false;
  }
  return true;
}

function checkIllegalNumber(inputArray) {
  if (isNumber(inputArray[0]) && isNumber(inputArray[1]) && isNumber(inputArray[2])){
    return true;
  }else return false;

}

function checkSameNumber(inputArray) {
  var nary=inputArray.sort();
  for(var i=0;i<nary.length;i++){
    if (nary[i]==nary[i+1]){
      return false;
    }
  }
  return true;
}