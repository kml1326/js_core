function loadScript(src) {
	let script = document.createElement('script');
	script.src = src;
	document.head.append(script);
}
loadScript('/parctice.js');

