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

/*
Sample output
[["Size","USA","UK","Italy","France","Jeans"],["XS","0","4","36","32","23"],["S","0","6","38","34","24-25"],["S","2-4","8","40","36","26-27"],["M","4-6","10","42","38","27-28"],["M","8","12","44","40","29-30"],["L","10","14","46","42","31-32"],["L","12","16","48","44","32-33"],["XL","14","18","50","46",""],["XL","16","20","52","48",""]]
*/