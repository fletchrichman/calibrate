console.log("Hello. This meeting is gonna be awesome!");

$('body').prepend( "<div>Calibrateio</div>");



chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Hello. this is within the message");


		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------

	}
	}, 10);
});