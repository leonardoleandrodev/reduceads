chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.update(undefined,{ url: "https://12ft.io/proxy?ref=&q=" +  encodeURIComponent(tab.url) });
});