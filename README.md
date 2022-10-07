# Evergreen Overstory 

Evergreen Overstory is a visual storytelling device that illustrates the relationship humans have with trees. The application will lead the users through 3 different viewpages, starting with one that illustrates the length of human history the oldest tree alive has endured. Next, the user will be presented with interactive elements that contains data on how trees care for humans. Lastly, the application will cover how humans are currently trying to remedy our relationship with trees. 

[Live Link](https://k3tang.github.io/Javascript-Project---Trees/)


## Technologies 
* Javascript
* CSS and HTML


## Data
Data was obtained [Wikipedia](https://www.wikipedia.org/) for details on historical events and [Pubmed](https://pubmed.ncbi.nlm.nih.gov/) for the latest scientific research on trees and humans.

## Features 
![Screen Shot 2022-10-06 at 5 42 07 PM](https://user-images.githubusercontent.com/107089418/194442975-e2c16d1d-98ba-4046-8573-dbc568803ae1.png)

![Screen Shot 2022-10-06 at 5 42 38 PM](https://user-images.githubusercontent.com/107089418/194442970-92ac3f05-8874-4008-8d02-38798b8cb3d3.png)



### Nav Bar
This nav bar is constructed using Vanilla Javascript, HTML, and CSS. An active class is used to manage the tabs, allowing only the selected tab to be displayed.

```javascript 
<<<<<<< HEAD
 function callback_profile(event) { 
           var profileInfo = species[(event.target.parentNode.id) - 1]
           var textBox = document.querySelector("#profile-text");
           textBox.innerHTML = `<p id="tree-name">${profileInfo.location}:<br>${profileInfo.species}</p><br><p id="tree-age">Age: ${profileInfo.age}</p><br>${profileInfo.profile} <a href="${profileInfo.website}">Learn More...<a>`
       };

       var profile = document.querySelectorAll("div.grid-piece img");
       
       for(let i = 0; i < profile.length; i++) { 
           profile[i].addEventListener("click", callback_profile)
       };
=======
 function openTab(event, tabName) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.className += " active";
             window.scrollTo(0,0);
        }
>>>>>>> refs/remotes/origin/main
```


### Scroll-Triggered Timeline
An onscroll event listener is used to determine which part of the timeline will be in view and displayed. The timeline is designed to be relatively proportional to the amount of time passed to further illustrate the age of the tree, Methuselah. 

```javascript 
  function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
         return (
            rect.top >= 0 &&
            rect.left>= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }


    function callbackFunc() {
        for (let i = 0; i < timelineEvents.length; i++) {
        if (isElementInViewport(timelineEvents[i])) {
            timelineEvents[i].classList.add("in-view");
        }
        }
    }

    window.addEventListener("scroll", callbackFunc);
  
```


## Future Implementations 
* An interactive Javascript animation where a seed will be generated on click and fall to the bottom of the viewport where a tree will grow in it's place. 





