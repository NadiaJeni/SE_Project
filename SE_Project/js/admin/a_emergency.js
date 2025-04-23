let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
    window.location.href = "a_login.html";
}

document.getElementById("aWelcome").innerText = "Welcome Admin";

// Dummy emergency requests
const emergencies = [
    {
        id: 1,
        patient: "Nusrat Jahan",
        bloodGroup: "O-",
        location: "Dhaka Medical",
        contact: "019xxxxxxx",
        time: "2025-04-23 10:30 PM",
        status: "Urgent"
    },
    {
        id: 2,
        patient: "Sajib Hossain",
        bloodGroup: "AB+",
        location: "Square Hospital",
        contact: "016xxxxxxx",
        time: "2025-04-24 8:00 AM",
        status: "Handled"
    }
];

// Populate emergency table
const eTbody = document.querySelector("#emergencyTableBody");
emergencies.forEach(e => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${e.id}</td>
    <td>${e.patient}</td>
    <td>${e.bloodGroup}</td>
    <td>${e.location}</td>
    <td>${e.contact}</td>
    <td>${e.time}</td>
    <td><span class="status">${e.status}</span></td>
    <td>
      <button onclick="markHandled(${e.id})">Mark as Handled</button>
    </td>
  `;
    eTbody.appendChild(row);
});

function markHandled(id) {
    alert(`Emergency #${id} marked as Handled`);
    // Backend update logic goes here
}
// JavaScript source code
