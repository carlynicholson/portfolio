$(".resToggle").click(function() {
  $(".myTopNav").toggleClass("active");
});
const isHome = window.location.pathname === "/portfolio/" || window.location.pathname === "/index.html"

fetch('./featured.json')
.then(data => data.json())
// .then(data => console.log(Array.isArray(data)))
.then(featured => featured.map((obj, i) => `<a href='${obj.url}' class="project-link"> <li class="card">
<div class="card-image" style="background-image: url('${obj.image}');"></div>
<button class="card-btn btn-block">Project ${i + 1}</button>
<div class="card-content">
  <div class="card-title">${obj.title}</div>
  <p class="card-text">
    ${obj.description}
  </p>
</div>
</li>
</a>`
)
)
.then(arr => {
  if (isHome) {
   return arr.slice(-3).reverse()
  } else {
    return arr
  }
  })
.then(cardsArr => cardsArr.join(' '))
.then(string => $("ul.deck").append(string)) 

function app(projects) {
  // console.log(projects)
  projects.map((project,i) => {
    let $item = $("<li>").addClass("card").url(`${project.url}`);
    let $image = $("<div>").addClass("card-image").css("background-image", `${project.image}`);
    let $button = $("<button>").addClass("card-btn btn-block").text(`Project ${i}`);
    let $content = $("<div>").addClass("card-content");
    let $title = $("<div>").addClass("card-title").text(`${project.title}`);
    let $text = $("<p>").addClass("card-text").text(`${project.description}`);
  })
}