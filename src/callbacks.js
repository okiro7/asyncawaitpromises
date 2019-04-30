const posts = [
  { title: "primer post", body: "mi primer post" },
  { title: "segundo post", body: "mi segundo post" }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((item, index) => {
      output += `<li>${index + 1}  ${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "tercer post", body: "mi tercer post" }, getPost);
