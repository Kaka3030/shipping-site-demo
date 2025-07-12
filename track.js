
function track() {
    const code = document.getElementById("trackCode").value;
    const status = document.getElementById("status");
    if (code.startsWith("SHIP")) {
        status.innerHTML = "<p>Status: In Transit</p><p>Last Update: Left sorting facility, Lagos</p>";
    } else {
        status.innerHTML = "<p style='color:red;'>Tracking number not found.</p>";
    }
}
