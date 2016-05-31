(function () {
    'use strict';

    //i18next options. current lng = ru.
    var options = {
        fallbackLng: false,
        useCookie: true,
        lng: 'ru',
        preload: ['ru', 'en']
    };

    $.i18n.init(options, function() {
        $('body').i18n();
        $('#' + $.i18n.lng() + '_lang').addClass('s-nav-top__link--active');
        $('.s-services__video').css('background-image', 'url(./images/primer.svg)');
        document.title = document.getElementById('title').textContent;

        if($.cookie('lang') == 'en'){
            changeLang('en');
            $('.s-services__video').css('background-image', 'url(./images/primer2.svg)');
        }
    });

    window.changeLang = function(lang) {
        $('#' + $.i18n.lng() + '_lang').removeClass('s-nav-top__link--active');
        $.i18n.setLng(lang);
        $('body').i18n();
        $('#' + $.i18n.lng() + '_lang').addClass('s-nav-top__link--active');
        $.cookie('lang', lang, { expires: 7 });

        if ($('.s-services__video').css('background-image') == 'url(./images/primer.svg)')
            $('.s-services__video').css('background-image', 'url(./images/primer2.svg)');
        else $('.s-services__video').css('background-image', 'url(./images/primer.svg)');

        other_function();
    };

    function other_function() {
        document.title = document.getElementById('title').textContent;
    }

    $('#en_lang').click(function(){
        $('.s-services__video').css('background-image', 'url(./images/primer2.svg)');
    });
    $('#ru_lang').click(function(){
        $('.s-services__video').css('background-image', 'url(./images/primer.svg)');
    });
})();
