if(typeof localStorage.searchProvider!=="string") {
  localStorage.searchProvider="https://duckduckgo.com/?q=%s";
}
window.homepageUrl=window.location.href.replace("index.html","home.html");
window.settingsUrl=window.location.href.replace("index.html","settings.html");
const loadPage = function () {
  let wsite = document.getElementById("searchbox").value;
  if(wsite=="freecat:homepage") {
    document.getElementById("view").src=homepageUrl;
  }
  else if(wsite.startsWith("freecat:settings")) {
    document.getElementById("view").src=settingsUrl.concat(wsite.split(settingsUrl)[1]);
  }
  else if(!(wsite.startsWith("https://") || wsite.startsWith("file://") || wsite.startsWith("http://"))) {
    document.getElementById("view").src=localStorage.searchProvider.replace("%s",encodeURIComponent(wsite));
  }
  else {
    document.getElementById("view").src = wsite;
  }
};
document.getElementById("load").addEventListener("click", loadPage);
document.getElementById("searchbox").addEventListener("keypress", function(e) {
  if(e.key=="Enter") {
    loadPage();
  };
})
document.getElementById("refresh").addEventListener("click", function(e) {
  if(e.ctrlKey) {
    webview.reloadIgnoringCache();
  }
  else {
    webview.reload();
  }
});
document.getElementById("back").addEventListener("click", function() {
  if(webview.canGoBack()) {
    webview.goBack();
  }
});
document.getElementById("forward").addEventListener("click", function() {
  if(webview.canGoForward()) {
    webview.goForward();
  }
});
document.getElementById("settings").addEventListener("click", function() {
  webview.src="settings.html";
})
/* document.addEventListener("keypress", function() {
  if(e.key=="ArrowLeft" && webview.canGoBack()) {
    webview.goBack();
  }
  if(e.key=="ArrowRight" && e.metaKey && webview.canGoForward()) {
    webview.goFoward();
  }
},true) */

document.getElementById("inspect").addEventListener("click", function() {
  webview.openDevTools();
});
document.getElementById("searchbox").addEventListener("enter", loadPage);
let webview = document.getElementById("view");
let search = document.getElementById("searchbox");
webview.addEventListener("did-stop-loading", () => {
  if (document.activeElement !== search) {
    search.value = webview.src;
  }
});
