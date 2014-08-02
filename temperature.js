//my solution
// var f2c = function(far) {
// 	var tempInC = (far - 32) * 5/9;
// 	return tempInC;
// }

// var c2f = function(cel) {
// 	var tempInF = cel * 9/5 + 32;
// 	return tempInF;
// }

// var Temperature = function(far) {
// 	this.setFahrenheit = function(number) {
// 		this.fahrenheit = function(){
// 			return number;
// 		}
// 		this.celcius = function() {
// 			return number - 32;
// 		}
// 	}
// 	this.setCelcius = function(number) {
// 		this.celcius = function() {
// 			return number;
// 		}
// 		this.fahrenheit = function() {
// 			return number + 32;
// 		}
// 	}
// 	this.celcius = function() {
// 		return f2c(far);
// 	}
// }




//David's solution
var f2c = function(fahr) {
  return (fahr - 32) * 5 / 9;
};

var c2f = function(cels) {
  return (cels * 9 / 5) + 32;
};

var Temperature = function(fahr) {
  // this = {};
  // this.__proto__ = Temperature.prototype;
  var myfahr = fahr;
  this.setFahr = function(_fahr) {
    myfahr = _fahr;
  };

  this.getFahr = function() {
    return myfahr;
  };
  // return this;
};

Temperature.prototype.setFahrenheit = function(fahr) {
  this.setFahr(fahr);
};

Temperature.prototype.fahrenheit = function() {
  return this.getFahr();
};

Temperature.prototype.celcius = function() {
  return f2c(this.getFahr());
};

Temperature.prototype.setCelcius = function(cel) {
  this.setFahr(c2f(cel));
};


//closure with functions
//function scope






















