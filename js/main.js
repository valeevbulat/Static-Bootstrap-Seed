var body = document.getElementById('body');
var container = document.getElementById('elements');


function clickVideo() {
    var videoContainer = document.getElementById("s-video-window");
    var bodyR = $("#body");

    if(!bodyR.hasClass("no-scroll")){
        bodyR.addClass("no-scroll");
        videoContainer.style.display = "block";

        var iframe = document.createElement('iframe');
        iframe.src = 'https://player.vimeo.com/video/165846695';
        iframe.id = 'video-frame-1';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.setAttribute('frameborder','0');
        iframe.setAttribute('webkitallowfullscreen','');
        iframe.setAttribute('mozallowfullscreen','');
        iframe.setAttribute('allowfullscreen','');

        videoContainer.appendChild(iframe);
    }else{
        bodyR.removeClass("no-scroll");
        videoContainer.style.display = "none";
        videoContainer.removeChild(document.getElementById('video-frame-1'));
    }
}
function clickVideo2() {
    var videoContainer = document.getElementById("s-video-window2");
    var bodyR = $("#body");

    if(!bodyR.hasClass("no-scroll")){
        bodyR.addClass("no-scroll");
        videoContainer.style.display = "block";
        
        var iframe = document.createElement('iframe');
        iframe.src = 'https://player.vimeo.com/video/165847052';
        iframe.id = 'video-frame-2';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.setAttribute('frameborder','0');
        iframe.setAttribute('webkitallowfullscreen','');
        iframe.setAttribute('mozallowfullscreen','');
        iframe.setAttribute('allowfullscreen','');

        videoContainer.appendChild(iframe);
    }else{
        bodyR.removeClass("no-scroll");
        videoContainer.style.display = "none";
        videoContainer.removeChild(document.getElementById('video-frame-2'));
    }
}
$('.s-services').on('click', '.s-services__nav.s-services__arrow', function(){
    $('.s-services__nav.s-nav-top__link--active').removeClass("s-nav-top__link--active").addClass("s-services__arrow");
    $('.s-services__page.s-services__page--active').removeClass("s-services__page--active");
    $(this).addClass("s-nav-top__link--active").removeClass("s-services__arrow");
    $('#' + $(this).data('target')).addClass("s-services__page--active");
});


