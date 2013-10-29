// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className /*, elements, nodes*/) {
	var elements, node;
	(arguments[1] === undefined || arguments[1] === null) ? elements = [] : elements = arguments[1];
	(arguments[2] === undefined || arguments[2] === null) ? nodes = document.body.childNodes : nodes = arguments[2];

	_.each(nodes, function(node) {
		if(typeof(node.classList) != "undefined" && _.contains(node.classList, className)) {
			elements.push(node);
		}
		if(node.childNodes.length > 0) {
			getElementsByClassName(className, elements, node.childNodes);
		}		
	});
	return elements;

};
