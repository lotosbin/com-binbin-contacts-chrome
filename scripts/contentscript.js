var regex = /彭青/;

// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
	alert('彭青');
  //chrome.extension.sendRequest({}, function(response) {});
} else {
  // No match was found.
	//alert('no match');
}
