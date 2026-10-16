$(document).ready(function() {
    // Keep the existing links and animation, with keyboard and screen-reader support.
    $('a.abstract, a.bibtex').each(function(index) {
        var $toggle = $(this);
        var type = $toggle.hasClass('abstract') ? 'abstract' : 'bibtex';
        var $details = $toggle.parent().parent().find('.' + type + '.hidden');
        if (!$details.length) return;

        var detailsId = $details.attr('id') || 'publication-' + type + '-' + index;
        $details.attr('id', detailsId);

        function syncExpandedState() {
            var isOpen = $details.hasClass('open');
            $toggle.attr('aria-expanded', String(isOpen));
            $details.attr('aria-hidden', String(!isOpen));
        }

        $toggle.attr({
            role: 'button',
            tabindex: '0',
            'aria-controls': detailsId
        });
        syncExpandedState();

        $toggle.on('click', function(event) {
            event.preventDefault();
            $details.toggleClass('open');
            syncExpandedState();
        });
        $toggle.on('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (!(event.originalEvent && event.originalEvent.repeat)) $toggle.trigger('click');
            }
        });
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
