let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "a_login.html";
}

document.getElementById("aWelcome").innerText = "Welcome Admin";

// blood stock

const bStock = {
  //will be replaced by backend data
  ap: 1000,
  an: 2000,
  bp: 1000,
  bn: 3000,
  abp: 1500,
  abn: 2000,
  op: 800,
  on: 500,
};

document.querySelector("#bStock-Ap").innerHTML = `<b>${bStock.ap}</b>`;
document.querySelector("#bStock-An").innerHTML = `<b>${bStock.an}</b>`;
document.querySelector("#bStock-Bp").innerHTML = `<b>${bStock.bp}</b>`;
document.querySelector("#bStock-Bn").innerHTML = `<b>${bStock.bn}</b>`;
document.querySelector("#bStock-ABp").innerHTML = `<b>${bStock.abp}</b>`;
document.querySelector("#bStock-ABn").innerHTML = `<b>${bStock.abn}</b>`;
document.querySelector("#bStock-Op").innerHTML = `<b>${bStock.op}</b>`;
document.querySelector("#bStock-On").innerHTML = `<b>${bStock.on}</b>`;

let stockUpBtn = document.querySelector("#BStock-upBtn");

stockUpBtn.addEventListener("click", () => {
  let bGrp = document.querySelector("#BStock-select").value;
  let bQuantity = document.querySelector("#BStock-quantity");

  if (bQuantity.value < 0) {
    alert("Please enter a valid quantity.");
    return;
  } else if (bQuantity.value == "") {
    alert("Please enter a quantity.");
  } else {
    document.querySelector(
      `#bStock-${bGrp}`
    ).innerHTML = `<b>${bQuantity.value}</b>`;
    bQuantity.value = "";
  }
});
