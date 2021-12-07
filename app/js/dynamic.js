const loadPage=function() {
    let wsite = document.getElementById("searchbox").value;
    document.getElementById("view").src=wsite;
}
document.getElementById("load").addEventListener("click",loadPage);