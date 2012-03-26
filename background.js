var NUM_ACTIVE_TABS = 3;
var keepGoing = false;
var TAB_IDS = {};
var RANDOM_RESET_PROB = 0.1;
var globalArr = [];

function isWeighting() {
	return keepGoing;
}

function stopNamesLoop() {
	keepGoing = false;
}

function startNamesLoop(arr) {
	keepGoing = true;
	globalArr = arr;
	for(var i = 0; i < NUM_ACTIVE_TABS; ++i) {
		setTimeout(function() { randomActionLoop(); }, 100);
	}
}

function setUp() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if(keepGoing && TAB_IDS[tabId] && changeInfo.status == "complete") {
			if(Math.random() < RANDOM_RESET_PROB) {
				chrome.tabs.remove(tabId);
				TAB_IDS[tabId] = false;
				setTimeout(function() { randomActionLoop(); }, 2500);
			} else {
				setTimeout(function() { randomActionLoop(tab); }, 2500);
			}
		}
	});
}

function randomActionLoop(prevTab) {
	if(!keepGoing) return;
	var idx = Math.floor(Math.random() * globalArr.length);
	if(idx >= globalArr.length) {
		idx = 0;
	}
	var elem = globalArr[idx];
	var theUrl = "https://www.facebook.com/" + elem;
	
	if(!prevTab) {
		chrome.tabs.create({url: theUrl}, function(tab) {
			TAB_IDS[tab.id] = true;
		});
	} else {
		chrome.tabs.update(prevTab.id, {url: theUrl});
	}
}

window.onload = setUp;