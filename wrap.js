var urls;

$(window).load(function() {
	// get opened tabs url
  	chrome.runtime.onMessage.addListener(function(request, sender) {
	
		if (request.action == "wrap") {
			urls = request.urls;

			for (var i = 0; i < urls.length-1; i++) {
				var html = '<iframe src="' + urls[i] + '" width="500" height="600"></iframe>';

				$("#wrapper").append(html);
			};

			// $.ajax({
			// 	url: urls[0],
			// }).done(function(data){
			// 	// console.log(data);
			// });
		}
  	});
});