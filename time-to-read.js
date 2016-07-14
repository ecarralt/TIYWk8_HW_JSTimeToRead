$(document).ready(function timeToRead() {

  var fulltext = $('body').text();
  var textarray = fulltext.split(" ");
//  console.log(textarray);
  var elementcount = textarray.length;
  // console.log(elementcount);

  var minutes = elementcount / 230;

  var minutes_int = Math.floor(minutes);

  var minutes_plus = minutes_int + 1;

  console.log("It will take " + minutes_int + " to " + minutes_plus + " minutes to read this paragraph");

  $( ".time-to-read-view" ).append(minutes_int + " minute read" );


});

  //$(‘.time-to-read-view’).text(minutes_int);
