
//initial variable setup
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17= $('#hour-17');
var dateDisplay = $('#lead1');
var currentTime = dayjs();
var hours = currentTime.hour();
var minutes = currentTime.minute();
var seconds = currentTime.second();
var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var times1 = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
console.log(hours);

//more variables
var day = currentTime.date();
var month = currentTime.month();
var year = currentTime.year();

//display the date on the top
dateDisplay.text("The current day is Month: " + month + " Day: " + day + " Year: " + year);

//variables for buttons and input text boxes
var text1 = $('#text1');
var button1 = $('#button1');
var text2 = $('#text2');
var button2 = $('#button2');
var text3 = $('#text3');
var button3 = $('#button3');
var text4 = $('#text4');
var button4 = $('#button4');
var text5 = $('#text5');
var button5 = $('#button5');
var text6 = $('#text6');
var button6 = $('#button6');
var text7 = $('#text7');
var button7 = $('#button7');
var text8 = $('#text8');
var button8 = $('#button8');
var text9 = $('#text9');
var button9 = $('#button9');

//setting values after a refresh
text1.val(localStorage.getItem('9am'));
text2.val(localStorage.getItem('10am'));
text3.val(localStorage.getItem('11am'));
text4.val(localStorage.getItem('12pm'));
text5.val(localStorage.getItem('1pm'));
text6.val(localStorage.getItem('2pm'));
text7.val(localStorage.getItem('3pm'));
text8.val(localStorage.getItem('4pm'));
text9.val(localStorage.getItem('5pm'));


//functions for coloring
function setTime(index) {
  if (times[index] == hours) {
    console.log(times[index]);

    console.log(times1[index]);

    times1[index].removeClass('past future');
    times1[index].addClass('present');
  }

  if (times[index] < hours) {
    console.log(times[index]);

    console.log(times1[index]);

    times1[index].removeClass('present future');
    times1[index].addClass('past');
  }

  if (times[index] > hours) {
    console.log(times[index]);

    console.log(times1[index]);

    times1[index].removeClass('past present');
    times1[index].addClass('future');
  }
}


$.each(times, setTime)






//button click assigners
button1.click(saveToLocal1);
button2.click(saveToLocal2);
button3.click(saveToLocal3);
button4.click(saveToLocal4);
button5.click(saveToLocal5);
button6.click(saveToLocal6);
button7.click(saveToLocal7);
button8.click(saveToLocal8);
button9.click(saveToLocal9);


//saving data on click to local functions
function saveToLocal1() {
  var inputValue = text1.val();
  console.log(inputValue);
  localStorage.setItem("9am", inputValue);
}

function saveToLocal2() {
  var inputValue = text2.val();
  console.log(inputValue);
  localStorage.setItem("10am", inputValue);
}

function saveToLocal3() {
  var inputValue = text3.val();
  console.log(inputValue);
  localStorage.setItem("11am", inputValue);
}

function saveToLocal4() {
  var inputValue = text4.val();
  console.log(inputValue);
  localStorage.setItem("12pm", inputValue);
}

function saveToLocal5() {
  var inputValue = text5.val();
  console.log(inputValue);
  localStorage.setItem("1pm", inputValue);
}

function saveToLocal6() {
  var inputValue = text6.val();
  console.log(inputValue);
  localStorage.setItem("2pm", inputValue);
}

function saveToLocal7() {
  var inputValue = text7.val();
  console.log(inputValue);
  localStorage.setItem("3pm", inputValue);
}

function saveToLocal8() {
  var inputValue = text8.val();
  console.log(inputValue);
  localStorage.setItem("4pm", inputValue);
}

function saveToLocal9() {
  var inputValue = text9.val();
  console.log(inputValue);
  localStorage.setItem("5pm", inputValue);
}




