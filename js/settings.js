document.getElementById("set-search-provider").addEventListener("click", function() {
    let newProvider=document.getElementById("search-provider").value;
    if((newProvider.startsWith("https://") || newProvider.startsWith("http://") || newProvider.startsWith("file://") && newProvider.includes("%s"))) {
        localStorage.searchProvider=newProvider;
    }
    else {
        alert("Invalid input.");
    }
})