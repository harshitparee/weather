let input = document.querySelector(".input");
let button = document.querySelector('.search');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity_number = document.querySelector('.humi-number');
let wind_speed = document.querySelector('.wind-speed');
let weather_image = document.querySelector('.weather-image');

async function checkweather(city)
{
    let apikey = "3e4e68c54d87934208eb38b183052b7c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data.weather[0].main);
    temperature.innerHTML = Math.round(data.main.temp-273.15) + '<sup>°C</sup>';
    description.innerHTML = data.weather[0].main;
    wind_speed.innerHTML = data.wind.speed + "Km/H";
    humidity_number.innerHTML = data.main.humidity + "%";
    if(data.weather[0].main == 'Clouds')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGdzb0RDnMpNgH7to-0E5o49C13iIz0JeicelSW2_ddPNub4-1WRT58-Yr3Adwp7hXeo&usqp=CAU";
    }
    else if(data.weather[0].main == 'Haze')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQ6E1JzLYaExb4GRpXnmsOGfm-F3lYDGaR3BlxY9TXeRk8S1h9n5JZJ4PdTXm7pBLrdA&usqp=CAU";"";
    }
    else if(data.weather[0].main == 'Clear')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhvGpXQwo76npSw9CkKoCUXA5fG4A6FuUbuZZdPiciklzqs1hXaLIsighI_IGD73vf8g&usqp=CAU";
    }
    else if(data.weather[0].main == 'Rain')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CCZ1erjv0zJZlodcn6JLoBWtLjEigEsxs_rWSJnb7V9GKD9nLxkAMitgsE3QFRPzOR4&usqp=CAU";
    }
    else if(data.weather[0].main == 'Snowy')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNezhrl7g4wNbvTtttoiNZXkcs7e7TSJyXtQQ4zFgV99gICUAIMaDLPoe7m8seDwDBsWQ&usqp=CAU"
    }
    else if(data.weather[0].main == 'Smoke')
    {
        weather_image.src = "https://en.pimg.jp/083/184/625/1/83184625.jpg";
    }
    else if(data.weather[0].main == 'Mist')
    {
        weather_image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2n3yjqFJsTZsy38ZeHax-ffv7wX3g5lPD70nJ5cLrCnWGDt3zxGoaSYJCAHojeLcZXk&usqp=CAU";
    }
    input.addEventListener('click',()=>{
        if(input.value)
        {
            input.value = " ";
        }
    })
}

button.addEventListener('click',()=>{
    checkweather(input.value);
});