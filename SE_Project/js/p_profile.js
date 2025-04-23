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

document.getElementById("pWelcome").innerText = "Welcome Patient";

// user information (dynamic)

document.getElementById("p-profile-name").innerText = "User";
document.getElementById("p-profile-mail").innerText = "User@mail.com";
document.getElementById("p-profile-age").innerText = "999";
document.getElementById("p-profile-bloodGrp").innerText = "C+";

// update information
const pInfoUpdate = document.getElementById("pInfoUpdate");

pInfoUpdate.addEventListener("click", () => {
  document.getElementById("profile-box1").style.left = "-800px";
  document.getElementById("profile-box2").style.left = "-220px";
});

// cancel - goes back to user info
document.querySelector(".cancelBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("profile-box1").style.left = "200px";
  document.getElementById("profile-box2").style.left = "800px";
});

// update info (dynamic)
let pUpdateEmail = document.querySelector("#pUpdateEmail");
pUpdateEmail.value = "patient@gmail.com"; // will  be added dynamically

document.querySelector("#pUpdateForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let pUpdateUsername = document.querySelector("#pUpdateUsername").value;
  let pUpdateAge = document.querySelector("#pUpdateAge").value;
  let pUpdateBloodGrp = document.querySelector("#pUpdateBloodGrp").value;

  if (
    pUpdateUsername !== "" &&
    pUpdateAge !== "" &&
    pUpdateBloodGrp !== "Enter Blood Group"
  ) {
    document.getElementById("p-profile-name").innerText = pUpdateUsername;
    document.getElementById("p-profile-mail").innerText = pUpdateEmail.value;
    document.getElementById("p-profile-age").innerText = pUpdateAge;
    document.getElementById("p-profile-bloodGrp").innerText = pUpdateBloodGrp;
    alert("Information Updated!");
    document.getElementById("profile-box1").style.left = "200px";
    document.getElementById("profile-box2").style.left = "800px";
  } else {
    alert("Input all the fields!");
  }
});
