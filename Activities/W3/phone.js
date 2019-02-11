$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#content_addToList").hide(); // hide the element with ID "otherElement"
	$("#content_help").hide();
});

$("#dialerButton").click(function() { // when "button_id" is clicked
	$("#content_list").hide(); // hide element
	$("#content_dialer").show();	// show other element
  $("#content_addToList").hide();	// hide other element
	$("#content_help").hide();
});

$("#contactsButton").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_addToList").hide();	// hide other element
	$("#content_help").hide();
});


$("#AddContactButton").click(function() { // when "button_id" is clicked
	$("#content_list").hide(); // hide element
	$("#content_dialer").hide();	// hide other element
  $("#content_addToList").show();	// show other element
	$("#content_help").hide();
});

$("#HelpButton").click(function() { // when "button_id" is clicked
	$("#content_list").hide(); // hide element
	$("#content_dialer").hide();	// hide other element
  $("#content_addToList").hide();	// show other element
	$("#content_help").show();
});

$("#numbers button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
});

$("#dclear").click(function() {
	$("#number_input").val("");
});
