function resizeContent() {                                
    var content_height = $('[data-role=content]:visible').height();
    var header_height = $('[data-role=header]:visible').height();  
    var footer_height = $('[data-role=footer]:visible').height();  
    if (content_height+header_height+footer_height-$(window).height() < 23) {
        $('.ui-body').css('height', $(window).height());
        $('.ui-page').css('height', $(window).height());
        $('.ui-content').css('height', ($(window).height()-header_height-footer_height-35)+'px');    
    }
}

$(document).ready(function() {
    resizeContent();
    $(window).resize(function() {
        resizeContent();
    });
});