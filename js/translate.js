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
    });

    window.changeLang = function(lang) {
        $('#' + $.i18n.lng() + '_lang').removeClass('s-nav-top__link--active');
        $.i18n.setLng(lang);
        $('body').i18n();
        $('#' + $.i18n.lng() + '_lang').addClass('s-nav-top__link--active');
    };

})();