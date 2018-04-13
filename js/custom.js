
$("div").on("mouseover", function(){
	$(this).toggleClass("spinning");
});

$("div").on("click", function(){
	$("div").removeClass("spinning");
});