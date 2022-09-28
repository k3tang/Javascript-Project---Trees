import * as d3 from "d3";
import { active, svg } from "d3";

const data = require("/src/data/tree_history.json");



document.addEventListener("DOMContentLoaded", function(){
console.log("hello")
    //container to hold svg elements
    // const mainContainer = $d3
    //     .select("#all-contents")
    //     .append("div")
    //     .attr("id", "mainContainer")
    //     .attr("class", "container");

    // //rings 
    //    var svg = d3.select("div#mainContainer")
    //        .append("svg")
    //        .attr("preserveAspectRatio", "xMinYMin meet")
    //        .attr("viewBox", "0 0 500 500")
    //        .attr("class", "svg-content");

           
    //    var radius = [0, 10, 20, 40, 60, 70, 90, 110];

    //event handler for the rings
    function callback_timelineEvent(i) { 
        console.log(i)
        // let events = data[event.target.id]

        // document.getElementById(`event-${event + 1}`).innerHTML = `<div>${events.age}</div>`;

    }
       
    console.log(Object.values(data).length, "data.length")
    for (let i = 0; i < data.length; i++) {
        console.log(i, "in function")
    return callback_timelineEvent(i);
    }
        


})