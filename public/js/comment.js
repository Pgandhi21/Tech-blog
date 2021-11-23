const createComment = async function (event) {
  event.preventDefault();

  const body = document.querySelector("#comment-body").value;
  console.log(body);

  await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
  });

  // document.location.reload();
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", createComment);
