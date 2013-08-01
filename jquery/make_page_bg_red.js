//uses jQuery, adds inline stylesheet tag on the page
$("<style>")
    .prop("type", "text/css")
    .html("\
body{ background-color : red;\
}")
    .appendTo("head");