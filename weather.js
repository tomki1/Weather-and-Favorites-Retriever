      document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('button_1').addEventListener('click', function(event){
          var req = new XMLHttpRequest();

          var userCity = document.getElementById("city_input").value;
          var userZip = document.getElementById("zip_input").value;
          var urltext = null;

          // user entered city, url text will be for city
          if (userCity != "") {

            urltext = "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=fa7d80c48643dfadde2cced1b1be6ca1";

          }

          // else url text will be for zipcode
          else {
            urltext = "http://api.openweathermap.org/data/2.5/weather?zip=" + userZip + "&appid=fa7d80c48643dfadde2cced1b1be6ca1";
          }

          req.open('GET', urltext, true);


 req.addEventListener("load", function() {
        // response from openweathermap if no error
       if(req.status >= 200 && req.status < 400){


        var response = JSON.parse(req.responseText);

        document.getElementById("weather_results").textContent = "Weather Results:";
        document.getElementById("city").textContent = "City: " + response.name;
        document.getElementById("temperature_current").textContent = "Current Temperature: " + response.main.temp + " Kelvin";
        document.getElementById("temperature_high").textContent = "High Temperature: " + response.main.temp_max + " Kelvin";
        document.getElementById("temperature_low").textContent = "Low Temperature: " + response.main.temp_min + " Kelvin";
        document.getElementById("weather_condition").textContent = "Weather Condition: " + response.weather[0].main;
        document.getElementById("humidity").textContent = "Humidity: " + response.main.humidity + "%";
      }

      else {
        console.log("Error in network request: " + req.statusText);
      }

    });

    req.send(urltext);
    event.preventDefault();
  });


document.getElementById("button_2").addEventListener("click", function(event){
            // console.log("color button clicked")
          var req = new XMLHttpRequest();
          let payload = {text:null};
          payload.text = document.getElementById("color_input").value;

    
          req.open("POST", "http://httpbin.org/post", true);
          req.setRequestHeader("Content-Type", "application/json");


 req.addEventListener("load", function() {

       if(req.status >= 200 && req.status < 400){


        var response = JSON.parse(req.responseText);

        document.getElementById("personal_results").textContent = "Personal Favorites Results:";
        document.getElementById("color").textContent = "Favorite Color: " + response.data;

      }

      else {
        console.log("Error in network request: " + req.statusText);
      }

    });

    req.send(payload.text);
    event.preventDefault();
  });


}