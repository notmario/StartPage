//var messageID = Math.floor(Math.random()*7);
//console.log(messageID);
//var messageNormal = ["Funny message","Wow comedy","//give me api keys","epic!","wow. anyways do something","@everyone you should be working on the movie","css is pain"]
//var messageSchool = ["school. it exists","off and away all day","Do some work or smth","Wow incredible","Mathspace lol","wow school so cool","school related message"]
//var messageNight = ["Go to sleep","go to bed","ok bye slep time :bed:","should you really go to sleep? yes.","filler message, go to sleep","go to sleep you fool","sleep is essential"]
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
  if (hours >= 8 && hours < 4 && (day >= 1) & (day <= 5)) {
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
function getWeatherData() {
  const lol = async function () {
    console.log("a");
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
        document.getElementById("weather").innerHTML = `${
          data.current.temp_c
        }°C&nbsp;&nbsp;&nbsp;<img id="weatherimg" src="img/weather/64x64/${dayOrNight}/${data.current.condition.icon
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
updateTime(); // immeditatelly runs the function, so that there is no lag
setInterval(updateTime, 1000);
getWeatherData();
setInterval(getWeatherData, 900000); // 15 minutes
