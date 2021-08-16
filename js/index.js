//var messageID = Math.floor(Math.random()*7);
//console.log(messageID);
//var messageNormal = ["Funny message","Wow comedy","//give me api keys","epic!","wow. anyways do something","@everyone you should be working on the movie","css is pain"]
//var messageSchool = ["school. it exists","off and away all day","Do some work or smth","Wow incredible","Mathspace lol","wow school so cool","school related message"]
//var messageNight = ["Go to sleep","go to bed","ok bye slep time :bed:","should you really go to sleep? yes.","filler message, go to sleep","go to sleep you fool","sleep is essential"]
let lolsubs = ["Before School", "Recess", "Lunch", "Home", "temp"];

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};
// lmao
var CHANGELINKS = true; //gets set to false immediate lol
function getStorage(item, unset) {
  return localStorage.getItem(item) ?? unset;
}

function loadTheme(themeName) {
  if (getStorage("customBackground", "no") == "yes") {
    // Ah shit, gotta do it customly
    let r = document.querySelector(":root");
    r.style.setProperty("--bg", "#121212");
    r.style.setProperty("--bg-2", "#101010");
    r.style.setProperty(
      "--text-color",
      getStorage("customDarkText", "no") == "yes" ? "black" : "white"
    );
    r.style.setProperty(
      "--link-color",
      getStorage("customDarkText", "no") == "yes" ? "black" : "white"
    );
    r.style.setProperty(
      "--link-hover",
      getStorage("customDarkText", "no") == "yes" ? "black" : "white"
    );
    r.style.setProperty("--font-family", "Roboto");
    document.getElementById("settingsButton").src =
      getStorage("customDarkText", "no") == "yes"
        ? "img/settingsBlack.png"
        : "img/settings.png";
    document.getElementById("backgroundImage").style.display = "block";
    document.getElementById("backgroundImage").style.opacity = Number(
      getStorage("customBackgroundOpacity", "0.3")
    );
    document.getElementById("backgroundImage").src = getStorage(
      "customBackgroundSrc",
      "img/empty.png"
    );
  } else {
    let theme = themeArr[themeName]();
    let r = document.querySelector(":root");
    r.style.setProperty("--bg", theme.bg);
    r.style.setProperty("--bg-2", theme.bg2);
    r.style.setProperty("--text-color", theme.textCol);
    r.style.setProperty("--link-color", theme.linkCol);
    r.style.setProperty("--link-hover", theme.linkHov);
    r.style.setProperty("--font-family", theme.font);
    document.getElementById("settingsButton").src = theme.settingSrc;
    document.getElementById("backgroundImage").style.display =
      theme.bgImg.display;
    document.getElementById("backgroundImage").style.opacity =
      theme.bgImg.opacity;
    document.getElementById("backgroundImage").src = theme.bgImg.src;
  }
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

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
  let amPm = "";
  if (getStorage("24hmode", "yes") == "no") {
    if (hours >= 12) {
      amPm = '<span class="bitdefender"> pm</span>';
    } else {
      amPm = '<span class="bitdefender"> am</span>';
    }
    hours %= 12;
    if (hours == 0) hours += 12;
  }
  hours = hours >= 10 ? hours : "0" + hours;
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  var d_str = dayText + ", " + dateText + " " + monthText;
  var t_str =
    hours +
    ":" +
    minutes +
    (getStorage("seconds", "no") == "yes" ? ":" + seconds : "") +
    amPm;
  //var messageArray = messageNormal;
  if (CHANGELINKS) {
    CHANGELINKS = false;
    linkslol = {
      discord: "https://discord.com/",
      youtube: "https://youtube.com/",
      reddit: "https://reddit.com/",
      connect: "https://connect.det.wa.edu.au/",
      outlook: "https://outlook.office.com/mail/inbox/",
      onedrive: "https://onedrive.live.com/about/en-au/signin/",
      github: "https://github.com/",
      stackoverflow: "https://https://stackoverflow.com//",
      mathspace: "https://mathspace.co/student",
      "e.p.": "https://www.educationperfect.com/app/#/",
      stile: "http://stileapp.com/login",
    };
    let mediaLinks = [];
    getStorage("showDiscord", "no") == "yes" ? mediaLinks.push("discord") : "";
    getStorage("showYoutube", "yes") == "yes" ? mediaLinks.push("youtube") : "";
    getStorage("showReddit", "no") == "yes" ? mediaLinks.push("reddit") : "";
    let schoolLinks = [];
    getStorage("showConnect", "yes") == "yes"
      ? schoolLinks.push("connect")
      : "";
    getStorage("showOutlook", "yes") == "yes"
      ? schoolLinks.push("outlook")
      : "";
    getStorage("showOnedrive", "no") == "yes"
      ? schoolLinks.push("onedrive")
      : "";
    let subjectLinks = [];
    getStorage("showMathspace", "no") == "yes"
      ? subjectLinks.push("mathspace")
      : "";
    getStorage("showEP", "no") == "yes" ? subjectLinks.push("e.p.") : "";
    getStorage("showStile", "no") == "yes" ? subjectLinks.push("stile") : "";
    let codingLinks = [];
    getStorage("showGithub", "no") == "yes" ? codingLinks.push("github") : "";
    getStorage("showStackoverflow", "no") == "yes"
      ? codingLinks.push("stackoverflow")
      : "";
    document.getElementById("mediaLinks").style.display =
      mediaLinks.length == 0 ? "none" : "block";
    document.getElementById("mediaLinks").innerHTML = "<h2>media</h2>";
    document.getElementById("schoolLinks").style.display =
      schoolLinks.length == 0 ? "none" : "block";
    document.getElementById("schoolLinks").innerHTML = "<h2>school</h2>";
    document.getElementById("subjectLinks").style.display =
      subjectLinks.length == 0 ? "none" : "block";
    document.getElementById("subjectLinks").innerHTML = "<h2>subjects</h2>";
    document.getElementById("codingLinks").style.display =
      codingLinks.length == 0 ? "none" : "block";
    document.getElementById("codingLinks").innerHTML = "<h2>coding</h2>";
    for (link of mediaLinks) {
      let linkElem = document.createElement("a");
      linkElem.innerHTML = link;
      linkElem.href = linkslol[link];
      document.getElementById("mediaLinks").append(linkElem);
      document.getElementById("mediaLinks").innerHTML += "<br>";
    }
    for (link of schoolLinks) {
      let linkElem = document.createElement("a");
      linkElem.innerHTML = link;
      linkElem.href = linkslol[link];
      document.getElementById("schoolLinks").append(linkElem);
      document.getElementById("schoolLinks").innerHTML += "<br>";
    }
    for (link of subjectLinks) {
      let linkElem = document.createElement("a");
      linkElem.innerHTML = link;
      linkElem.href = linkslol[link];
      document.getElementById("subjectLinks").append(linkElem);
      document.getElementById("subjectLinks").innerHTML += "<br>";
    }
    for (link of codingLinks) {
      let linkElem = document.createElement("a");
      linkElem.innerHTML = link;
      linkElem.href = linkslol[link];
      document.getElementById("codingLinks").append(linkElem);
      document.getElementById("codingLinks").innerHTML += "<br>";
    }
    //if (hours >= 23 || hours <= 2) messageArray = messageNight;
    /* if (hours >= 8 && hours < 16 && day >= 1 && day <= 5) {
      //messageArray = messageSchool;
      document.getElementById("mediaLinks").style.display = "none";
      document.getElementById("codingLinks").style.display = "none";
      document.getElementById("schoolLinks").innerHTML = document
        .getElementById("schoolLinks")
        .innerHTML.split("<br>")
        .join("&nbsp;".repeat(8));
      document.getElementById("schoolLinks").classList.add("funny");
    } */ //lol lmao
  }
  document.getElementById("time").innerHTML = t_str;
  document.getElementById("date").innerHTML = d_str;
  //document.getElementById("funnymessage").innerText = messageArray[messageID];
}
function Subject(name, start, finish) {
  this.name = name;
  this.start = start;
  this.finish = finish;
}

function hourMinuteToNumber(hour, minute, second = 0) {
  return hour * 3600 + minute * 60 + second;
}

const timetable = [
  [], // Sunday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 00)
    ),
    new Subject(
      getStorage("subMonA1", "Period 1"),
      hourMinuteToNumber(9, 0),
      hourMinuteToNumber(9, 55)
    ),
    new Subject(
      getStorage("subMonA2", "Period 2"),
      hourMinuteToNumber(9, 55),
      hourMinuteToNumber(10, 50)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 50),
      hourMinuteToNumber(11, 15)
    ),
    new Subject(
      getStorage("subMonA3", "Period 3"),
      hourMinuteToNumber(11, 15),
      hourMinuteToNumber(12, 10)
    ),
    new Subject(
      getStorage("subMonA4", "Period 4"),
      hourMinuteToNumber(12, 10),
      hourMinuteToNumber(13, 05)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 05),
      hourMinuteToNumber(13, 40)
    ),
    new Subject(
      getStorage("subMonA5", "Period 5"),
      hourMinuteToNumber(13, 40),
      hourMinuteToNumber(14, 35)
    ),
    new Subject(
      getStorage("subMonA6", "Period 6"),
      hourMinuteToNumber(14, 35),
      hourMinuteToNumber(15, 30)
    ),
    new Subject("Home", hourMinuteToNumber(15, 30), hourMinuteToNumber(16, 00)),
  ], // Monday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subTueA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subTueA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subTueA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subTueA4", "Mod Time"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subTueA5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subTueA6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Tuesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subWedA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subWedA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subWedA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subWedA4", "Period 4"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subWedA5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subWedA6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Wednesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subThuA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subThuA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subThuA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 30)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 30),
      hourMinuteToNumber(13, 10)
    ),
    new Subject(
      getStorage("subThuA5", "Period 5"),
      hourMinuteToNumber(13, 10),
      hourMinuteToNumber(14, 05)
    ),
    new Subject(
      getStorage("subThuA6", "Period 6"),
      hourMinuteToNumber(14, 05),
      hourMinuteToNumber(15, 00)
    ),
    new Subject("Home", hourMinuteToNumber(15, 00), hourMinuteToNumber(16, 00)),
  ], // Thursday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subFriA1", "Period 1"),
      hourMinuteToNumber(9, 0),
      hourMinuteToNumber(9, 55)
    ),
    new Subject(
      getStorage("subFriA2", "Period 2"),
      hourMinuteToNumber(9, 55),
      hourMinuteToNumber(10, 50)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 50),
      hourMinuteToNumber(11, 15)
    ),
    new Subject(
      getStorage("subFriA3", "Period 3"),
      hourMinuteToNumber(11, 15),
      hourMinuteToNumber(12, 10)
    ),
    new Subject(
      getStorage("subFriA4", "Period 4"),
      hourMinuteToNumber(12, 10),
      hourMinuteToNumber(13, 05)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 05),
      hourMinuteToNumber(13, 40)
    ),
    new Subject(
      getStorage("subFriA5", "Period 5"),
      hourMinuteToNumber(13, 40),
      hourMinuteToNumber(14, 35)
    ),
    new Subject(
      getStorage("subFriA6", "Period 6"),
      hourMinuteToNumber(14, 35),
      hourMinuteToNumber(15, 30)
    ),
    new Subject("Home", hourMinuteToNumber(15, 30), hourMinuteToNumber(16, 00)),
  ], // Friday
  [], // Saturday

  [], // Sunday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 00)
    ),
    new Subject(
      getStorage("subMonB1", "Period 1"),
      hourMinuteToNumber(9, 0),
      hourMinuteToNumber(9, 55)
    ),
    new Subject(
      getStorage("subMonB2", "Period 2"),
      hourMinuteToNumber(9, 55),
      hourMinuteToNumber(10, 50)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 50),
      hourMinuteToNumber(11, 15)
    ),
    new Subject(
      getStorage("subMonB3", "Period 3"),
      hourMinuteToNumber(11, 15),
      hourMinuteToNumber(12, 10)
    ),
    new Subject(
      getStorage("subMonB4", "Period 4"),
      hourMinuteToNumber(12, 10),
      hourMinuteToNumber(13, 05)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 05),
      hourMinuteToNumber(13, 40)
    ),
    new Subject(
      getStorage("subMonB5", "Period 5"),
      hourMinuteToNumber(13, 40),
      hourMinuteToNumber(14, 35)
    ),
    new Subject(
      getStorage("subMonB6", "Period 6"),
      hourMinuteToNumber(14, 35),
      hourMinuteToNumber(15, 30)
    ),
    new Subject("Home", hourMinuteToNumber(15, 30), hourMinuteToNumber(16, 00)),
  ], // Monday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subTueB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subTueB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subTueB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subTueB4", "Mod Time"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subTueB5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subTueB6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Tuesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subWedB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subWedB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subWedB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subWedB4", "Period 4"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subWedB5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subWedB6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Wednesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subThuB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subThuB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subThuB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 30)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 30),
      hourMinuteToNumber(13, 10)
    ),
    new Subject(
      getStorage("subThuA5", "Period 5"),
      hourMinuteToNumber(13, 10),
      hourMinuteToNumber(14, 05)
    ),
    new Subject(
      getStorage("subThuA6", "Period 6"),
      hourMinuteToNumber(14, 05),
      hourMinuteToNumber(15, 00)
    ),
    new Subject("Home", hourMinuteToNumber(15, 00), hourMinuteToNumber(16, 00)),
  ], // Thursday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subFriB1", "Period 1"),
      hourMinuteToNumber(9, 0),
      hourMinuteToNumber(9, 55)
    ),
    new Subject(
      getStorage("subFriB2", "Period 2"),
      hourMinuteToNumber(9, 55),
      hourMinuteToNumber(10, 50)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 50),
      hourMinuteToNumber(11, 15)
    ),
    new Subject(
      getStorage("subFriB3", "Period 3"),
      hourMinuteToNumber(11, 15),
      hourMinuteToNumber(12, 10)
    ),
    new Subject(
      getStorage("subFriB4", "Period 4"),
      hourMinuteToNumber(12, 10),
      hourMinuteToNumber(13, 05)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 05),
      hourMinuteToNumber(13, 40)
    ),
    new Subject(
      getStorage("subFriB5", "Period 5"),
      hourMinuteToNumber(13, 40),
      hourMinuteToNumber(14, 35)
    ),
    new Subject(
      getStorage("subFriB6", "Period 6"),
      hourMinuteToNumber(14, 35),
      hourMinuteToNumber(15, 30)
    ),
    new Subject("Home", hourMinuteToNumber(15, 30), hourMinuteToNumber(16, 00)),
  ], // Friday
  [], // Saturday
];
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
        document.getElementById(
          "weather"
        ).innerHTML = `<span class="bigbutnottoobig">${
          data.current.temp_c
        }°C</span>&nbsp;&nbsp;&nbsp;<img id="weatherimg" src="img/weather/64x64/${dayOrNight}/${data.current.condition.icon
          .split("/")
          .pop()}" alt="${data.current.condition.text}"><br>${
          data.current.condition.text
        }<br><span class="absurdlysmall">Feels like ${
          data.current.feelslike_c
        }°C. UV ${data.current.uv}</span>`;
        document.getElementById("weather").classList.add("sliding");
      });
  };

  if (document.getElementById("weather") != undefined) lol();
  else window.addEventListener("load", lol);
}
function updateTimetable() {
  const now = new Date();
  const nowStamp = hourMinuteToNumber(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
  // nowStamp = hourMinuteToNumber(8,46)
  const week = now.getWeek() % 2;
  const trueDate = now.getDay() + week * 7;
  // trueDate = 3;
  const tomorrow = (trueDate + 1) % 14;
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
        if (lolsubs.indexOf(oldSub) != -1) continue;
        text += (oldLength > 0 ? "Double " : "") + oldSub + "<br>";
      }
    }
    document.getElementById("tomorrowSubjects").innerHTML = text;
  }
  var thisSub = new Subject("temp", 0, 0);
  var nextSub = new Subject("temp", 0, 0);
  var subsAfter = [];
  var pickNextOne = false;
  for (subject of timetable[trueDate]) {
    if (pickNextOne && subject.name != thisSub.name) {
      //Aargh i am do sumb
      nextSub = subject;
      subsAfter = timetable[trueDate].slice(
        timetable[trueDate].indexOf(subject) + 1
      );
      console.log(subsAfter);
      break;
    }
    if (subject.start <= nowStamp && nowStamp <= subject.finish) {
      thisSub = subject;
      pickNextOne = true;
    }
  }
  if (thisSub.name == "temp") {
    document.getElementById("upNextSubject").innerHTML =
      "Something has gone very wrong";
    document.getElementById("timeLeft").innerHTML = "now";
    document.getElementById("timetable").style.display = "none";
    document.getElementById("timetableFull").style.display = "block";
    return "shit";
  }
  if (nextSub.name == "temp") {
    document.getElementById("timetable").style.display = "none";
    document.getElementById("timetableFull").style.display = "block";
  }
  if (subsAfter.length == 0) {
    document.getElementById("after").style.display = "none";
  } else {
    document.getElementById("afterSub").innerText = subsAfter
      .map((s) => s.name)
      .filter((n) => lolsubs.indexOf(n) == -1)
      .join("\n");
  }
  document.getElementById("upNextSubject").innerHTML =
    (nextSub.finish - nextSub.start > 3600 ? "Double " : "") + nextSub.name;
  const timeLeft = nextSub.start - nowStamp;
  if (timeLeft < 3600) {
    document.getElementById("timeLeft").innerHTML = `in ${Math.floor(
      timeLeft / 60
    )}m ${timeLeft % 60}s`;
  } else {
    document.getElementById("timeLeft").innerHTML = `in ${Math.floor(
      timeLeft / 3600
    )}h ${Math.floor(timeLeft / 60) % 60}m`;
  }
}

if (new Date().getHours() >= 16) {
  document.getElementById("timetableFull").style.display = "block";
} else {
  document.getElementById("timetable").style.display = "block";
}
updateTime(); // immeditatelly runs the function, so that there is no lag
setInterval(updateTime, 250);
updateTimetable(); // immeditatelly runs the function, so that there is no lag
setInterval(updateTimetable, 250); // sus
getWeatherData();
setInterval(getWeatherData, 900000); // 15 minutes

let settingsShown = false;
document.getElementById("settings").style.display = "none";
document
  .getElementById("settingsButton")
  .addEventListener("click", function () {
    if (!settingsShown) {
      document.getElementById("main").style.display = "none";
      document.getElementById("settings").style.display = "block";
    } else {
      document.getElementById("main").style.display = "block";
      document.getElementById("settings").style.display = "none";
    }
    // console.log(document.getElementById("settings").style.display)
    settingsShown = !settingsShown;
  });

for (weekID of ["A", "B"]) {
  for (day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]) {
    let dayTitle = document.createElement("div");
    dayTitle.classList.add("evenperfecter");
    dayTitle.innerHTML = `${
      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][day]
    } ${weekID}`;
    document.getElementById("timetableInputHolder").appendChild(dayTitle);
    let theflexbox = document.createElement("div");
    theflexbox.classList.add("flexboxlol");
    for (period of [1, 2, 3, 4, 5, 6]) {
      let inputHolder = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      label.innerText = `${period}: `;
      input.value = getStorage(
        `sub${["Mon", "Tue", "Wed", "Thu", "Fri"][day]}${weekID}${period}`,
        `Period ${period}`
      );
      if (day == 3 && period == 4) {
        input.value = "Advocacy";
        input.disabled = true;
      }
      let val = `sub${
        ["Mon", "Tue", "Wed", "Thu", "Fri"][day]
      }${weekID}${period}`;
      input.addEventListener("keyup", function () {
        // console.log(val);
        localStorage.setItem(val, this.value);
      });
      inputHolder.appendChild(label);
      inputHolder.appendChild(input);
      input.classList.add(
        "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis"
      );
      theflexbox.appendChild(inputHolder);
    }
    theflexbox.classList.add(
      "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis"
    );
    document.getElementById("timetableInputHolder").appendChild(theflexbox);
  }
  let br = document.createElement("br");
  document.getElementById("timetableInputHolder").appendChild(br);
  br.classList.add(
    "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis"
  );
}
let notice = document.createElement("div");
notice.innerText = "Reload page for changes to take effect";

document.getElementById("themeInput").addEventListener("change", function () {
  localStorage.setItem("themeSetting", this.value);
  loadTheme(this.value);
});

function addThemeToMoreThemes(val, name) {
  let option = document.createElement("option");
  option.text = name;
  option.value = val;
  moreGroup.appendChild(option);
}
var darkGroup = document.getElementById("darkThemeInput");
var lightGroup = document.getElementById("lightThemeInput");
var moreGroup = document.getElementById("moreThemeInput");
if (getStorage("funModeUnlocked", "no") == "yes") {
  document.getElementById("moreThemeInput").style.display = "block";
  addThemeToMoreThemes("funMode", "Fun Mode");
}
if (getStorage("trueFunModeUnlocked", "no") == "yes") {
  document.getElementById("moreThemeInput").style.display = "block";
  addThemeToMoreThemes("trueFunMode", "True Fun Mode");
}
if (getStorage("rngThemeUnlocked", "no") == "yes") {
  document.getElementById("moreThemeInput").style.display = "block";
  addThemeToMoreThemes("rngDark", "RNG Dark");
  addThemeToMoreThemes("rngLight", "RNG Light");
}

if (getStorage("moreThemesUnlocked", "no") == "yes") {
  document.getElementById("moreThemeInput").style.display = "block";
  addThemeToMoreThemes("graphicDesign", "Graphic Design is my passion");
  addThemeToMoreThemes("shrek", "Shrek");
  addThemeToMoreThemes("shrekDark", "Shrek Dark");
  addThemeToMoreThemes("neon", "Neon");
  addThemeToMoreThemes("red", "Red");
  addThemeToMoreThemes("funModePlus", "Fun Mode++");
  addThemeToMoreThemes("literallyNightMode", "Literally Night Mode");
  addThemeToMoreThemes("sussyBaka", "When the theme is sus 😳");
}
let theme = getStorage("themeSetting", "dark");
document.getElementById("themeInput").value = theme;
loadTheme(theme);

document.getElementById("timetableInputHolder").appendChild(notice);
document.getElementById("timetableInputHolder").style.display = "none";
document
  .getElementById("toggleTimetableInput")
  .addEventListener("mousedown", function () {
    document.getElementById("timetableInputHolder").style.display =
      document.getElementById("timetableInputHolder").style.display == "none"
        ? "block"
        : "none";
    document.getElementById("toggleTimetableInput").innerText =
      document.getElementById("toggleTimetableInput").innerText == "Timetable ▸"
        ? "Timetable ▾"
        : "Timetable ▸";
  });

document.getElementById("searchBar").placeholder = `Search with ${getStorage(
  "searchEngine",
  "Google"
)}`;
document.getElementById("searchEngine").value = getStorage(
  "searchEngine",
  "Google"
);

document.getElementById("searchEngine").addEventListener("change", function () {
  document.getElementById(
    "searchBar"
  ).placeholder = `Search with ${this.value}`;
  localStorage.setItem("searchEngine", this.value);
});
function checkboxAuto(id, d) {
  document.getElementById(id).checked = getStorage(id, d) == "yes";
  document.getElementById(id).addEventListener("click", function () {
    document.getElementById(id).checked = getStorage(id, d) == "no";
    localStorage.setItem(id, getStorage(id, d) == "no" ? "yes" : "no");
    CHANGELINKS = true;
    if (id == "customBackground") {
      document.getElementById("customBackgroundSettings").style.display =
        getStorage(id, d) == "yes" ? "inline-block" : "none";
      loadTheme(getStorage("themeSetting", "dark"));
    }
    if (id == "customDarkText") {
      loadTheme(getStorage("themeSetting", "dark"));
    }
  });
}

checkboxAuto("24hmode", "yes");

checkboxAuto("seconds", "no");

checkboxAuto("showYoutube", "yes");

checkboxAuto("showDiscord", "no");

checkboxAuto("showReddit", "no");

checkboxAuto("showConnect", "yes");

checkboxAuto("showOutlook", "yes");

checkboxAuto("showOnedrive", "no");

checkboxAuto("showMathspace", "no");

checkboxAuto("showEP", "no");

checkboxAuto("showStile", "no");

checkboxAuto("showGithub", "no");

checkboxAuto("showStackoverflow", "no");

checkboxAuto("customBackground", "no");

document.getElementById("customBackgroundSettings").style.display =
  getStorage("customBackground", "no") == "yes" ? "inline-block" : "none";

document
  .getElementById("customBackgroundSrc")
  .addEventListener("change", function (e) {
    //upload file to localstorage
    var file = document.getElementById("customBackgroundSrc").files[0];
    var reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("customBackgroundSrc", this.result);
      loadTheme(getStorage("themeSetting", "dark"));
    };
    reader.readAsDataURL(file);
  });

checkboxAuto("customDarkText", "no");

document
  .getElementById("customBackgroundButton")
  .addEventListener("click", () => {
    document.getElementById("customBackgroundSrc").click();
  });

document.getElementById("customBackgroundOpacity").value =
  Number(getStorage("customBackgroundOpacity", "0.3")) * 100;

document
  .getElementById("customBackgroundOpacity")
  .addEventListener("change", () => {
    localStorage.setItem(
      "customBackgroundOpacity",
      document.getElementById("customBackgroundOpacity").value / 100
    );
    loadTheme(getStorage("themeSetting", "dark"));
  });

document.getElementById("searchBar").addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    if (this.value == "fun mode") {
      alert("fun mode activated");
      localStorage.setItem("funModeUnlocked", "yes");
      localStorage.setItem("themeSetting", "funMode");
      loadTheme("funMode");
      return;
    }
    if (this.value == "true fun mode") {
      alert("TRUE fun mode activated");
      localStorage.setItem("trueFunModeUnlocked", "yes");
      localStorage.setItem("themeSetting", "trueFunMode");
      loadTheme("trueFunMode");
      return;
    }
    if (this.value == "rngesus take the wheel") {
      alert("alrigth then");
      localStorage.setItem("rngThemeUnlocked", "yes");
      localStorage.setItem("themeSetting", "rngDark");
      loadTheme("rngDark");
      return;
    }
    if (this.value == "i want more themes") {
      alert("refresh the page");
      localStorage.setItem("moreThemesUnlocked", "yes");
      return;
    }
    if (this.value.length > 0) {
      q = {
        Google: "https://google.com/search?q=" + this.value,
        DuckDuckGo: "https://duckduckgo.com/?q=" + this.value,
        Bing: "https://bing.com/?q=" + this.value,
      };
      window.location.href = q[getStorage("searchEngine", "Google")];
    }
  }
});
