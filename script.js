if (new Date().getHours() < 18 || new Date().getHours() < 6 ) {
    document.body.style.backgroundImage = "url('morning.jpeg')"
  }
  else{
    document.body.style.backgroundImage = "url('night.jpeg')"}
  $(document).ready(function(){
    $("#search").on("keyup",function(v){
      var name=v.target.value
      $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=52ed90ae3baa9bda0ac2aaacd69ae125',
      type:"GET",
      }).done(function(data){
        console.log(data)
       $("#fl").html("Temperature ressentie : "+Math.round(data.main.feels_like - 273.15));
       $("#hum").html("Humidite : "+data.main.humidity)
       $("#ws").html("vent : "+data.wind.speed+" m/s")
       $("#lat").html("Latitude : "+data.coord.lat)
       $("#lon").html("Longitude : "+data.coord.lon)
       $("#city").html(data.name)
       $("#temp").html(Math.round(data.main.temp - 273.15));
       var iconcode = data.weather[0].icon;
       var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
       $('#wicon').attr('src', iconurl);
      })
    })
 })
