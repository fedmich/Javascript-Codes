(function($){
	$.fn.serializeAny = function() {
		var ret = [];
		$.each( $(this).find(':input'), function() {
 			ret.push( encodeURIComponent(this.name) + "=" + encodeURIComponent( $(this).val() ) );
		});
		
		return ret.join("&").replace(/%20/g, "+");
	}
})(jQuery);