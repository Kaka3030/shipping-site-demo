
function track() {
  const code = document.getElementById("trackCode").value;
  const status = document.getElementById("status");

  if (code.startsWith("SHIP")) {
    status.innerHTML = "<p>Status: In Transit 📦</p>";
  } else {
    status.innerHTML = "<p style='color:red;'>Tracking number not found ❌</p>";
  }
}

function generateTracking() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let tracking = "SHIP";
    for (let i = 0; i < 10; i++) {
        tracking += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Display tracking code
    document.getElementById("trackingDisplay").innerText = tracking;

    // Automatically put it into the input box
    document.getElementById("trackCode").value = tracking;
}
