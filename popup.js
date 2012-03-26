function weightIt() {
	saveNames();
	var names = JSON.parse(localStorage["fbids"]);
	chrome.extension.getBackgroundPage().startNamesLoop(names);
}

function stopWeigh() {
	chrome.extension.getBackgroundPage().stopNamesLoop();
}

function getNames() {
	var res = JSON.parse(localStorage["fbids"]);
	var ret = "";
	for(var i = 0; i < res.length; ++i) {
		if(i > 0) ret += ", ";
		ret += res[i];
	}
	return ret;
}

function loadNames() {
	var ret = getNames();
	var inp = document.getElementById("myinput");
	inp.value = ret;
}

function saveNames() {
	var inp = document.getElementById("myinput");
	var toStore = inp.value;
	var spl = toStore.split(",");
	var arr = [];
	$ABC = spl;
	for(var i = 0; i < spl.length; ++i) {
		var cur = spl[i];
		console.log(cur);
		// Trim string
		var trimmed = cur.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		arr.push(trimmed);
	}
	localStorage["fbids"] = JSON.stringify(arr);
}

function setUpDisplay() {
	var weighting = chrome.extension.getBackgroundPage().isWeighting();
	if(weighting) stopWeigh();
}

window.onload = function() {
	setUpDisplay();
	loadNames();
}