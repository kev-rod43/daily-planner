// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
for (i=0;i<9;i++){
  let idsForHours = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
  ];
  let workDayHours = [
    "9AM",
    "10AM",
    "11am",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ]
  let hourDivTag = $("<div class='row time-block '><div class='col-2 col-md-1 hour text-center py-3'>9AM</div><textarea class='col-8 col-md-10 description' rows='3'> </textarea><button class='btn saveBtn col-2 col-md-1' aria-label='save'><i class='fas fa-save' aria-hidden='true'></i></button></div>");
  hourDivTag.attr("id", idsForHours[i]);
  hourDivTag.children().eq(0).text(workDayHours[i]);
  $(".container-lg").append(hourDivTag);
}

$(".time-block").each(function(){
  let currentHour = dayjs().hour();
  console.log($(this).attr("id"))
  if ($(this).attr("id") === currentHour){
    $(this).addClass("present")
  } else if ($(this).attr("id") < currentHour){
    $(this).addClass("past")
  } else {
    $(this).addClass("future")
  }
}
);



//$("saveBtn").on("click", function(){


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
