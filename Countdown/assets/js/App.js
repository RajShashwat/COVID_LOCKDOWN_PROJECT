function countdown(){
  var now = new Date();
  var endDate = new Date(2020, 3, 15);

  var currentTime = now.getTime();
  var endTime = endDate.getTime();

  var timeRemaining = endTime-currentTime;

  var second = Math.floor(timeRemaining / 1000);
  var minute = Math.floor(second / 60);
  var hour = Math.floor(minute / 60);
  var day = Math.floor(hour / 24);

  hour %= 24;
  minute %= 60;
  second %= 60;

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  document.getElementById("days").textContent = day;
  document.getElementById("hours").textContent = hour;
  document.getElementById("minutes").textContent = minute;
  document.getElementById("seconds").textContent = second;

  setTimeout(countdown,1000);
}

countdown()
