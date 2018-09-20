function Rectangle(height, width) {
	this.height = height;
	this.width = width;
}
Rect.prototype.area = 
	function(){
		return this.height * this.width;
	}

var rc = new Rect(2,3)

function Square(side) {
	this.height = this.width = side;
} 
Square.prototype = Object.create(Rect.prototype);