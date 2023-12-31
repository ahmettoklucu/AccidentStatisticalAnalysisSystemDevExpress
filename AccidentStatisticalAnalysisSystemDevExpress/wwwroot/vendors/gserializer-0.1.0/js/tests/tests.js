function OtherObject(name) {
	this.name = name;
	this.getName = function() {
		alert(this.name);
	};
}

function MyObject() {
	this.x = 1;
	this.foo = new Array("initial item1", "initial item2", "initial item3");
	this.obj = new OtherObject('Matt\'s other object');
	this.objArray = new Array(new OtherObject('foo object 1'), new OtherObject(
			'foo object 2'), new OtherObject('foo object 3'));
	var cool = "cool";
	this.callInternalFunction = function() {
		internalFunction();
	};
	internalFunction = function() {
		alert('Calling an internal function and displaying encapsulated variable \'cool\': ' + cool);
	};
}

MyObject.prototype.addItem = function(item) {
	this.foo[this.foo.length] = item;
};

MyObject.prototype.display = function() {
	for ( var i = 0; i < this.foo.length; i++) {
		alert(this.foo[i]);
	}
};

MyObject.prototype.displayObjs = function() {
	for ( var i = 0; i < this.objArray.length; i++) {
		this.objArray[i].getName();
	}
};

MyObject.prototype.getX = function() {
	alert(this.x);
};

MyObject.prototype.displayObj = function() {
	this.obj.getName();
};