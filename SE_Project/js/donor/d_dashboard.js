// check if donor is logged in
let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "d_login.html";
}

// donor dashboard info
document.getElementById("dWelcome").innerText = "Welcome Donor";

document.getElementById("made-req").innerText = 0;
document.getElementById("pen-req").innerText = 0;
document.getElementById("app-req").innerText = 0;
document.getElementById("rej-req").innerText = 0;
