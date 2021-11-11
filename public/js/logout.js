const logout = async function () {
  await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/");
};

document.querySelector("#logout-link").addEventListener("click", logout);
