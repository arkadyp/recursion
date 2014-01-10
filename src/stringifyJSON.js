// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

	var str;

  if(typeof(obj) === 'string') {
    return "\""+obj+"\"";
  }
  else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }
  else if(typeof(obj) === 'undefined' || typeof(obj) === 'function') {
    return undefined;
  }
  else if(obj === null) {
    return 'null';
  }
  else if(Array.isArray(obj)) {
    str = "[";
    _.each(obj, function(val) {
      if(typeof(val) === 'function') { //JSON.stringify returns null if function is in array
        str += 'null,';
      }
      else {
        str += stringifyJSON(val)+","; //creates an extra comma at end
      }
    });
    str = (str.length > 1) ? str.slice(0,str.length-1)+"]" : str + "]"; //remove trailing comma
    return str;
  }
  else { //obj is an Object with keys and values
    str = "{";
    _.each(obj, function(val, key) {
      if(!(typeof(val) === 'undefined' || typeof(val) === 'function')) { //JSON.stringify does not include values that are functions/undefinted
        str += "\""+key+"\":"+stringifyJSON(val)+","; //creates an extra comma at end
      }
    });
    str = (str.length > 1) ? str.slice(0,str.length-1)+"}" : str + "}"; //remove trailing comma
    return str;
  }

};
