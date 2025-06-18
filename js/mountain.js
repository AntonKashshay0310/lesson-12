const mountain = [
  {
    imege: "../img/mountain-9631829_1280.jpg",
    title: "mountain",
  },
  {
    imege: "../img/mountains-9473304_1280.jpg",
    title: "mountain",
  },
  {
    imege: "../img/mountains-9580848_1280.jpg",
    title: "mountain",
  },
];

const mountainList = document.getElementById("mountain-list");

const markUp = mountain
  .map(
    ({ imege, title }) => `
<li class="mountain__item card" style="width: 18rem;">
<img src=${imege} class="card-img-top"
    alt=${title}}>
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card’s
        content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</li>
`
  )
  .join("");

mountainList.insertAdjacentHTML("beforeend", markUp);
