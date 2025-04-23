document.getElementById("dWelcome").innerText = "Welcome Donor";

// user information (dynamic)

document.getElementById("d-profile-name").innerText = "Donor";
document.getElementById("d-profile-mail").innerText = "Donor@mail.com";
document.getElementById("d-profile-age").innerText = "000";
document.getElementById("d-profile-bloodGrp").innerText = "D+";

// update information
const dInfoUpdate = document.getElementById("dInfoUpdate");

dInfoUpdate.addEventListener("click", () => {
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
let dUpdateEmail = document.querySelector("#dUpdateEmail");
dUpdateEmail.value = "donor@gmail.com"; // will  be added dynamically

document.querySelector("#dUpdateForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let dUpdateUsername = document.querySelector("#dUpdateUsername").value;
  let dUpdateAge = document.querySelector("#dUpdateAge").value;
  let dUpdateBloodGrp = document.querySelector("#dUpdateBloodGrp").value;

  if (
    dUpdateUsername !== "" &&
    dUpdateAge !== "" &&
    dUpdateBloodGrp !== "Enter Blood Group"
  ) {
    document.getElementById("d-profile-name").innerText = dUpdateUsername;
    document.getElementById("d-profile-mail").innerText = dUpdateEmail.value;
    document.getElementById("d-profile-age").innerText = dUpdateAge;
    document.getElementById("d-profile-bloodGrp").innerText = dUpdateBloodGrp;
    alert("Information Updated!");
    document.getElementById("profile-box1").style.left = "200px";
    document.getElementById("profile-box2").style.left = "800px";
  } else {
    alert("Input all the fields!");
  }
});
