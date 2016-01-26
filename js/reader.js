$(document).ready(function() {
	$("form").submit(function() {
		var message = $("#Message").val()
		var name = $("#FirstName").val()
		var email = $("#Email").val()
		alert("Email adress:" + email + " name: " + name + " message: " + message);
		$("#emailText").html("text");
	});

	$("#submitIt").click(function() {
		var message = $("#Message").val()
		var name = $("#FirstName").val()
		var email = $("#Email").val()
		$('#emailMessage').html(message)
		$('#emailSender').html(name + "</br>" + email)
		$("#coverdiv").fadeIn(500);
		$("#emailbox").fadeIn(500);

	});
	$("#coverdiv, #emailbox").click(function() {
		$("#coverdiv").fadeOut(500);
		$("#emailbox").fadeOut(500);

	});
});