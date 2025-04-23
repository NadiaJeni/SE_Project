document.getElementById("dWelcome").innerText = "Welcome Donor";

// password change
let dChangePassForm = document.querySelector("#dChangePassForm");

dChangePassForm.onsubmit = function (e) {
  e.preventDefault();

  let dChangePass = document.querySelector("#dChangePass").value;
  let dConfirmChangePass = document.querySelector("#dConfirmChangePass").value;

  if (dChangePass !== dConfirmChangePass) {
    alert("Password didn't match!");
    return;
  } else {
    let confirmChange = confirm("Confirm Change Password?");

    if (confirmChange) {
      console.log(`Password: ${dChangePass}`);
      alert("Password Changed...");
    }
  }
};
