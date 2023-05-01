(async () => {
    for (let i = 0; i < properties.length; i++) {
        console.log(properties[i][0] + " = " + properties[i][1]);
    }
})()

chrome.storage.local.get(["key"]).then((result) => {
    document.documentElement.style.setProperty("--gradient-start", result.key);
});