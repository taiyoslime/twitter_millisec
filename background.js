chrome.tabs.onUpdated.addListener(function(tabId){
	chrome.tabs.executeScript( tabId.id, {
    	file: "main.js"
  	});
})
