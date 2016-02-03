$(document).ready(function() {
	$("#submitIt").click(function() {
		var name1 = $("#name1").val();
		var name1gen = $("#name1gen").val();
		var name2 = $("#name2").val();
		var name2gen = $("#name2gen").val();
		var name3 = $("#name3").val();
		var name3gen = $("#name3gen").val();
		var object1 = $("#object1").val();
		// var object2 = $("#object2").val();
		var action1 = $("#action1").val();
		var action2 = $("#action2").val();
		var bodypart = $("#bodypart").val();

		$('.name1box').html(name1);
		$('.name2box').html(name2);
		$('.name3box').html(name3);
		$('.object1box').html(object1);
		// $('.object2box').html(object2);
		$('.action1box').html(action1);
		$('.action2box').html(action2);
		$('.bodypart').html(bodypart);

		$(".story").fadeIn(500);
		$(".story").fadeIn(500);
	});
	$("#playVoice").click(function() {
		var story = jQuery('.story').text();
	responsiveVoice.speak(story, "UK English Male", {rate: 0.8});
	})

	$("#stopVoice").click(function() {
		responsiveVoice.cancel();
	})


	$("#coverdiv, #objectbox").click(function() {
		$("#coverdiv").fadeOut(500);
		$("#objectbox").fadeOut(500);

	});
});

// bodypart!

