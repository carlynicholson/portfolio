# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

My final project will have a navigation bar at the top with my name to the far left and menu items to the right. The nav will have links to an about page and a portfolio page, as well as an anchor tag/link to the contact form at the bottom of the home page. There will be a cards section displaying my most recent projects.

Contact form idea(s)/example(s):
- https://res.cloudinary.com/df6sigxz7/image/upload/v1583765045/u01-p01/ideas%20%2B%20examples/Contact.png
- https://res.cloudinary.com/df6sigxz7/image/upload/v1583765044/u01-p01/ideas%20%2B%20examples/Contact_BBK.png

Card idea(s)/example(s):
- https://res.cloudinary.com/df6sigxz7/image/upload/v1583765573/u01-p01/ideas%20%2B%20examples/cards_BBK.png

About page idea(s)/example(s):
- https://res.cloudinary.com/df6sigxz7/image/upload/v1583765881/u01-p01/ideas%20%2B%20examples/about_bbk.png

Site refs:
https://www.wix.com/website-template/view/html/1995?siteId=a51d32ee-c2eb-494c-86b9-0d1c722f9f85&metaSiteId=16dcad0e-953b-4c09-ae4a-2abc30d21d17&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates

https://www.wix.com/website-template/view/html/2282?siteId=7a0cab33-ea91-4ef7-90f1-37efe8e1dc9b&metaSiteId=a23e8e18-4a99-4d8b-adff-b45ac27a9d92&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates

## Google Sheet

https://docs.google.com/spreadsheets/d/193Hou07FkHfuSH9IccJxFxPHvxJdQwwb33kaxianMd4/edit?usp=sharing

## Wireframes

Home: https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/home.png

Portfolio: https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/portfolio.png

About: https://res.cloudinary.com/df6sigxz7/image/upload/v1583869802/portfolio/project%20worksheet/about.png

## Time/Priority Matrix 

https://res.cloudinary.com/df6sigxz7/image/upload/v1583869560/portfolio/project%20worksheet/priority_matrix.png

TOTAL TIME: 35hr

### MVP/PostMVP - 5min 

#### MVP

- Pull projects using Google JSON API
- Mobile-responsive

#### PostMVP 

- Mask email address in links to avoid phishing//bots
- Skills section on About page
- Contact form

## Functional Components

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Responsiveness | H | 2hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 3hrs | 3hrs |
| Total | H | 6hrs| 6hrs | 6hrs |

## Additional Libraries
 [Bootstrap](https://getbootstrap.com/) for functionality 

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

This code snippet was used to pull in my projects from a Google Sheet.
