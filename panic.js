$(document).ready(function(){

	$("a").click(function(){
		$("h1").fadeOut(500)
		$("#load").fadeIn(5000)
		$("a").hide()
		$("#progressDiv").fadeIn(4000)
		$("#pBar").fadeIn(4000)
		$("#pBar").animate({
			width: "+=100%"
		}, 4500, function() {
			if ($("#pBar").innerWidth("100%")) {

			$("#pBar").fadeOut(1000)
			$("#progressDiv").fadeOut(1000)
			$("#load").fadeOut(1000)

			$("#message").fadeIn(10000)
			}
		})
	})
})

