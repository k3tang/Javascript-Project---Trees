import { fetchCountries } from "./utils/index.js";
import * as d3 from "d3";
import { svg } from "d3";

const data = require("/src/data/tree_history.json");
const species = require("/src/data/tree_species.json");


document.addEventListener("DOMContentLoaded", function(){


   (async ($d3) => {
    const mainContainer = $d3
        .select("body")
        .append("div")
        .attr("id", "mainContainer")
        .attr("class", "container")
        .style("height", "50%")
        .style("display", "flex")



    //rings 
       var radius = [0, 10, 20, 40, 60, 70, 90, 110];



       var svg = d3.select("div#mainContainer")
           .append("svg")
           .attr("preserveAspectRatio", "xMinYMin meet")
           .attr("viewBox", "0 0 500 500")
           .attr("class", "svg-content");
   

    //event handler 
    function callback(event) { 
        var events = data[event.target.id]
         //gives area element of map, event.target = USA tree, id = USA tree id 
       
       for (let i = radius.length; i > 0; i--) {
        // console.log(data[i][i]["year"])
           var halfCircle = function (i) {
               return svg.append("path")
                   .attr("transform", "translate(250, 230)")
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
                       .html(`<p style="font-family: courier; font-size: 40px">${events[i].year}</p><span>${events[i].event}</span><br><a style="text-decoration: none;" href=${events[i].website}>Learn More</a>`);
                     }) 
                   .on("mousemove", function () { return tip });
                //    .on("mouseout", function () { return tip.style("visibility", "hidden"); });;

           }
           halfCircle(i);
           
        }}   
        //array of trees in the world map
       var map = this.querySelectorAll("area")
        console.log(map)


       for (let i = 0; i < map.length; i++) {
           map[i].addEventListener("click", callback)
           map[i].addEventListener("mouseover", function () {
               return tip2.style("visibility", "visible")
                   .html(`<p style="font-family: courier; font-size:14px;">Tree: ${species[i]["species"]} <br> Location: ${species[i]["location"]} <br> Age: ${species[i]["age"]} years old </p>`)
                   .style("top", (event.pageY - 100) + "px")
                   .style("left", (event.pageX - 100) + "px");
           })
           map[i].addEventListener("mouseout", function () {
               return tip2.style("visibility", "hidden");
           })
       }
       
        //tip for tree-rings
        var tip = d3.select("div#mainContainer")
           .append("div")
           .style("width", "500px")
           .style("height", "200px")
           .style("margin-right", "auto")
           .style("visibility", "hidden")
           .style("background-color", "white")
           .style("border", "solid")
           .style("border-width", "1px")
           .style("border-radius", "5px")
           .style("padding", "10px");

        var tip2 = d3.select("p#map-container")
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px");

    

     

   })(d3);
   

})