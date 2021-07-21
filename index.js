//var messageID = Math.floor(Math.random()*7);
//console.log(messageID);
//var messageNormal = ["Funny message","Wow comedy","//give me api keys","epic!","wow. anyways do something","@everyone you should be working on the movie","css is pain"]
//var messageSchool = ["school. it exists","off and away all day","Do some work or smth","Wow incredible","Mathspace lol","wow school so cool","school related message"]
//var messageNight = ["Go to sleep","go to bed","ok bye slep time :bed:","should you really go to sleep? yes.","filler message, go to sleep","go to sleep you fool","sleep is essential"]
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
} 
// lmao

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.getDay();
  var date = currentTime.getDate();
  var month = currentTime.getMonth();
  // convert day to text
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayText = days[day];
  // add contraction to date
  var dateText = date + "";
  if (date === 1) {
    dateText = date + "st";
  } else if (date === 2) {
    dateText = date + "nd";
  } else if (date === 3) {
    dateText = date + "rd";
  } else if (date < 21) {
    dateText = date + "th";
  } else if (date === 22) {
    dateText = date + "nd";
  } else if (date === 23) {
    dateText = date + "rd";
  } else {
    dateText = date + "th";
  }

  // convert month to text
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthText = months[month];
  // convert date to text

  // console.log(d_str);

  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  var d_str = dayText + ", " + dateText + " " + monthText;
  var t_str = hours + ":" + minutes; // + ":" + seconds;
  //var messageArray = messageNormal;
  //if (hours >= 23 || hours <= 2) messageArray = messageNight;
  if (hours >= 8 && hours < 16 && day >= 1 && day <= 5) {
    //messageArray = messageSchool;
    document.getElementById("mediaLinks").style.display = "none";
    document.getElementById("codingLinks").style.display = "none";
    document.getElementById("schoolLinks").innerHTML = document
      .getElementById("schoolLinks")
      .innerHTML.split("<br>")
      .join("&nbsp;".repeat(8));
    document.getElementById("schoolLinks").classList.add("funny");
  }
  document.getElementById("time").innerText = t_str;
  document.getElementById("date").innerText = d_str;
  //document.getElementById("funnymessage").innerText = messageArray[messageID];
}
function Subject(name,start,finish) {
  this.name = name;
  this.start = start;
  this.finish = finish;
}

function hourMinuteToNumber(hour,minute,second = 0){
  return hour * 3600 + minute * 60 + second;
}

const timetable = [
  [], // Sunday
  [
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject("Mathematics",hourMinuteToNumber(9,0),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject("Learning for Life",hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject("Careers",hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject("Science",hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject("Japanese",hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Monday
  [
    new Subject("Japanese",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("Physical Education",hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Mod Time",hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject("HASS",hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject("Japanese",hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Tuesday
  [
    new Subject("Electronics",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("HASS",hourMinuteToNumber(10,55),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject("Innovations",hourMinuteToNumber(13,25),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Wednesday
  [
    new Subject("English",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("Innovations",hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Advocacy",hourMinuteToNumber(11,50),hourMinuteToNumber(12,30)),
    new Subject("Lunch",hourMinuteToNumber(12,30),hourMinuteToNumber(13,10)),
    new Subject("Physical Education",hourMinuteToNumber(13,10),hourMinuteToNumber(14,05)),
    new Subject("Health",hourMinuteToNumber(14,05),hourMinuteToNumber(15,00)),
    new Subject("Home",hourMinuteToNumber(15,00),hourMinuteToNumber(16,00)),
  ], // Thursday
  [
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject("Photography",hourMinuteToNumber(9,0),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject("Science",hourMinuteToNumber(11,15),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject("Learning For Life",hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject("Maths",hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Friday
  [], // Saturday

  [], // Sunday
  [
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject("Mathematics",hourMinuteToNumber(9,0),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject("Science",hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject("Health",hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject("Electronics",hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject("Careers",hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Monday
  [
    new Subject("Japanese",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("Photography",hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Mod Time",hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject("HASS",hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject("English",hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Tuesday
  [
    new Subject("HASS",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("Learning For Life",hourMinuteToNumber(10,55),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject("Innovations",hourMinuteToNumber(13,25),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Wednesday
  [
    new Subject("English",hourMinuteToNumber(8,45),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject("Innovations",hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Advocacy",hourMinuteToNumber(11,50),hourMinuteToNumber(12,30)),
    new Subject("Lunch",hourMinuteToNumber(12,30),hourMinuteToNumber(13,10)),
    new Subject("Japanese",hourMinuteToNumber(13,10),hourMinuteToNumber(14,05)),
    new Subject("Photography",hourMinuteToNumber(14,05),hourMinuteToNumber(15,00)),
    new Subject("Home",hourMinuteToNumber(15,00),hourMinuteToNumber(16,00)),
  ], // Thursday
  [
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject("Science",hourMinuteToNumber(9,0),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject("Physical Education",hourMinuteToNumber(11,15),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject("Maths",hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject("Electronics",hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Friday
  [], // Saturday
]
function getWeatherData() {
  const lol = async function () {
    const city = "Perth"; //Hardcoding aarrgh
    const hour = new Date().getHours();
    const dayOrNight = hour >= 7 && hour <= 18 ? "day" : "night";
    var myHeaders = new Headers();
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("cache-control", "no-cache");

    var myInit = {
      method: "GET",
      headers: myHeaders,
    };

    var myRequest = new Request(
      "https://api.weatherapi.com/v1/current.json?key=e1830767ff0446e7a47132846211907&q=" +
        city
    );

    await fetch(myRequest, myInit)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById("weather").innerHTML = `<span class="bigbutnottoobig">${
          data.current.temp_c
        }°C</span>&nbsp;&nbsp;&nbsp;<img id="weatherimg" src="img/weather/64x64/${dayOrNight}/${data.current.condition.icon
          .split("/")
          .pop()}" alt="${data.current.condition.text}"><br>${
          data.current.condition.text
        }<br><span class="absurdlysmall">Feels like ${
          data.current.feelslike_c
        }°C. UV ${data.current.uv}</span>`;
      });
  };

  if (document.getElementById("weather") != undefined) lol();
  else window.addEventListener("load", lol);
}
function updateTimetable(){
  const now = new Date();
  const nowStamp = hourMinuteToNumber(now.getHours(),now.getMinutes(),now.getSeconds())
  const week = now.getWeek()%2;
  const trueDate = now.getDay() + week*7;
  const tomorrow = (trueDate+1)%14;
  if (timetable[tomorrow].length == 0) {
    document.getElementById("tomorrowSubjects").innerHTML = "nothing!";
  } else {
    let text = "";
    for (subject of timetable[tomorrow]) {
      if (["Recess","Lunch","Home"].indexOf(subject.name) != -1) continue;
      text += ((subject.finish-subject.start > 3600) ? "Double " : "") + subject.name + "<br>"
    }
    document.getElementById("tomorrowSubjects").innerHTML = text;
  }
  var thisSub = new Subject("temp",0,0);
  var nextSub = new Subject("temp",0,0);
  var pickNextOne = false;
  for (subject of timetable[trueDate]) {
    if (pickNextOne) {
      nextSub = subject;
      break;
    }
    if (subject.start < nowStamp && nowStamp < subject.finish) {
      thisSub = subject;
      pickNextOne = true;
    }
  }
  if (thisSub.name == "temp") {
    document.getElementById("upNextSubject").innerHTML = "Something has gone very wrong";
    document.getElementById("timeLeft").innerHTML = "now";
    return "shit";
  }
  document.getElementById("upNextSubject").innerHTML = ((nextSub.finish-nextSub.start > 3600) ? "Double " : "") + nextSub.name;
  const timeLeft = nextSub.finish-nowStamp;
  if (timeLeft < 600) {
    document.getElementById("timeLeft").innerHTML = `in ${Math.floor(timeLeft/60)}m ${timeLeft%60}s`;
  } else if (timeLeft < 3600) {
    document.getElementById("timeLeft").innerHTML = `in ${Math.floor(timeLeft/60)}m`;
  } else {
    document.getElementById("timeLeft").innerHTML = `in ${Math.floor(timeLeft/3600)}h ${Math.floor(timeLeft/60)%60}m`;
  }
  
}

if (new Date().getHours() >= 16) {
  document.getElementById("timetableFull").style.display = "block";
} else {
  document.getElementById("timetable").style.display = "block";

}
updateTime(); // immeditatelly runs the function, so that there is no lag
setInterval(updateTime, 500);
updateTimetable(); // immeditatelly runs the function, so that there is no lag
setInterval(updateTimetable, 500); // sus
getWeatherData();
setInterval(getWeatherData, 900000); // 15 minutes
