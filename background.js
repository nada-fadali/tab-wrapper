function openWrapTab (tab) {
	chrome.tabs.create({'url': chrome.extension.getURL('wrap.html')}, function (tab) {
		
		// send all opened tabs url
		chrome.tabs.query({}, function(tabs) {
			// alert(JSON.stringify(tabs[0]));
			var urls = [];
			for (var i = 0; i < tabs.length; i++) urls[i] = tabs[i].url

			chrome.runtime.sendMessage({
				action: "wrap",
				urls: urls
			});
		});


	});
}

// When the browser action is clicked
chrome.browserAction.onClicked.addListener(openWrapTab);