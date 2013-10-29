function setup_7days(){
	var now = new Date();

	var monday = new Date(now);
	monday.setDate(monday.getDate() - monday.getDay() + 1);
	console.log( monday );

	$('.day_num').each(function( i, item ){
		$(item).html( monday.getDate() );
		monday.setDate( monday.getDate() + 1 );
	});

}

setup_7days();