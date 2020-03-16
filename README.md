# [Portfolio](https://carlynicholson.github.io/portfolio/)

## Overview
This project was created to be my [digital portfolio](https://carlynicholson.github.io/portfolio/).

## Motivation
This project was initially assigned during my Software Engineering Immersive (SEI) course with General Assembly. It was assigned to give students a chance to use the skills learned in class to create a site that highlights the skills and projects we'll be working on in SEI.

## Demo
Quick demo of site can be found [here](https://youtu.be/nj5F6xH-uhI).

## Wireframes
[Home](https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/home.png)

[Portfolio](https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/portfolio.png)

[About](https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/about.png)

## Code Snippet

```
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
```

This code snippet was used to help pull in my projects from a Google Sheet.

## Future Plans
- Move projects into CSS Grid, rather than Flexbox
- Set only 3 most recent projects on home page
- Contact Form
- "Skills" on About page

