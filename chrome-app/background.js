chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('index.html', {
        'id': 'appWindow',
        'bounds': {'width': 356, 'height': 315}
    });
});