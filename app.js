$(".resToggle").click(function() {
  $(".myTopNav").toggleClass("active");
});
// let url = 'https://docs.google.com/spreadsheets/d/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/edit?usp=sharing'
let id = '1vQ8LlVZmMb3SQBhxB941x5pUDN2HSaQgZYsYD43An5tMFAOOgVf10a0xPcnMlPFleAm5k47Sfvo742A'
let source = `https://docs.google.com/spreadsheets/d/e/2PACX-193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/pubhtml`
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
const isHome = window.location.pathname === "/portfolio/" || window.location.pathname === "/index.html"

fetch(source)
  .then(response => response.json()) 
  .then(data =>  data.feed.entry.map(project => ( {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
            })
          )
        )
  .then(array => array.map((obj, i) => `<a href='${obj.url}' class="project-link"> <li class="card">
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
   return arr.slice(0,3)
  } else {
    return arr
  }
  })
.then(cardsArr => cardsArr.join(' '))
.then(string => $("ul.deck").append(string))




/*
let url = 'https://docs.google.com/spreadsheets/d/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/edit?usp=sharing'
let id = '193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4'
let source = `https://spreadsheets.google.com/feeds/list/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/od6/public/values?alt=json`
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
  .then( response => response.json() ) 
  .then( data =>  {
      let projects = data.feed.entry.map( project => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      
      app(projects)
  })

function app(projects) {
  console.log(projects)
  projects.map((project,i) => {
    const $ul = $("<ul>").addClass("deck");
      $("deck").append($item);
    let $item = $("<li>").addClass("card").url(`${project.url}`);
      $("card").append($image);
    let $image = $("<div>").addClass("card-image").css("background-image", `${project.image}`);
      $("card-image").append($button);
    let $button = $("<button>").addClass("card-btn btn-block").text(`Project ${i}`);
      $("card-btn btn-block").append($content);
    let $content = $("<div>").addClass("card-content");
      $("card-content").append($title);
    let $title = $("<div>").addClass("card-title").text(`${project.title}`);
      $("card-title").append($text);
    let $text = $("<p>").addClass("card-text").text(`${project.description}`);
      $("card-text").append("card-content");
  })
}
*/

/*
function app(projects) {
  console.log(projects)
  projects.map((project,i) => {
    let $item = $("<li>").addClass("card").url(`${project.url}`);
    let $image = $("<div>").addClass("card-image").css("background-image", `${project.image}`);
    let $button = $("<button>").addClass("card-btn btn-block").text(`Project ${i}`);
    let $content = $("<div>").addClass("card-content");
    let $title = $("<div>").addClass("card-title").text(`${project.title}`);
    let $text = $("<p>").addClass("card-text").text(`${project.description}`);
  })
}
*/