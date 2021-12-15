<<<<<<< HEAD
function webload() {
  let wsite = document.getElementById("searchbox").value
  document.getElementById("view").src = wsite
}
=======
const loadPage = function () {
  let wsite = document.getElementById("searchbox").value
  document.getElementById("view").src = wsite
}
document.getElementById("load").addEventListener("click", loadPage)
document.getElementById("searchbox").addEventListener("enter", loadPage)
>>>>>>> parent of b97701c (Revert to release 1.0)
