document.getElementById("dWelcome").innerText = "Welcome Donor";

// sample data will be replaced by backend data
const sampleData = [
  {
    date: "20-03-2025",
    bloodGrp: "A+",
    quantity: "500",
    disease: "nothing",
    status: "pending",
  },

  {
    date: "22-04-2023",
    bloodGrp: "A-",
    quantity: "1000",
    disease: "dengue",
    status: "rejected",
  },

  {
    date: "20-03-2023",
    bloodGrp: "O+",
    quantity: "800",
    disease: "nothing",
    status: "accepted",
  },
];

window.onload = function () {
  let tBody = document.querySelector("#dHistoryTable");
  tBody.innerHTML = "";

  sampleData.forEach((data) => {
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${data.date}</td>
            <td>${data.bloodGrp}</td>
            <td>${data.quantity}</td>
            <td>${data.disease}</td>
            <td>${data.status}</td>
        `;

    tBody.appendChild(row);
  });
};
