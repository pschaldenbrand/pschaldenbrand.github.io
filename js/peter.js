var clicked = null;
var clickingDisabled = false;

function openDropdown(dropdownId) {
	//disable clicks 
	if (clickingDisabled) {
		return;
	}

	clickingDisabled = true;
	if (clicked === dropdownId) {
		$('.dropdown').animate({"height":'0px', "opacity":"0"}, 800, "linear", function(){
			$('.dropdown').hide();
			clickingDisabled = false;
		});
		clicked = null;
		//$(".dropdown").css("background-color","rgba(0,0,0,0)");
		return;
	} else {
		$('.dropdown').fadeOut(40);
	
		$(dropdownId).css('height','0%');
		//$(dropdownId).css('background-color','rgba(35,35,35,.85)');
		$(dropdownId).css('opacity','0');
		$(dropdownId).show();
		$(dropdownId).animate({"height":"60%", "opacity":"1"}, 1000, "swing", function() {
			clickingDisabled = false;
		});
	}
	clicked = dropdownId;
}

$(document).ready(function(){
	//$('body').animate({'background':'linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,.3))'},500);
	//$('html').css('background','linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,.3))')

	$("#cornerPlus").hover(
		function(){
			$("#cornerPlus").fadeOut(800);
			$('.acknowledgement').fadeIn(1000);
			$('.acknowledgement').hover(function(){

			},function(){
				$('.acknowledgement').fadeOut(1000);
				$("#cornerPlus").fadeIn(500);
			});
		},
		function(){
			//$('.acknowledgement').fadeOut(1000);
		});
});