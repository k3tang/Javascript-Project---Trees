import * as d3 from "d3";
import { active, svg } from "d3";

const data = require("/src/data/tree_history.json");
// const species = require("/src/data/trees-species-img.json");

document.addEventListener("DOMContentLoaded", function(){

   (async ($d3) => {


    //rings 
    let svg = d3.select("div#contents")
           .append("svg")
           .attr("preserveAspectRatio", "xMinYMin meet")
           .attr("viewBox", "0 0 500 500")
           .attr("class", "svg-content");

           
       let radius = [0, 5, 10, 20, 40, 60, 70, 90, 110];

       let halfCircle = function (i) {
           let events = data[1]
           return svg.append("path")
               .attr("transform", "translate(250, 250)")
               .attr("d", d3.arc()
                   .innerRadius(0)
                   .outerRadius(radius[i] * 2)
                   .startAngle(-(2)*Math.PI/2)
                   .endAngle((0)*Math.PI/2)
               )
               .attr("stroke", "#f4eee9")
               .attr("stroke-width", "5px")
               .attr("fill", "transparent")
               .attr("class", "halfCircle")
               .attr("id", i + 1) 

               .on("mouseover", function () { return tip.style("visibility", "visible")
                   .html(`<div class="tip-text"><p class="tip-header">${events[i - 1].year}</p><p class="tip-body">${events[i - 1].event}</p><a class="tip-link" href=${events[i - 1].website} target="_blank" rel="noopener noreferrer">Learn More</a></div>`)
                 }) 

       }
       
       for (let i = radius.length; i > 0; i--) {
            halfCircle(i);
        }  

   
        //tip for tree-rings
        let tip = d3.select("div#contents")
           .append("div")
           .attr("id", "tip1");

 



   })(d3);

})