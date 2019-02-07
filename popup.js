function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "scan_and_click.js"});
    });
}
console.log('script injected')
document.getElementById('clickactivity').addEventListener('click', injectTheScript());