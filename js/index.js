'use strict';

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    $(".logo").click(function(e) {
        console.log("Clicked")
        e.preventDefault();
        $("body").toggleClass("active-background");

    })
}