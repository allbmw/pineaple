   // menu script
   $(function () {
    var pull = $('#menu-img');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});