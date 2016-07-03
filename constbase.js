'use strict';

// let you write css in className
$(document).ready(init)

function init() {
    cssClassActivate()
    applyingCSS()
}

function applyingCSS() {
}



function cssClassActivate() {
    for (var i = 0; i < document.querySelectorAll("div").length; i++) {
        $(document.querySelectorAll("div")[i]).attr('style', document.querySelectorAll("div")[i].className.split(' ').join('; ').split('_').join(' '))
    }
}
