var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function ($) {
	$.fn.hScroll = function (amount) {
		amount = amount || 120;
		$(this).bind("DOMMouseScroll mousewheel", function (event) {
			var oEvent = event.originalEvent,
				direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
				position = $(this).scrollLeft();
			position += direction > 0 ? -amount : amount;
			$(this).scrollLeft(position);
			event.preventDefault();
		})
	};
});

$(document).ready(function () {
	$('#show').hScroll(75); // You can pass (optionally) scrolling amount
});


}
/*
     FILE ARCHIVED ON 23:58:27 Jan 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:23:24 Apr 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 114.083
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.065
  cdx.remote: 0.051
  esindex: 0.007
  LoadShardBlock: 87.804 (3)
  PetaboxLoader3.datanode: 108.06 (4)
  load_resource: 693.58
  PetaboxLoader3.resolve: 649.939
*/