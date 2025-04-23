const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.onclick = function () {
  let confirmLogout = confirm("You will be logged out!");

  if (confirmLogout == true) {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/index.html";
  } else {
    return;
  }
};
