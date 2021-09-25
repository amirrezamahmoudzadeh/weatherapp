let apiKey = `2ec703dc90e4410eb2f103139212509`;
// ------------------------------------------------

const search = document.querySelector(".search"),
  resaultLocation = document.querySelector(".resault-location"),
  time = document.querySelector(".resault-time"),
  temperatureDegree = document.querySelector(".resault-temperature-degree"),
  resaultIcon = document.querySelector(".resault-condition-icon"),
  resaultText = document.querySelector(".resault-condition-text");
  

search.addEventListener("submit", (event) => {
  event.preventDefault();
  let cityName = search.city.value;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=2ec703dc90e4410eb2f103139212509&q=${cityName}&aqi=no`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const region = data.location.region,
        country = data.location.country,
        localTime = data.location.localtime,
        temp = data.current.temp_c,
        condIcon = data.current.condition.icon,
        condText = data.current.condition.text;

        // -----------------------------------------------------------
        let locationFormat = `${region} / ${country}`;
        resaultLocation.textContent = locationFormat

        time.textContent = localTime
        temperatureDegree.textContent = temp
        resaultText.textContent = condText
        console.log(data);        
        resaultIcon.src = `${condIcon}`
    });
});
