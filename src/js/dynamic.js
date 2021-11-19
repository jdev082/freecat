function webload() {
    let wsite = document.getElementById("searchbox").value
    if (wsite = "fc:settings") {
        const wsite = "../settings.html"    
    }
    if (wsite = "fc:home") {
        let wsite = "../home.html"
    }
    document.getElementById('frame').src=wsite;
}
