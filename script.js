// Declaring variable
const cloud = document.getElementById('couldId');
const search = document.getElementById('srch');
const image = document.getElementById('img');
const inpp = document.getElementById('input');


search.addEventListener('click',main);
inpp.addEventListener('keypress',function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    main();
}
});
function main(){
    const input = document.getElementById('input').value;
    const city = document.getElementById('cityId');
    city.innerHTML=input;
    console.log(input);
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+input;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c2c10ce21mshf118e900df2ebb4p1d682djsn825f9504ebbb',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(url , options).then(res=>res.json()).then(data=>myFunc(data));
    function myFunc(data){
        const temperature = document.getElementById('tempId');
        temperature.innerText=data.temp;
        const windSpeed = document.getElementById('wind');
        windSpeed.innerText=data.wind_speed;
        const humidity = document.getElementById('humidity');
        humidity.innerText = data.humidity;
        console.log(data);

    }
}
// Api part with fetch   

