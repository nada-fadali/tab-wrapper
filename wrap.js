var urls;

$(window).load(function() {

  // get opened tabs url
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "wrap") {
      urls = request.urls;
      // console.log(urls);
    }
  });

  



});