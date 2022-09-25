# Evergreen Overstory 

Creating a visual presentation of the oldest living trees and the historical events that occurred during their lifespan. Users are able to select the historical data for each tree and learn more via the external links supplied. 

[Live Link](https://k3tang.github.io/Javascript-Project---Trees/)


## Technologies 
* Javascript
* CSS and HTML
* D3

## Data
Data was obtained from [OLDLIST](https://www.ldeo.columbia.edu/~adk/oldlisteast/) a database of ancient trees and their ages and [Wikipedia](https://www.wikipedia.org/) for details on historical events. 

## Features 
<img width="1429" alt="Screen Shot 2022-08-21 at 4 57 14 PM" src="https://user-images.githubusercontent.com/107089418/185816705-5534d548-5d47-4b0b-bfff-8316d562ce1f.png">

<img width="1433" alt="Screen Shot 2022-08-21 at 4 23 45 PM" src="https://user-images.githubusercontent.com/107089418/185815263-b32e30ea-20dd-462b-8694-3d339f44354c.png">

### Tree Profiles 
An interactive profile page of the oldest trees is rendered using Vanilla DOM functionalities. 

```javascript 
 function callback_profile(event) { 
           var profileInfo = species[(event.target.parentNode.id) - 1]
           var textBox = document.querySelector("#profile-text");
            console.log(textBox)
           textBox.innerHTML = `<p id="tree-name">${profileInfo.location}:<br>${profileInfo.species}</p><br><p id="tree-age">Age: ${profileInfo.age}</p><br>${profileInfo.profile} <a href="${profileInfo.website}">Learn More...<a>`
       };

       var profile = document.querySelectorAll("div.grid-piece img");
       
       for(let i = 0; i < profile.length; i++) { 
           profile[i].addEventListener("click", callback_profile)
       };
```


### Tree Ring Timeline 
D3.js was used to create the tree ring shaped timeline reflecting the list of historical events in chronological order. A tooltip was incorporated to display historical details.

```javascript 
  for (let i = radius.length; i > 0; i--) {
           var halfCircle = function (i) {
               return svg.append("path")
                   .attr("transform", "translate(250, 250)")
                   .attr("d", d3.arc()
                       .innerRadius(0)
                       .outerRadius(radius[i] * 2)
                       .startAngle(-Math.PI / 2)
                       .endAngle(Math.PI / 2)
                   )
                   .attr("stroke", "#f4eee9")
                   .attr("stroke-width", "5px")
                   .attr("fill", "transparent")
                   .attr("class", "halfCircle")
                   .attr("id", i + 1) 

                   .on("mouseover", function () { return tip.style("visibility", "visible")
                       .html(`<div id="tip-text"><p style="font-size: 4.5vh; padding-bottom: 1vh">${events[i].year}</p><p style="font-size:           1.8vh;">${events[i].event}</p><br><p id="tip-link"><a href=${events[i].website}>Learn More</a></p></div>`)
                     }) 
           }
           halfCircle(i);
        }}   
```

### World Map 
An svg element was created using Inkscape to allow for specific coordinates on the world map to be interactive. Information for each tree was subsequently attached to the coordinates. Event listeners were used to create interactive functionalities for the coordinates. 


```javascript 
var map = document.querySelectorAll(".map-path")
       
       for (let i = 0; i < map.length; i++) {
           map[i].addEventListener("click", callback_rings)
          
           map[i].addEventListener("mouseover", function () {
               return tip2.style("visibility", "visible")
                   .html(`<p><img class="tree-tip" src="${species[i]["image"]}" alt="tree picture" height="150vh" padding-bottom="20px"><br>${species[i]["location"]}</p>`)
                   .style("top", (event.pageY - 200) + "px")
                   .style("left", (event.pageX - 50) + "px");      
           })
           map[i].addEventListener("mouseover", function () {
               return tip.style("visibility", "hidden");
           })
           map[i].addEventListener("mouseout", function () {
               return tip2.style("visibility", "hidden");
           })
       }
```

## Future Implementations 
* Show a home page rendering famous related quotes changing on a timer function. 





