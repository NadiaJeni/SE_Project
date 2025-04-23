// patient login

const pLoginForm = document.querySelector("#pLoginForm");

pLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const pLoginEmail = document.querySelector("#pLoginEmail").value;
  const pLoginPassword = document.querySelector("#pLoginPassword").value;

  if (pLoginEmail == "patient@gmail.com" && pLoginPassword == "1234") {
    localStorage.setItem("isLoggedIn", 'true');
    window.location.href = "/patient/p_dashboard.html";
  } else {
    alert("ERROR!!!\nCheck Your Credentials!!!");
  }
});
