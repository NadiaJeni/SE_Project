let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
    window.location.href = "a_login.html";
}

document.getElementById("aWelcome").innerText = "Welcome Admin";

// Sample blood requests data (replace with backend data)
const requests = [
    {
        id: 1,
        name: "Fahim Rahman",
        bloodGroup: "A+",
        email: "fahim@example.com",
        phone: "017xxxxxxx",
        date: "2025-04-15",
        status: "Pending"
    },
    {
        id: 2,
        name: "Sara Islam",
        bloodGroup: "B-",
        email: "sara@example.com",
        phone: "018xxxxxxx",
        date: "2025-04-20",
        status: "Approved"
    }
];

// Populate the table
const tbody = document.querySelector("#requestsTableBody");
requests.forEach(req => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${req.id}</td>
    <td>${req.name}</td>
    <td>${req.bloodGroup}</td>
    <td>${req.email}</td>
    <td>${req.phone}</td>
    <td>${req.date}</td>
    <td><span class="status">${req.status}</span></td>
    <td>
      <button onclick="updateStatus(${req.id}, 'Approved')">Approve</button>
      <button onclick="updateStatus(${req.id}, 'Rejected')">Reject</button>
    </td>
  `;
    tbody.appendChild(row);
});

function updateStatus(id, newStatus) {
    alert(`Request #${id} marked as ${newStatus}`);
    // Update status in backend logic if needed
}
// JavaScript source code
