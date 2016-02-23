
var outputArray = new Array("Fizz","Buzz","Whizz");
var outputHtml = "";

function clean() {
  outputHtml = "";
  $("#output").empty();
}

function playGame(inputArray) {
  for (var i = 1; i < 101; i++) {
    if(isRoleFive(i,inputArray[0])){
      continue;
    }else {
      var result = restRole(i,inputArray);
      if (_.isUndefined(result)) {
        result = i;
      }
      createHtml(i + "==>" + result);
    }
  }
  output();
}

function restRole(number,inputArray) {
  var result = "";
  for (var j = 0; j < inputArray.length; j++) {
    if (isDivisible(inputArray[j],number)) {
      result += outputArray[j];
    }
  }
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
  if (dividend%divisor === 0) {
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
  if(checkSameNumber(inputArray)) {
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
  var hash = {};
  for(var i in inputArray) {
    if(hash[inputArray[i]])
      return true;
      hash[inputArray[i]] = true;
  }
  return false;
}
