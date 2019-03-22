/* This file intentionally left blank. */
var downX;
var upppX;
var numClicks;

$("#gestureArea").mousedown(function(event) {
  downX = event.clientX;
  $("#gestureResult").html("Mouse Down.");
})

$("#gestureArea").mouseup(function(event) {
  upppX = event.clientX;

  if (upppX < downX) {
    $("#gestureResult").html("Swipe Left.");
    downX = upppX;
  }
  else if (upppX > downX) {
    $("#gestureResult").html("Swipe Right.");
    downX = upppX;
  }
  else if (upppX == downX) {
    $("#gestureResult").html("Mouse Up.");
  }

})
// 
// $("#gestureArea").dbclick(function() {
//   $("#gestureResult").html("Double Click.");
// })
//
//
// $("#gestureArea").click(function() {
//   numClicks += 1;
//   if (numClicks == 3) {
//     $("#gestureResult").html("Triple Click.");
//   }
// })
//
// $("#gestureArea").mousemove(function() {
//   numClicks = 0;
// })





//
