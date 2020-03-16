$(".resToggle").click(function() {
    $(".myTopNav").toggleClass("active");
  });

let url = 'https://docs.google.com/spreadsheets/d/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/edit?usp=sharing'
let id = '193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4'
let source = `https://spreadsheets.google.com/feeds/list/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/od6/public/values?alt=json`
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

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

    
 function app(projects) {
    console.log(projects)
    for(let i = 0; i < 3; i +=1) {
        const $ul = $("<ul>").addClass("deck");
        let $item = $("<li>").addClass("card");
        let $image = $("<div>").addClass("card-image").css("background-image", `${projects[i].image}`);
        let $button = $("<button>").addClass("card-btn btn-block").text(`Project ${i}`);
        let $content = $("<div>").addClass("card-content");
        let $title = $("<div>").addClass("card-title").text(`${projects[i].title}`);
        let $text = $("<p>").addClass("card-text").text(`${projects[i].description}`);
            $("card-body").append($ul)
            $("ul").append($item) 
            $($item).append($image, $button, $content)
            $($content).append($title, $text)       
     }
 }