export function add(a, b) {
	if(typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	}
	return a + b;
}


export function sub(a, b) {
	if(typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	}
	return a - b;
} 


export function multi(a, b) {
	if(typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	}
	return a * b;
}


export function div(a, b) {
	if(a < b) {
		return null;
	}
	if(typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	}
	return a / b;
}


export function module(a, b) {
	if(a < b) {
		return null;
	}
	if(typeof(a) !== "number" || typeof(b) !== "number") {
		return null;
	}
	return a % b;
} 