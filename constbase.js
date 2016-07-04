'use strict';


$(document).ready(init)

function init() {
    cssClassActivate()
    initalDevPanel()
    $('.dev-mode div').each(developing)
}

function cssClassActivate() {
    // active the function of writing css as className
    let selector = document.querySelectorAll('div, span, h1, h2, h3, h4, h5, h6, p, body')
    for (var i = 0; i < selector.length; i++) {
        $(selector[i]).attr('style', selector[i].className.split(' ').join('; ').replace('_', ' '))
    }
}

function developing(index, el){
    if($(el).css('position') !== 'absolute'){
        var className = el.className
        $(el).css('position', 'relative')
        var $label = $('<label>')
        $label.addClass('dev-label').html(className.split(' ').join(' | '))
        $(el).append($label)
    }
}
function initalDevPanel(){
    var $devPanel = $('<devPanel>')
    console.log($devPanel);
    var panel = `<span>
        <input type="color" name="favcolor">

    </span>`
    $devPanel.addClass('devPanel').append(panel)
    $('body').append($devPanel)
}
