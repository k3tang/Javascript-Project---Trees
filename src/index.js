import { fetchCountries } from "./utils/index.js";
import * as d3 from "d3";
import { svg } from "d3";

const data = require("/src/data/tree_history.json");
const species = require("/src/data/tree-species-web.json");


document.addEventListener("DOMContentLoaded", function(){


   (async ($d3) => {
    const mainContainer = $d3
        .select("#all-contents")
        .append("div")
        .attr("id", "mainContainer")
        .attr("class", "container");

    //rings 
       var svg = d3.select("div#mainContainer")
           .append("svg")
           .attr("preserveAspectRatio", "xMinYMin meet")
           .attr("viewBox", "0 0 500 500")
           .attr("class", "svg-content");
           
       var radius = [0, 10, 20, 40, 60, 70, 90, 110];

    //event handler for the rings
    function callback_rings(event) { 
        var events = data[event.target.id]
         //gives area element of map, event.target = USA tree, id = USA tree id 
        console.log(events)
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
                   .attr("stroke", "#E7C8A0")
                   .attr("stroke-width", "3px")
                   .attr("fill", "transparent")
                   .attr("class", "halfCircle")
                   .attr("id", i + 1) 
                   .on("mouseover", function () { return tip.style("visibility", "visible")
                       .html(`<div id="tip-text"><p style="font-size: 5vh; padding-bottom: 1vh;">${events[i].year}</p><p style="font-size: 2vh;">${events[i].event}</p><br><p id="tip-link"><a href=${events[i].website}>Learn More</a></p></div>`)
                     }) 

           }
           halfCircle(i);
           
        }}   
        //array of trees in the world map
       var map = document.querySelectorAll(".map-path")
        console.log(map)
       for (let i = 0; i < map.length; i++) {
           map[i].addEventListener("click", callback_rings)
           map[i].addEventListener("mouseover", function () {
               return tip2.style("visibility", "visible")
                   .html(`<p> Tree: ${species[i]["species"]} <br> Location: ${species[i]["location"]} <br> Age: ${species[i]["age"]} years old </p>`)
                   .style("top", (event.pageY - 350) + "px")
                   .style("left", (event.pageX - 300) + "px");      
           })
           map[i].addEventListener("mouseover", function () {
               return tip.style("visibility", "hidden");
           })
           map[i].addEventListener("mouseout", function () {
               return tip2.style("visibility", "hidden");
           })
       }

       //oldest trees profile functions 

       function callback_profile(event) { 
            var profileInfo = species[(event.target.parentNode.id) - 1]
            //fix this 
           var textBox = document.querySelector("#profile-text");
            console.log(textBox)
           textBox.innerHTML = `<p id="tree-name">Tree Species: ${profileInfo.species}</p><br><p id="tree-age">Age: ${profileInfo.age}</p><br>${profileInfo.profile}`
       };

       var profile = document.querySelectorAll("div.grid-piece img");
       
       for(let i = 0; i < profile.length; i++) { 
           profile[i].addEventListener("click", callback_profile)
       };

   
        //tip for tree-rings
        var tip = d3.select("div#mainContainer")
           .append("div")
           .attr("id", "tip1")
           .style("visibility", "hidden")
           .style("background-color", "white")
           .style("border", "solid")
           .style("border-width", "1px")
           .style("border-radius", "5px")
           .style("padding", "80px");

        //tip for world map
        var tip2 = d3.select("div#mainContainer")
            .append("div")
            .attr("id", "tip2")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px");

   })(d3);

})