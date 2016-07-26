var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title; 
	this.text = text; 

	this.connections =[]; 
	this.conditions = {}; 
}
Node.prototype.connect = function(nodeConn, conditionsStr){
	if (this.conditions.hasOwnProperty(conditionsStr)){
		var err = new Error("\""+ conditionsStr + "\" already exists.");
		throw err; 
	} else {
		var newConnection = new Connection(nodeConn, conditionsStr); 
		this.connections.push(newConnection);
		this.conditions[conditionsStr] = newConnection;
	}
}


module.exports = Node