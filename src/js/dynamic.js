function webload() {
    let wsite = document.getElementById("searchbox").value;
    if (wsite = "fc_home") {
        wsite="../home.html";
    }
    if (wsite = "fc_settings") {
        wsite="../home.html";
    }
    document.getElementById('frame').src=wsite;
}
