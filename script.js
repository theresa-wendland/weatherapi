var city = "Chicago";

$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    ",us&units=imperial&APPID=eae6f3c37fc9c377adc7833cc398cd53",
  function (data) {
    console.log(data);

    let icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp = Math.floor(data.main.temp);
    var condition = data.weather[0].main;

    $(".condition").append(condition);
    $(".icon").attr("src", icon);
    $(".temp").append(temp);
  }
);
