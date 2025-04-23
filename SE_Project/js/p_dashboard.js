// window.onload = function () {
//   let isLoggedIn = localStorage.getItem("isLoggedIn");
//   let currentUserEmail = localStorage.getItem("currentUser"); // Get current user's email

//   if (isLoggedIn !== "true") {
//     window.location.href = "p_login.html"; // Redirect if not logged in
//   }

//   let userData = localStorage.getItem(currentUserEmail); // Get user details
//   let user = JSON.parse(userData); // Convert back to object

//   // user info
//   let welcome = document.getElementById("pWelcome");

//   if (user) {
//     welcome.innerText = `Welcome ${user.username}`;
//   }

//   // Auto logout if the user presses the back button
//   window.history.pushState(null, null, window.location.href);
//   window.onpopstate = function () {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("currentUser");
//     window.location.href = "p_login.html";
//   };
// };

// // Logout button functionality
// document.getElementById("logoutBtn").addEventListener("click", function () {
//   let confirmed = confirm("You will be logged out!");
//   if (confirmed) {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("currentUser");
//     window.location.href = "p_login.html";
//   } else {
//     return;
//   }
// });

// // dashboard info

// let currentUserEmail = localStorage.getItem("currentUser"); // Get current user's email
// let userData = localStorage.getItem(currentUserEmail); // Get user details
// let user = JSON.parse(userData); // Convert back to object

// let patientInfo = {
//   username: user.username,
//   email: user.email,
//   age: user.age,
//   bloodGroup: user.age,
//   password: user.password,
//   madeReq: user.madeReq,
//   pendingReq: user.pendingReq,
//   acceptedReq: user.acceptedReq,
//   rejectedReq: user.rejectedReq,
// };

// localStorage.setItem(patientInfo.email, JSON.stringify(patientInfo));

// let req = document.getElementById("made-req");
// let pen = document.getElementById("pen-req");
// let app = document.getElementById("app-req");
// let rej = document.getElementById("rej-req");

// req.innerText = patientInfo.madeReq;
// pen.innerText = patientInfo.pendingReq;
// app.innerText = patientInfo.acceptedReq;
// rej.innerText = patientInfo.rejectedReq;

let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "p_login.html";
}

document.getElementById("pWelcome").innerText = "Welcome Patient";

document.getElementById("made-req").innerText = 0;
document.getElementById("pen-req").innerText = 0;
document.getElementById("app-req").innerText = 0;
document.getElementById("rej-req").innerText = 0;

