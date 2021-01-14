function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();



function power(base) {
	return function(exp) {
		return (base**exp);
	};
}
var var1=power(2);
var var2=power(3);

console.log("power 2", var1(4), "var 2: ", var2(3));
