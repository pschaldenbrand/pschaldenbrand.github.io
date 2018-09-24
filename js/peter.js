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
        $('.dropdown').animate({ "height": '0px', "opacity": "0" }, 800, "linear", function() {
            $('.dropdown').hide();
            clickingDisabled = false;
        });
        clicked = null;

        // Make the button look clickable again
        $(dropdownId + 'Button').removeClass('clicked');

        return;
    } else {
    	//Open the info
        $('.dropdown').fadeOut(40);

        $(dropdownId).css('height', '0%');
        $(dropdownId).css('opacity', '0');
        $(dropdownId).show();
        $(dropdownId).animate({ "height": "60%", "opacity": "1" }, 1000, "swing", function() {
            clickingDisabled = false;
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
        });
});

function displayPdf(path) {
    jQuery('body').append('<iframe class="pdfPopout" src="' + path + '"></iframe>');
    jQuery('body').append('<div class="exitPdf"><img src="images/WhiteX.png"></div>');

    jQuery('.exitPdf').click(function() {
        jQuery('.pdfPopout, .exitPdf').remove();
    });
}

function displayImg(path) {
    jQuery('body').append('<img class="pdfPopout" src="' + path + '">');
    jQuery('body').append('<div class="exitPdf"><img src="images/WhiteX.png"></div>');

    jQuery('.exitPdf').click(function() {
        jQuery('.pdfPopout, .exitPdf').remove();
    });
}