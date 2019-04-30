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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error al crear ");
      }
    }, 2000);
  });
}

// createPost({ title: "tercer post", body: "mi tercer post" })
//   .then(getPost)
//   .catch(error => {
//     console.log(error);
//   });

// Promise.all
/*const promise1 = Promise.resolve("promise 1 ");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "salio");
});*/

// const promise4 = fetch("https://jsonplaceholder.typicode.com/posts")
// .then(
//   resp => resp.json()
// ).catch(error => {
//      console.log(error);
//   });

// Promise.all([promise1, promise2, promise3, promise4])
//   .then(values => {
//     console.log(values);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//async await
async function getPostRest() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  const resp = await data.json();

  const dpost = await resp.map(item => {
    const comments = fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const respc = comments.json();
    console.log(respc);
  });
}

getPostRest();
