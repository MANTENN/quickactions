function polling() {
  console.log("polling");
  setTimeout(polling, 1000 * 10);
  console.log('quick actions :)')
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
  });
  chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
  });
}

polling();
