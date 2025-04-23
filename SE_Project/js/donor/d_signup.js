// donor signup

const dSignupForm = document.querySelector("#dSignupForm");

dSignupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const dUsername = document.querySelector("#dUsername").value;
  const dEmail = document.querySelector("#dEmail").value;
  const dPassword = document.querySelector("#dPassword").value;
  const dConfirmPassword = document.querySelector("#dConfirmPassword").value;

  if (dPassword !== dConfirmPassword) {
    alert("Password didn't match!");
    return;
  }

  console.log(`Username: `, dUsername);
  console.log(`Email: `, dEmail);
  console.log(`Password: `, dPassword);

  alert("Signup complete.\nReturn to Login page..");

  window.location.href = "/donor/d_login.html";
});
