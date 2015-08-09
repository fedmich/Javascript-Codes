/*
 * Converts a table into a string of array
 */
function table_to_js_array ( ){
	// Change the selector below to look up and find your table
	var table = jQuery('.prod-sizing-tab table');
	
	var arr = [];
	
	//iterate to each rows
	table.find('tr').each(function( i, tr ){
		var item = [];
		
		//iterate to each TD in a row
		jQuery( tr ).find('td').each(function( j , td ){
			
			var h = jQuery( td ).html();
			
			switch( h ){
			case '&nbsp;':
				//sometimes a TD can have NBSP, so consider it as blank
				h = '';
				break;
			}
			item.push( h );
			
		});
		
		arr.push( item );
	});
	
	//Now return the array as string
	return JSON.stringify( arr );
}