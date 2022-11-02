function convertToRoman(num) {
    var numbersArray = (""+num).split("");
    var ones = numbersArray.splice(-1,1);
    var tens = numbersArray.splice(-1,1);
    var hundreds = numbersArray.splice(-1,1);
    var thousands = numbersArray.splice(-1,1);
    function onesRoman() {
      
      var result = "";
      var onesToNumber = ones.map(Number);
      if (onesToNumber <= 3) {
        for(var i = 0; i < onesToNumber; i++) {
          result = result + "I";
        }
      }
      if (onesToNumber == 4) {
        result = "IV";
      }
      if (onesToNumber == 5) {
        result = "V";
      }
      if (onesToNumber > 5 && onesToNumber <=8) {
        result = "V";
        for (var j = 0; j < onesToNumber-5; j++) {
          result = result + "I";
        }
      }
      if (onesToNumber == 9) {
        result = "IX";
      }
   
      return result;
     }
    
    function tensRoman() {
      var result = "";
      var tensToNumber = tens.map(Number);
      if (tensToNumber <= 3) {
        for(var i = 0; i < tensToNumber; i++) {
          result = result + "X";
        }
      }
      if (tensToNumber == 4) {
        result = "XL";
      }
      if (tensToNumber == 5) {
        result = "L";
      }
      if (tensToNumber > 5 && tensToNumber <=8) {
        result = "L";
        for (var j = 0; j < tensToNumber-5; j++) {
          result = result + "X";
        }
      }
      if (tensToNumber == 9) {
        result = "XC";
      }
      
      return result;
      
    }
    function hundredsRoman() {
      var result = "";
      var hundredsToNumber = hundreds.map(Number);
      if (hundredsToNumber <= 3) {
        for(var i = 0; i < hundredsToNumber; i++) {
          result = result + "C";
        }
      }
      if (hundredsToNumber == 4) {
        result = "CD";
      }
      if (hundredsToNumber == 5) {
        result = "D";
      }
      if (hundredsToNumber > 5 && hundredsToNumber <=8) {
        result = "D";
        for (var j = 0; j < hundredsToNumber-5; j++) {
          result = result + "C";
        }
      }
      if (hundredsToNumber == 9) {
        result = "CM";
      }
      return result;
      
    }
    function thousandsRoman() {
      var result = "";
      var thousandsToNumber = thousands.map(Number);
      for (var i = 0; i < thousandsToNumber; i++) {
        result = result + "M";
      }
      console.log(result);
      return result;
    }
    num = thousandsRoman() + hundredsRoman() + tensRoman() + onesRoman();
    console.log(num);
    return num;
  }
  convertToRoman(155000000);