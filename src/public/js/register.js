const btnLogin = document.querySelector("#login");

btnLogin.addEventListener("click", () => {
  const user = document.querySelector("#username").value;
  if (user !== "") {
    document.cookie = `username=${user}`;
    document.location.href = "/";
  } else {
    alert("Please enter a username");
  }
});
