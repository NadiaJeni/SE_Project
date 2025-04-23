// window.onload = function () {
//   let isLoggedIn = localStorage.getItem("isLoggedIn");
//   let currentUserEmail = localStorage.getItem("currentUser"); // Get current user's email

//   if (isLoggedIn !== "true" || !currentUserEmail) {
//     window.location.href = "login.html"; // Redirect if not logged in
//   }

//   let userData = localStorage.getItem(currentUserEmail); // Get user details
//   let user = JSON.parse(userData); // Convert back to object

//   // user info
//   let welcome = document.getElementById("welcome");

//   if (user) {
//     welcome.innerText = `Welcome ${user.username}`;
//   }

//   // Auto logout if the user presses the back button
//   window.history.pushState(null, null, window.location.href);
//   window.onpopstate = function () {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("currentUser");
//     window.location.href = "login.html";
//   };
// };

// // Logout button functionality
// document.getElementById("logoutBtn").addEventListener("click", function () {
//   let confirmed = confirm("You will be logged out!");
//   if (confirmed) {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("currentUser");
//     window.location.href = "login.html";
//   } else {
//     return;
//   }
// });

// // blood request email auto set
// let brEmail = document.getElementById("br-email");

// let currentUserEmail = localStorage.getItem("currentUser"); // Get current user's email
// let userData = localStorage.getItem(currentUserEmail); // Get user details
// let user = JSON.parse(userData); // Convert back to object

// brEmail.value = user.email;

// //

// let brForm = document.getElementById("br-form");

// brForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (
//     (user.madeReq == undefined && user.pendingReq == undefined) ||
//     (user.madeReq == null && user.pendingReq == null)
//   ) {
//     user.madeReq = 0;
//     user.pendingReq = 0;
//   }

//   user.madeReq++;
//   user.pendingReq++;

//   let patientInfo = {
//     username: user.username,
//     email: user.email,
//     age: user.age,
//     bloodGroup: user.bloodGroup,
//     password: user.password,
//     madeReq: user.madeReq,
//     pendingReq: user.pendingReq,
//     acceptedReq: user.acceptedReq,
//     rejectedReq: user.rejectedReq,
//   };

//   localStorage.setItem(patientInfo.email, JSON.stringify(patientInfo));
// });

document.getElementById("dWelcome").innerText = "Welcome Donor";

//blood request form
document.getElementById("bd-email").value = "donor@gmail.com"; // will  be added dynamically


document.getElementById("bd-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let fName = document.getElementById("bd-fName").value;
  let lName = document.getElementById("bd-lName").value;
  let age = document.getElementById("bd-age").value;
  let gender = document.querySelector('input[name="bd-gender"]:checked').value;
  let bloodGrp = document.getElementById("bd-bloodGrp").value;
  let disease = document.getElementById("bd-disease").value;
  let quantity = document.getElementById("bd-quantity").value;
  let address = document.getElementById("bd-address").value;
  let phone = document.getElementById("bd-phone").value;
  let donated = document.getElementById("bd-donated").value;
  let donationDate = document.getElementById("bd-date").value;
  let datenTime = document.getElementById("bd-datenTime").value;

  let bdDateTime = new Date(datenTime);

  // Extract the date and time separately
  const date = bdDateTime.toLocaleDateString(); // Formats the date
  const time = bdDateTime.toLocaleTimeString(); // Formats the time

  if (bloodGrp !== "Enter Blood Group") {
    if (donated == "Yes" && donationDate == "") {
      alert("Please enter last donation date!");
      return;
    }
    //will be stored in db
    console.log(`Name: ${fName} ${lName}`);
    console.log(`Age: `, age);
    console.log("Gender: ", gender);
    console.log(`Blood Group: `, bloodGrp);
    console.log(`Disease: `, disease);
    console.log(`Quantity: `, quantity);
    console.log(`Address: `, address);
    console.log(`Phone: `, phone);
    console.log(`Donated Before?: `, donated);
    console.log(`Donated Before on: `, donationDate);
    console.log(`Be present on: `, date, " at: ", time);
    alert("Blood Donation Request Submitted!");
  } else {
    alert("Input All Fields!");
  }
});

