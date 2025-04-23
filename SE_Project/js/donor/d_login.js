// donor login

const dLoginForm = document.querySelector("#dLoginForm");

dLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const dLoginEmail = document.querySelector("#dLoginEmail").value;
  const dLoginPassword = document.querySelector("#dLoginPassword").value;

  if (dLoginEmail == "donor@gmail.com" && dLoginPassword == "1234") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/donor/d_dashboard.html";
  } else {
    alert("ERROR!!!\nCheck Your Credentials!!!");
  }
});
