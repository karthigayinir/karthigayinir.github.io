(function ($) {
    'use strict';

    $(function () {
        var $body = $('body');

        $body.on('click', '.setting-box .open-close-ear', function () {
            $(this).parent().toggleClass('open');
        });

        $body.on('click', '.setting-box .theme-choose-list-container ul li', function () {
            var theme = $(this).data('theme');

            $('.setting-box .theme-choose-list-container ul li').removeClass('active');
            $(this).addClass('active');

            $body.removeClass(function (index, className) {
                return (className.match(/(^|\s)theme-\S+/g) || []).join(' ');
            });

            if (theme !== undefined && theme !== 'default') {
                $body.addClass('theme-' + theme);
            }
        });

        $body.on('click', '.setting-box .color-choose-list-container ul li', function () {
            var color = $(this).data('color');

            $('.setting-box .color-choose-list-container ul li').removeClass('active');
            $(this).addClass('active');

            $body.removeClass(function (index, className) {
                return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            if (color !== undefined && color !== 'default') {
                $body.addClass('color-' + color);
            }
        });

        $body.on('click', '.setting-box .options-list-container input[type="checkbox"]', function () {
            var $this = $(this);
            var type = $this.data('type');

            if (type === 'left_menu_expand') {
                if ($this.prop('checked')) {
                    $.sp.leftSidebar.expand();
                } else {
                    $.sp.leftSidebar.collapse();
                }
            }
        });

       
        initSettingToolbox();
    });
}(jQuery));