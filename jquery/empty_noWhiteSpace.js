/*
	Similar to jQuery's :empty but ignores whitespaces
*/
$(function() {
	$.extend($.expr[':'],{
	empty_noWhiteSpace: function(a,i,m){
		return $.trim(a.innerHTML) === '';
	}
});

$('ul li:empty_noWhiteSpace').addClass('is_empty');