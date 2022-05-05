var static = {};
var performance = {};
var activity = {};


function imagesEnabled() {
	if ((document.getElementById('imageFlag').offsetWidth == 1)) {
		static["imagesEnabled"] = true;
	} else {
		static["imagesEnabled"] = false;
	}
}

function cssEnabled () {
	static["cssEnabled"] = window.getComputedStyle(document.getElementById('heading')).display === 'flex' ? true : false;
}

function showNavDetails() {
	// Get the first entry
	const [entry] = performance.getEntriesByType("navigation");
	// Show it in a nice table in the developer console
	console.table(entry.toJSON());
}

function load() {
	static["userAgent"] = window.navigator.userAgent;
	static["language"] = window.navigator.language;
	static["acceptCookies"] = window.navigator.cookieEnabled;
	static["windowInnerWidth"] = window.innerWidth;
	static["windowInnerHeight"] = window.innerHeight;
	static["windowOuterWidth"] = window.outerWidth;
	static["windowOuterHeight"] = window.outerHeight;
	static["screenWidth"] = window.screen.width;
	static["screenHeight"] = window.screen.height;
	let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
	if (connection != undefined) {
		static["connectionType"] = connection.effectiveType;
	}
	static["jsEnabled"] = true;
	console.log(static);

}

window.onload = load();
