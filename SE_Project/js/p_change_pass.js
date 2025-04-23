document.getElementById("pWelcome").innerText = "Welcome Patient";

// password change
let pChangePassForm = document.querySelector("#pChangePassForm");

pChangePassForm.onsubmit = function (e) {
  e.preventDefault();

  let pChangePass = document.querySelector("#pChangePass").value;
  let pConfirmChangePass = document.querySelector("#pConfirmChangePass").value;

  if (pChangePass !== pConfirmChangePass) {
    alert("Password didn't match!");
    return;
  } else {
    let confirmChange = confirm("Confirm Change Password?");

    if (confirmChange) {
      console.log(`Password: ${pChangePass}`);
      alert("Password Changed...");
    }
  }
};

