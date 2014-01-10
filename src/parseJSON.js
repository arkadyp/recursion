// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  //check if json string is number
  //
  var value;

  var processArray = function(stringArr) {  //receives string without brackets
    var array = [];
    //if array content is empty, pass it back
    if(stringArr === "") {
      return array;
    }

    //cycle through this string and look for commas that aren't enclosed in quotations marks
    //"8,8,8" --> ["8","8","8"] --, process "8"  -> push on to array
    //8,"a",true --> ["8", ""a"", "true"]
    var arrayElements = [];  //store stringy array elements
    var substr = ""; //store indiv string
    var insideString = false;

    for(var c = 0; c < stringArr.length; c++) {
      if(!insideString && stringArr[c] === ',') { //comma outside of string --> push element
        //arrayElements.push(substr); //string ready to be processed
        arrayElements.push(parseJSON(substr));
        substr = "";
      } else if(!insideString && stringArr[c] === '[') {  //check if it's start of new element
        console.log('array contents');
        console.log(stringArr);
        console.log('sub array');
        substr = stringArr.slice(c, stringArr.lastIndexOf(']')+1);
        console.log(substr);
      } else {
        substr += stringArr[c];
        if(stringArr[c] === '"') {
          insideString = true;  //encounter first quotation
        } else if(stringArr[c] === '"' && insideString) {
          insideString = false; //encounter quotation close
        }
      }
    }
    arrayElements.push(parseJSON(substr)); //push on last element
    return arrayElements;
  };

  if(!isNaN(Number(json))) {
    return Number(json);
  } else if(json === 'null') {
    value = null;
  } else if(json === 'true') {
    value = true;
  } else if(json === 'false') {
    value = false;
  } else if(json[0] === '"') {  //json value is string
    value = json.slice(1, json.length-1);
  } else if(json[0] === '[') {  //proccess array
    //pass content between '[' and ']' to processArray
    var arrStringContent = json.slice(1, json.length-1);
    value = processArray(arrStringContent);
  }



  return value;

};


