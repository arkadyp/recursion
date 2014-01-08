// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  //check if json string is number
  //
  var value;

  var processArray = function() {
    //cycle through this string and look for commas that aren't enclosed in quotations marks
    value = [];
    var substr = ""; //store indiv string
    var arrayElements = [];  //store stringy array elements
    var insideString = false; //check if inside string, if so, commas don't count as splitting apart array
    for(var c = 1; c < json.length-1; c++) {
      if(json[c] === '"' && insideString) { //end of string
        insideString = false;
      } else if(json[c] === '"') { //start of string value
        insideString = true;
      }

      if(json[c] === ',' && !insideString) { //found array element
        arrayElements.push(substr);
        substr = "";
        c++;
      } else {
        substr += json[c];
      }
    }
    arrayElements.push(substr);
    console.log(arrayElements);

    return value;
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
    processArray();
  }


  console.log(value);
  return value;

};