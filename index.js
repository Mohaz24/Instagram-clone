const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 100
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 500,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 50,
  },
];

const container = document.querySelector(".posts");
console.log(posts);

let elements = ``;
posts.forEach((posters) => {
  //console.log(posters)
  elements += `
  
  <section>
      <div class="container">
        <div class="flex-box">
          <div>
            <img src="${posters.avatar}" class="avatar" />
          </div>
          <div>
            <span class="user title">${posters.name}</span>
            <span class="user  sub-title">${posters.location}</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <img src="${posters.post}" class="section-post" />
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="flex">
          <img src="images/icon-heart.png" class="icon heart" />
          <img src="images/icon-comment.png" class="icon" />
          <img src="images/icon-dm.png" class="icon" />
        </div>
        <p class="likes">${posters.likes} likes</p>
        <p class="comment">
          <span class="bold">${posters.username}</span>  ${posters.comment}
        </p>
      </div>
    </footer>
  `;
});

container.innerHTML = elements;
