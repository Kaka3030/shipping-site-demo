
function track() {
    const code = document.getElementById("trackCode").value;
    const status = document.getElementById("status");
    if (code.startsWith("SHIP")) {
        status.innerHTML = "<p>Status: In Transit</p><p>Last Update: Left sorting facility, Lagos</p>";
    } else {
        status.innerHTML = "<p style='color:red;'>Tracking number not found.</p>";
    }
}
function generateTracking() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let tracking = "SHIP";
    for (let i = 0; i < 10; i++) {
        tracking += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("trackingDisplay").innerText = tracking;
}
