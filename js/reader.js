$(document).ready(function() {
	$("#submitIt").click(function() {
		var name1 = $("#name1").val();
		var name2 = $("#name2").val();
		var name3 = $("#name3").val();
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

		$("#coverdiv").fadeIn(500);
		$("#objectbox").fadeIn(500);
	});


	$("#coverdiv, #objectbox").click(function() {
		$("#coverdiv").fadeOut(500);
		$("#objectbox").fadeOut(500);

	});
});

// bodypart!

