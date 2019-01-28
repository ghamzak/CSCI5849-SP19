$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#content_addToList").hide(); // hide the element with ID "otherElement"
});

$("#dialerButton").click(function() { // when "button_id" is clicked
	$("#content_list").hide(); // hide element
	$("#content_dialer").show();	// show other element
  $("#content_addToList").hide();	// hide other element
});

$("#contactsButton").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_addToList").hide();	// hide other element
});


$("#AddContactButton").click(function() { // when "button_id" is clicked
	$("#content_list").hide(); // hide element
	$("#content_dialer").hide();	// hide other element
  $("#content_addToList").show();	// show other element
});
