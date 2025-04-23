// patient signup

const pSignupForm = document.querySelector("#pSignupForm");

pSignupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const pUsername = document.querySelector("#pUsername").value;
  const pEmail = document.querySelector("#pEmail").value;
  const pPassword = document.querySelector("#pPassword").value;
  const pConfirmPassword = document.querySelector("#pConfirmPassword").value;

  if (pPassword !== pConfirmPassword) {
    alert("Password didn't match!");
    return;
  }

  console.log(`Username: `, pUsername);
  console.log(`Email: `, pEmail);
  console.log(`Password: `, pPassword);

  alert("Signup complete.\nReturn to Login page..");

  window.location.href = "/patient/p_login.html";
});

