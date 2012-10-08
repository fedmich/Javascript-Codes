/*
 * Returns only unique values from an array
 */
function arr_unique(arr) {
	var hash = {}, result = [];
	for ( var i = 0, l = arr.length; i < l; ++i ) {
		if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
			hash[ arr[i] ] = true;
			result.push(arr[i]);
		}
	}
	return result;
}