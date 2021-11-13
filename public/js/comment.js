const createComment = async function (event) {
  event.preventDefault();

  const body = document.querySelector("#comment-body").value;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        commentId,
        body,
      }),
    });

    document.location.reload();
  }
};

document.querySelector("#commentBtn").addEventListener("submit", createComment);
