// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  
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
	}
	else { //obj is an Object with keys and values
	}

};
