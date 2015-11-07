chrome.runtime.sendMessage({
	action: "sendHTML",
	data: document.getElementsByTagName("*")
});