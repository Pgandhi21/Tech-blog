const login = async function (event) {
  event.preventDefault();

  const usernameVal = document.querySelector("#username-login");
  const passwordVal = document.querySelector("#password-login");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameVal.value,
      password: passwordVal.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response) {
    document.location.replace("/dashboard");
  } else {
    alert("Try again");
  }
};

document.querySelector("#login-form").addEventListener("submit", login);
