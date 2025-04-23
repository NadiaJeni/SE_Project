// admin login

const aLoginForm = document.querySelector("#aLoginForm");

aLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const aLoginEmail = document.querySelector("#aLoginEmail").value;
  const aUsername = document.querySelector("#aUsername").value;
  const aLoginPassword = document.querySelector("#aLoginPassword").value;

  if (aLoginEmail == "admin@gmail.com" && aLoginPassword == "1234" && aUsername == "admin") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/admin/a_dashboard.html";
  } else {
    alert("ERROR!!!\nCheck Your Credentials!!!");
  }
});
