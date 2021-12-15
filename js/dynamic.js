const loadPage = function () {
  let wsite = document.getElementById("searchbox").value
  document.getElementById("view").src = wsite
}
document.getElementById("load").addEventListener("click", loadPage)
document.getElementById("searchbox").addEventListener("enter", loadPage)
let webview = document.getElementById("view")
let search = document.getElementById("searchbox")
webview.addEventListener("did-stop-loading", () => {
  if (document.activeElement !== search) {
    search.value = webview.src
  }
})
