//initializes the object that stores the hour notes, then pulls the properties from localstorage if it exists
let savedHourNotes = new Object;
if (JSON.parse(localStorage.getItem("saved-hour-notes"))!==null){
  savedHourNotes= JSON.parse(localStorage.getItem("saved-hour-notes"));
}

// displays the hour notes text that was saved locally
$("textarea").each(function(){
  let timeBlocktIndex = $(this).parent().attr("data-element-index")
  let savedNoteForHour = savedHourNotes[timeBlocktIndex]
  if (savedNoteForHour !== undefined){
    $(this).val(savedHourNotes[timeBlocktIndex])
  }
}
);

//sets the text of the header to todays date
$("#currentDay").text(dayjs().format("dddd, MMMM Do"))

//sets the style utility classes that sets the background color for the time blocks depending on wether they are in the present, past or future
$(".time-block").each(function(){
  let currentHour = dayjs().hour();
  if ($(this).attr("data-element-hour") === currentHour){
    $(this).addClass("present")
  } else if ($(this).attr("data-element-hour") < currentHour){
    $(this).addClass("past")
  } else {
    $(this).addClass("future")
  }
}
);

//saves the hour notes to the savedHourNotes object, then stores that object in local data
$(".saveBtn").on("click", function(event){
  let timeBlocktIndex = $(event.currentTarget).parent().attr("data-element-index");
  let hourNotes = $(event.currentTarget).siblings("textarea").val();

  savedHourNotes[timeBlocktIndex] = hourNotes;

  localStorage.setItem("saved-hour-notes", JSON.stringify(savedHourNotes));
}
)

