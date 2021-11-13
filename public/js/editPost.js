const editPost = async function (event) {
  event.preventDefault();
  
  const postId = document.querySelector('input[name="post-id"]').value;
  const title = document.querySelector("#post-title").value;
  const body = document.querySelector("#post-body").value;
  

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const deletePost = async function () {
  const postId = document.querySelector('input[name="post-id"]').value;
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#edit-post-form").addEventListener("submit", editPost);

document.querySelector("#deleteBtn").addEventListener("click", deletePost);
