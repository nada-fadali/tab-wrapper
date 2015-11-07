var urls;

$(window).load(function() {
	// get opened tabs url
  	chrome.runtime.onMessage.addListener(function(request, sender) {

		if (request.action == "wrap") {
			urls = request.urls;

			var html, width, height, rand;

			for (var i = 0; i < urls.length-1; i++) {
				rand = Math.random();
				while(rand==0) rand = Math.random();

				width = window.innerWidth - (window.innerWidth * rand);
				height = window.innerHeight - (window.innerHeight * rand);
				
				html = '<iframe src="' + urls[i] + '" width="' + width + '" height="' + height + '"></iframe>';

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