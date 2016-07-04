'use strict';


$(document).ready(init)

function init() {
    cssClassActivate()
    console.log();
    if ($('.dev-mode').length == 1) {
        initalDevPanel()
    }
}

function cssClassActivate() {
    // active the function of writing css as className
    let selector = document.querySelectorAll('div, span, h1, h2, h3, h4, h5, h6, p, body')
    for (var i = 0; i < selector.length; i++) {
        $(selector[i]).attr('style', selector[i].className.split(' ').join('; ').replace('_', ' '))
    }
}

function developing(index, el) {
    if ($(el).css('position') !== 'absolute') {
        var className = el.className
        $(el).css('position', 'relative')
        var $label = $('<label>')
        $label.addClass('dev-label').html(className.split(' ').join(' | '))
        $(el).append($label)
    }
}

function initalDevPanel() {
    $('.dev-mode div').each(developing)

    // colors setting
    $('body').on('change', '.devPanel .color .color-input', devPanelCLRchanged)
    $('body').on('change mousemove', '.devPanel .color .opacity-slide', devPanelOCchanged)
    $('body').on('change', '.devPanel .color .opacity-input', devPanelOCIchanged)
    $('body').on('change mousemove', '.devPanel .devPanel-font-size', devPanelFZchanged)
    $('body').on('change mousemove', '.devPanel .devPanel-border-width', devPanelBWchanged)

    $('body').on('click', '.devPanelHandler .toggle', function() {
        $('.devPanel').toggleClass('active');
    })
    var $devPanel = $('<devPanel>').append(`<div>
            <div class="dev-panel-container">
                <div class="title">Color</div>
                <div class="setting-container color">
                    <div class="setting-row">
                        <div class="setting-item">
                            <input type="color" class="color-input" value="#ff0000">
                        </div>
                        <div class="setting-item">
                            <input type="range"  min="0" max="100" value="100" class="opacity-slide">
                        </div>
                        <div class="setting-item">
                            <input type="number" class="opacity-input"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dev-panel-container">
                <div class="title">font size: <span class="current-font-size"></span></div>
                <input type="range" min="0" max="200" value="85" class="devPanel-font-size">

            </div>
            <div class="dev-panel-container">
                <div class="title">border width: <span class="current-border-width"></span></div>
                <input type="range" min="0" max="5" value="1" class="devPanel-border-width">
            </div>
        </div>
        `)
    var $devToolStart = $('<devToolStart>').addClass('devPanelHandler').append(`<div class="toggle">||</div>`)
    $devPanel.addClass('devPanel')
    $('body').append($devToolStart)
    $('body').append($devPanel)
    $('.current-font-size').html('8.5px')
    $('.current-border-width').html($('body.dev-mode div').css('outline-width'))
    $('.devPanel .color .opacity-input').val($('.devPanel .color .opacity-slide').val())
}

function devPanelOCchanged() {
    $('.opacity-input').val($(this).val())
    $('body.dev-mode .dev-label').css('opacity', $(this).val()/100);
}

function devPanelOCIchanged() {
    $('.opacity-slide').val($(this).val())
    $('body.dev-mode .dev-label').css('opacity', $(this).val()/100);
    $('body.dev-mode .dev-label').css('opacity', $(this).val()/100);
}
function devPanelFZchanged() {
    $('.current-font-size').html($(this).val() / 10 + 'px')
    $('body.dev-mode .dev-label').css('font-size', $(this).val() / 10 + 'px');
}

function devPanelBWchanged() {
    $('.current-border-width').html($(this).val() + 'px')
    $('body.dev-mode div').css('outline-width', $(this).val() + 'px');
}

function devPanelCLRchanged() {
    $('body.dev-mode div').css('outline-color', $(this).val());
    $('body.dev-mode .dev-label').css('background-color', $(this).val());
}
