function printNumbers(maxOutpNumber) {
  
  var printCount = 0, num = 0, result = "";
  //checking if input is correct
  maxOutpNumber = maxOutpNumber.replace(/[^0-9]/g,"");
  if (+maxOutpNumber <= 0 || maxOutpNumber == "") {
    return "Wrong input!!! Nothing to show.";
  }
  // figuring out is number under condition and making a result string  
  while (printCount < maxOutpNumber) {
    if( num % String(num).length == 0){
      result += num + ", ";
      printCount++;
    }
    num++;
  }
  return result.substring(0,result.length - 2) + '.';
}

var maxNum = prompt('Enter max numbers to be shown!', 'Put it here');
alert(printNumbers(maxNum));