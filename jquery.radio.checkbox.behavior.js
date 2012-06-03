//##############################
// jQuery Radio-buttons with Checkbox Behavior
// By Dharmavirsinh Jhala - dharmavir@gmail.com
// Last Updated: 13th Dec 09
// Version: 1.2.5
/*
 USAGE:
	$(document).ready(function(){
		$(":radio").behaveLikeCheckbox();
	}
*/
jQuery.fn.extend({
behaveLikeCheckbox: function(){
	var radioStatus	=	false;
	$.each($(this),function(){
		// Set initial state of radio
		this.radioStatus = $(this).attr("checked") || false;
		$(this).data("status",this.radioStatus);
		// Set mouse-over event callback
		$(this).mouseover(function(){
			this.radioStatus = $(this).attr("checked") || false;
			$(this).data("status",this.radioStatus);
		});
		// Set on-click event callback
		$(this).click(function(){
			this.radioStatus = !$(this).data("status")
			$(this).attr("checked",this.radioStatus);
			$(this).data("status",this.radioStatus);
		});
	});
	return this;
}
});