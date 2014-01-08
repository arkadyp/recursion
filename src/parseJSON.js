// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  //check if json string is number
  //
  var value;

  var processArray = function(stringArr) {  //receives string without brackets
    
    
    
    //cycle through this string and look for commas that aren't enclosed in quotations marks
    //"8,8,8" --> ["8","8","8"] --, process "8"  -> push on to array
    //8,"a",true --> ["8", ""a"", "true"]
    var splitArray = function() {  
      var arrayElements = [];  //store stringy array elements
      var substr = ""; //store indiv string
      var insideString = false;
      for(var c = 0; c < stringArr.length; c++) {
        if(!insideString && stringArr[c] === ',') { //comma outside of string --> push element
          arrayElements.push(subr);
        } else {
          substr += stringArr[c]; 
          if(stringArr[c] === '"') {
            insideString = true;  //encounter first quotation
          } else if(stringArr[c] === '"' && insideString) {
            insideString = false; //encounter quotation close                      
          }  
        }
      }
      return arrayElements;
    }

    //assign array of simple string items to be process recursively
    var tokens = splitArray(json);
    console.log("TOKENS: "+tokens);
    //process tokens
    _.each(tokens, function(val) {
      value.push(parseJSON(val));
    }); 

    console.log("VALUES: "+ value);
    
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
    //pass content between '[' and ']' to processArray
    var arrStringContent = json.slice(1, json.length-1);
    value = processArray(arrStringContent);
  }


  
  return value;

};



//for(var c = 1; c < json.length-1; c++) {
    //   if(json[c] === '"' && insideString) { //end of string        
    //     insideString = false;        
    //   } else if(json[c] === '"') { //start of string value
    //     insideString = true;
    //     substr += json[c]; //push initial quotation mark on string
    //   }

    //   if(json[c] === ',' && !insideString) { //found array element
    //     arrayElements.push(substr);
    //     substr = "";
    //     c++;
    //   } else {
    //     substr += json[c];
    //   }
    // }




