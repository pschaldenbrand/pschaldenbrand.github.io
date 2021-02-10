var clicked = null;
var clickingDisabled = false;

function openDropdown(dropdownId) {
    //disable clicks
    if (clickingDisabled) {
        return;
    }

    clickingDisabled = true;
    if (clicked === dropdownId) {
    	// Close the info
        $('.peter-section').animate({ "height": '0px', "opacity": "0" }, 800, "linear", function() {
            $('.peter-section').hide();
            clickingDisabled = false;
        });
        clicked = null;

        // Make the button look clickable again
        $(dropdownId + 'Button').removeClass('clicked');

        return;
    } else {
    	//Open the info
        $('.peter-section').fadeOut(40);

        $(dropdownId).css('height', '0%');
        $(dropdownId).css('opacity', '0');
        $(dropdownId).show();
        $(dropdownId).animate({ "height": "60%", "opacity": "1" }, 1000, "swing", function() {
            clickingDisabled = false;
            $(dropdownId).css('height', 'auto');

            // Change the URL
            window.location.hash = String(dropdownId).slice(1) + '.html';

            // Google Analytics
            ga('set', 'page', '/' + dropdownId.slice(1) + '.html');
            //ga('send', 'pageview');
            ga('create', 'UA-112528477-1');
            ga('send', {
                hitType: 'pageview',
                page: dropdownId.slice(1),
                title: dropdownId.slice(1),
                location: location.href
            });
            ga('send', 'event', {
                eventCategory: 'Tab',
                eventAction: 'click',
                eventLabel: dropdownId.slice(1)
            });
        });

        // Make the button look not clickable but only the correct one
        $('.linkButton').removeClass('clicked');
        $(dropdownId + 'Button').addClass('clicked');

    }
    clicked = dropdownId;
}

$(document).ready(function() {
    //$('body').animate({'background':'linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,.3))'},500);
    //$('html').css('background','linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,.3))')

    $("#cornerPlus").hover(
        function() {
            $("#cornerPlus").fadeOut(800);
            $('.acknowledgement').fadeIn(1000);
            $('.acknowledgement').hover(function() {

            }, function() {
                $('.acknowledgement').fadeOut(1000);
                $("#cornerPlus").fadeIn(500);
            });
        },
        function() {
            //$('.acknowledgement').fadeOut(1000);
        }
    );

    // When clicking a link do a google analytics event.
    jQuery('a').click(function() {
        let href = jQuery(this).attr('href');
        href = href == undefined ? "" : href;
        if (href.length > 0) {
            ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: href
            });
        }
    });
});

function displayPdf(path) {
    jQuery('body').append('<iframe class="pdfPopout" src="' + path + '"></iframe>');
    jQuery('body').append('<div class="exitPdf"><img src="images/WhiteX.png"></div>');

    jQuery('.pdfPopout, .exitPdf').animate({'opacity':'1'}, 500);

    jQuery('.exitPdf').click(function() {
        jQuery('.pdfPopout, .exitPdf').remove();
    });
    ga('send', 'event', {
        eventCategory: 'Display PDF',
        eventAction: 'click',
        eventLabel: path
    });
}

function displayImg(path) {
    jQuery('body').append('<img class="pdfPopout" src="' + path + '">');
    jQuery('body').append('<div class="exitPdf"><img src="images/WhiteX.png"></div>');

    jQuery('.pdfPopout, .exitPdf').animate({'opacity':'1'}, 500);

    jQuery('.exitPdf').click(function() {
        jQuery('.pdfPopout, .exitPdf').remove();
    });
    ga('send', 'event', {
        eventCategory: 'Display Image',
        eventAction: 'click',
        eventLabel: path
    });
}