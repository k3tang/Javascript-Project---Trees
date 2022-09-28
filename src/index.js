import * as d3 from "d3";
import { active, svg } from "d3";
import scrollama from "scrollama";

const data = require("/src/data/tree_history.json");



document.addEventListener("DOMContentLoaded", function(){
    //populating timeline events
    function callback_timelineEvent(i) { 
     let timeGap = [10.196, 247.168, 450, 182.904, 87.436, 26.571, 28.733, 16.684, 4.325]
        let events = data[1][i]
        let currentEle =  document.getElementById(`event-${(i + 1)}`);
        currentEle.innerHTML = 
        `<div>${events.year}</div>
        <div class="timeline-event">${events.event}</div>
        <div><a class="timeline-link" href=${events.website} target="_blank" rel="noopener noreferrer">Learn More</a></div>`;
        currentEle.style.paddingTop = `${timeGap[i]}px`

    }
       
    for (let i = 0; i < Object.values(data[1]).length; i++) {
     callback_timelineEvent(i);
    }
        
    //adding scroll event handler 
    let timelineEvents = document.querySelectorAll(".timeline li")
    console.log(window.innerHeight, "height")

    function isElementInViewport(el) {
        // console.log(el.getBoundingClientRect(), "el")
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

        




})