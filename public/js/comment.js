const createComment = async function (event) {
  event.preventDefault();

  const commentId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

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

document.querySelector("form id").addEventListener("submit", createComment);
