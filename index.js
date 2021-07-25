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

function getStorage(item,unset){
  return localStorage.getItem(item) ?? unset;
}

console.log(getStorage("subMonA1","Period 1"))

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
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject(getStorage("subMonA1","Period 1"),hourMinuteToNumber(9,0),hourMinuteToNumber(9,55)),
    new Subject(getStorage("subMonA2","Period 2"),hourMinuteToNumber(9,55),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject(getStorage("subMonA3","Period 3"),hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject(getStorage("subMonA4","Period 4"),hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject(getStorage("subMonA5","Period 5"),hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject(getStorage("subMonA6","Period 6"),hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Monday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subTueA1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subTueA2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subTueA3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject(getStorage("subTueA4","Mod Time"),hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject(getStorage("subTueA5","Period 5"),hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject(getStorage("subTueA6","Period 6"),hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Tuesday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subWedA1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subWedA2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subWedA3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject(getStorage("subWedA4","Period 4"),hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject(getStorage("subWedA5","Period 5"),hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject(getStorage("subWedA6","Period 6"),hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Wednesday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subThuA1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subThuA2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subThuA3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Advocacy",hourMinuteToNumber(11,50),hourMinuteToNumber(12,30)),
    new Subject("Lunch",hourMinuteToNumber(12,30),hourMinuteToNumber(13,10)),
    new Subject(getStorage("subThuA5","Period 5"),hourMinuteToNumber(13,10),hourMinuteToNumber(14,05)),
    new Subject(getStorage("subThuA6","Period 6"),hourMinuteToNumber(14,05),hourMinuteToNumber(15,00)),
    new Subject("Home",hourMinuteToNumber(15,00),hourMinuteToNumber(16,00)),
  ], // Thursday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subFriA1","Period 1"),hourMinuteToNumber(9,0),hourMinuteToNumber(9,55)),
    new Subject(getStorage("subFriA2","Period 2"),hourMinuteToNumber(9,55),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject(getStorage("subFriA3","Period 3"),hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject(getStorage("subFriA4","Period 4"),hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject(getStorage("subFriA5","Period 5"),hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject(getStorage("subFriA6","Period 6"),hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Friday
  [], // Saturday

  [], // Sunday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject("Advocacy",hourMinuteToNumber(8,45),hourMinuteToNumber(9,00)),
    new Subject(getStorage("subMonB1","Period 1"),hourMinuteToNumber(9,0),hourMinuteToNumber(9,55)),
    new Subject(getStorage("subMonB2","Period 2"),hourMinuteToNumber(9,55),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject(getStorage("subMonB3","Period 3"),hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject(getStorage("subMonB4","Period 4"),hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject(getStorage("subMonB5","Period 5"),hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject(getStorage("subMonB6","Period 6"),hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
    new Subject("Home",hourMinuteToNumber(15,30),hourMinuteToNumber(16,00)),
  ], // Monday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subTueB1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subTueB2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subTueB3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject(getStorage("subTueB4","Mod Time"),hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject(getStorage("subTueB5","Period 5"),hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject(getStorage("subTueB6","Period 6"),hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Tuesday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subWedB1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subWedB2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subWedB3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject(getStorage("subWedB4","Period 4"),hourMinuteToNumber(11,50),hourMinuteToNumber(12,45)),
    new Subject("Lunch",hourMinuteToNumber(12,45),hourMinuteToNumber(13,25)),
    new Subject(getStorage("subWedB5","Period 5"),hourMinuteToNumber(13,25),hourMinuteToNumber(14,20)),
    new Subject(getStorage("subWedB6","Period 6"),hourMinuteToNumber(14,20),hourMinuteToNumber(15,15)),
    new Subject("Home",hourMinuteToNumber(15,15),hourMinuteToNumber(16,00)),
  ], // Wednesday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subThuB1","Period 1"),hourMinuteToNumber(8,45),hourMinuteToNumber(9,40)),
    new Subject(getStorage("subThuB2","Period 2"),hourMinuteToNumber(9,40),hourMinuteToNumber(10,35)),
    new Subject("Recess",hourMinuteToNumber(10,35),hourMinuteToNumber(10,55)),
    new Subject(getStorage("subThuB3","Period 3"),hourMinuteToNumber(10,55),hourMinuteToNumber(11,50)),
    new Subject("Advocacy",hourMinuteToNumber(11,50),hourMinuteToNumber(12,30)),
    new Subject("Lunch",hourMinuteToNumber(12,30),hourMinuteToNumber(13,10)),
    new Subject(getStorage("subThuA5","Period 5"),hourMinuteToNumber(13,10),hourMinuteToNumber(14,05)),
    new Subject(getStorage("subThuA6","Period 6"),hourMinuteToNumber(14,05),hourMinuteToNumber(15,00)),
    new Subject("Home",hourMinuteToNumber(15,00),hourMinuteToNumber(16,00)),
  ], // Thursday
  [
    new Subject("Before School",hourMinuteToNumber(0,0),hourMinuteToNumber(8,45)),
    new Subject(getStorage("subFriB1","Period 1"),hourMinuteToNumber(9,0),hourMinuteToNumber(9,55)),
    new Subject(getStorage("subFriB2","Period 2"),hourMinuteToNumber(9,55),hourMinuteToNumber(10,50)),
    new Subject("Recess",hourMinuteToNumber(10,50),hourMinuteToNumber(11,15)),
    new Subject(getStorage("subFriB3","Period 3"),hourMinuteToNumber(11,15),hourMinuteToNumber(12,10)),
    new Subject(getStorage("subFriB4","Period 4"),hourMinuteToNumber(12,10),hourMinuteToNumber(13,05)),
    new Subject("Lunch",hourMinuteToNumber(13,05),hourMinuteToNumber(13,40)),
    new Subject(getStorage("subFriB5","Period 5"),hourMinuteToNumber(13,40),hourMinuteToNumber(14,35)),
    new Subject(getStorage("subFriB6","Period 6"),hourMinuteToNumber(14,35),hourMinuteToNumber(15,30)),
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
        document.getElementById("weather").classList.add("sliding")
      });
  };

  if (document.getElementById("weather") != undefined) lol();
  else window.addEventListener("load", lol);
}
function updateTimetable(){
  const now = new Date();
  const nowStamp = hourMinuteToNumber(now.getHours(),now.getMinutes(),now.getSeconds())
  // nowStamp = hourMinuteToNumber(8,46)
  const week = now.getWeek()%2;
  const trueDate = now.getDay() + week*7 - 5;
  // trueDate = 3;
  const tomorrow = (trueDate+1)%14;
  if (timetable[tomorrow].length == 0) {
    document.getElementById("tomorrowSubjects").innerHTML = "nothing!";
  } else {
    let text = "";
    let currentSub = "temp";
    let length = 0;
    for (subject of timetable[tomorrow]) {
      if (currentSub == subject.name) {
        length++;
      } else {
        let oldSub = currentSub;
        currentSub = subject.name;
        let oldLength = length;
        length = 0;
        if (["Before School","Recess","Lunch","Home","temp"].indexOf(oldSub) != -1) continue;
        text += ((oldLength > 0) ? "Double " : "") + oldSub + "<br>"

      }
    }
    document.getElementById("tomorrowSubjects").innerHTML = text;
  }
  var thisSub = new Subject("temp",0,0);
  var nextSub = new Subject("temp",0,0);
  var pickNextOne = false;
  for (subject of timetable[trueDate]) {
    if (pickNextOne && nextSub.name != thisSub) {
      nextSub = subject;
      break;
    }
    if (subject.start <= nowStamp && nowStamp <= subject.finish) {
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
  const timeLeft = nextSub.start-nowStamp;
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
//setInterval(updateTimetable, 500); // sus
getWeatherData();
setInterval(getWeatherData, 900000); // 15 minutes

let settingsShown = false;
document.getElementById("settings").style.display = "none";
document.getElementById("settingsButton").addEventListener("click",function(){
  if (!settingsShown) {
    document.getElementById("main").style.display = "none";
    document.getElementById("settings").style.display = "block";
  } else {
    document.getElementById("main").style.display = "block";
    document.getElementById("settings").style.display = "none";
  }
  console.log(document.getElementById("settings").style.display)
  settingsShown=!settingsShown;
})

for (weekID of ["A","B"]) {
  for (day in ["Monday","Tuesday","Wednesday","Thursday","Friday"]) {
    let dayTitle = document.createElement("div");
    dayTitle.classList.add("medium")
    dayTitle.innerHTML = `${["Monday","Tuesday","Wednesday","Thursday","Friday"][day]} ${weekID}`;
    document.getElementById("timetableInputHolder").appendChild(dayTitle)
    let theflexbox = document.createElement("div");
    theflexbox.classList.add("flexboxlol");
    for (period of [1,2,3,4,5,6]) {
      let inputHolder = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      label.innerText = `${period}: `;
      input.value = getStorage(`sub${["Mon","Tue","Wed","Thu","Fri"][day]}${weekID}${period}`,`Period ${period}`)
      if (day == 3 && period == 4) {
        input.value = "Advocacy";
        input.disabled = true;
      }
      let val = `sub${["Mon","Tue","Wed","Thu","Fri"][day]}${weekID}${period}`;
      input.addEventListener("keyup", function(){
        console.log(val);
        localStorage.setItem(val,this.value)
      });
      inputHolder.appendChild(label)
      inputHolder.appendChild(input)
      theflexbox.appendChild(inputHolder)
    }
    document.getElementById("timetableInputHolder").appendChild(theflexbox)
  }
  let br = document.createElement("br")
  document.getElementById("timetableInputHolder").appendChild(br)
}
let notice = document.createElement("div")
notice.innerText = "Reload page for changes to take effect"

document.getElementById("themeInput").addEventListener("mouseup", function(){
  let currentVal = getStorage("themeSetting","dark")
  if (currentVal == "dark") {
    var r = document.querySelector(':root');
    r.style.setProperty('--bg', '#e0e0e0');
    r.style.setProperty('--bg-2', '#d8d8d8');
    r.style.setProperty('--text-color', 'black');
    r.style.setProperty('--link-color', '#181818');
    r.style.setProperty('--link-hover', '#090909');
    document.getElementById("settingsButton").src="img/settingsBlack.png";
    localStorage.setItem("themeSetting","light");
  } else {
    var r = document.querySelector(':root');
    r.style.setProperty('--bg', '#121212');
    r.style.setProperty('--bg-2', '#101010');
    r.style.setProperty('--text-color', 'white');
    r.style.setProperty('--link-color', 'lightgray');
    r.style.setProperty('--link-hover', 'gray');
    document.getElementById("settingsButton").src="img/settings.png";
    localStorage.setItem("themeSetting","dark");
  }
})
document.getElementById("themeInput").checked = getStorage("themeSetting","dark") == "light";
if (getStorage("themeSetting","dark") == "light") {
  var r = document.querySelector(':root');
  r.style.setProperty('--bg', '#e0e0e0');
  r.style.setProperty('--bg-2', '#d8d8d8');
  r.style.setProperty('--text-color', 'black');
  r.style.setProperty('--link-color', '#181818');
  r.style.setProperty('--link-hover', '#090909');
}

document.getElementById("timetableInputHolder").appendChild(notice)
document.getElementById("timetableInputHolder").style.display = "none";
document.getElementById("toggleTimetableInput").addEventListener("mousedown", function(){
  document.getElementById("timetableInputHolder").style.display = 
    document.getElementById("timetableInputHolder").style.display == "none" ? "block" : "none";
  document.getElementById("toggleTimetableInput").innerText = 
    document.getElementById("toggleTimetableInput").innerText == "Timetable ▸" ? "Timetable ▾" : "Timetable ▸";
  
})


document.getElementById("searchBar").placeholder = `Search with ${getStorage("searchEngine","Google")}`
document.getElementById("searchEngine").value = getStorage("searchEngine","Google");

document.getElementById("searchEngine").addEventListener("change", function(){
  document.getElementById("searchBar").placeholder = `Search with ${this.value}`
  localStorage.setItem("searchEngine",this.value)
})

document.getElementById("searchBar").addEventListener("keypress", function(e){
  if (e.code === "Enter") {
    if (this.value.length > 0) {
      q = {
        "Google": "https://google.com/search?q=" + this.value,
        "DuckDuckGo": "https://duckduckgo.com/?q=" + this.value,
        "Bing": "https://bing.com/?q=" + this.value,
      }
      window.location.href = q[getStorage("searchEngine","Google")];
    }
  }
})