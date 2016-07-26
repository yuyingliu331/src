var Node = require('./node')

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;

}

Game.prototype.addNode = function(title, text){
	if(this.nodes.hasOwnProperty(title)){
		var err = new Error("This node already exists.");
		throw err;
	}else{
	var newNode  = new Node(title, text);
	this.nodes[title]= newNode;
	if(this.startingPoint === null){
		this.startingPoint = newNode;
	}
	return newNode; 
	}
}

Game.prototype.getNode = function(title){
	return this.nodes[title]; 
}

Game.prototype.connect = function(title1, title2, condition) {
	//var this.hasBeenCalled = false; 
	var node1 = this.getNode(title1); 
	//var node2 = this.getNode(title2); 

		   node1.connect(title2,condition);
           //return true;
		}else{
			var err = new Error("This node does not exists");
			throw err;
		}
}
module.exports = Game