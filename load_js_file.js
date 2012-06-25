/*
 * Loads an external JavaScript file
 * Compatible with IE
 */
function load_js_file( file, callback ){
	if( typeof file === 'string' ) {
		var js_files = [];
		js_files.push( file );
	}
	else{
		var js_files = file;
	}

	for (var i in js_files){
		var js_file = js_files[i];

		var obj_script = document.createElement('script');
		obj_script.setAttribute("type","text/javascript");
		obj_script.setAttribute("src", js_file);
		if(callback){
			if(obj_script.addEventListener) {
				obj_script.addEventListener("load",callback,false);
			}
			else if(obj_script.readyState) {
				obj_script.onreadystatechange = callback;
			}
		}
		
		if (typeof obj_script!="undefined"){
			document.getElementsByTagName("head")[0].appendChild(obj_script);
		}
	}
}
