window.homepageUrl=window.location.href.replace("index.html","home.html");
const loadPage = function () {
  let wsite = document.getElementById("searchbox").value;
  if(wsite=="freecat:homepage") {
    document.getElementById("view").src=homepageUrl;
  }
  else {
    document.getElementById("view").src = wsite;
  }
};
document.getElementById("load").addEventListener("click", loadPage);
document.getElementById("searchbox").addEventListener("enter", loadPage);
let webview = document.getElementById("view");
let search = document.getElementById("searchbox");
webview.addEventListener("did-stop-loading", () => {
  if (document.activeElement !== search && webview.src!==homepageUrl) {
    search.value = webview.src;
  }
  if(webview.src==homepageUrl) {
    search.value="freecat:homepage";
  }
});
