import { fetchCountries } from "./utils/index.js";

import * as d3 from "d3";
import { svg } from "d3";

// window.Util = Util 
document.addEventListener("DOMContentLoaded", function(){
   (async ($d3) => {
    const mainContainer = $d3
        .select('body')
        .append('div')
        .attr('id', 'mainContainer')
        .attr('class', 'container');

        mainContainer.append('h1').attr('id','top').text('If Trees Could Speak');

    //rings 

       var scale = d3.scaleLinear()
           .range(["yellow", "brown"])
           .domain([0, 60]);

       var radius = [0, 10, 20, 25, 40, 60, 70, 90, 110];

       var width = 1000;
       var height = 1000;

       var svg = d3.select("body")
           .append("svg")
           .attr("width", width)
           .attr("height", height);
        
    

       var halfCircle = function (r) {
            return svg.append("path")
               .attr("transform", "translate(400,300)")
               .attr("d", d3.arc()
                   .innerRadius(r)
                   .outerRadius(r + 7)
                   .startAngle(-Math.PI / 2)     
                   .endAngle(Math.PI / 2)       
               )
               .attr('stroke', 'brown')
               .attr('fill', 'brown')
               .attr("class", "halfCircle"); 
       }

       for (let r of radius) {
        halfCircle(r * 2)
       }
     

   })(d3);

   fetchCountries();
   

})