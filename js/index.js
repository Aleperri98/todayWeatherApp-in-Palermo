import {cities, lang} from "./utils.js";
const inputSelect = document.querySelector(".inputSelect");
const citySelect = document.querySelector("#selectCity");
const render = (container, content) => (container.innerHTML = content);


//I ADD OPTION VALUES TO THE CITY SELECT ELEMENT FROM ARRAY CITIES ON UTILS.JS

function loadCity() {
    selectCity.innerHTML = cities.reduce((options, {name,value})=>
    options+=`<option value="${value}">${name}</option>`);
}

document.addEventListener("DOMContentLoaded", loadCity);



//I ADD OPTION VALUES TO THE LANGUAGE SELECT ELEMENT FROM ARRAY LANG ON UTILS.JS
function loadLanguage() {
    selectLang.innerHTML = lang.reduce((options, {name,value})=>
    options+=`<option value="${value}">${name}</option>"`);
}



//AT THE CHANGE EVENT OF THE SELECT (CITY) I APPEND ANOTHER SELECT TO CHOOSE THE LANGUAGE
citySelect.addEventListener('change', ()=>{
    const selectLang = document.createElement("select");
    selectLang.setAttribute("id", "selectLang");
    inputSelect.appendChild(selectLang);

    // DISABLED THE FIRT SELECT ELEMENT (CITY), SO THE USER CANNOT APPEND ANOTHER LANGUAGE SELECT
    citySelect.disabled = true;

    loadLanguage();

    //I TAKE THE CITY VALUE THAT THE USER HAS ENTERED
    let cityValue = citySelect.value;
    
    // I DECLARE THE LANG SELECT ELEMENT AND TAKE THE LANG VALUE THAT USER HAS ENTERED
    const selectLangInput = document.querySelector("#selectLang");
    selectLangInput.addEventListener('change', () =>{
        let langValue = selectLangInput.value;

        // I CONCAT THE ELEMENTS OF API URL
        let apiUrl ='https://api.openweathermap.org/data/2.5/weather?q='+ cityValue +'&appid=9b382578f78572b78aaeb4a31933a917&lang=' + langValue;
        
        // I ACTIVE THE ELEMET TO SELECT THE CITY, SO IF USER WANT IT CAN DO ANOTHER RESEARCH
        citySelect.disabled = false;
        
        // REMOVE THE LANG SELECT, IT WILL APPEAR WHEN USER CHOOSE THE CITY
        inputSelect.removeChild(selectLangInput);
        
        // I SET THE LOCAL STORAGE TO HOLD LANGUAGE VALUE
        localStorage.setItem('lang', langValue);

        // I SET TRY TO HANDLING ERRORS 
        try {

        // I DO A FETCH TO TAKE THE DATA FROM EXTERNAL SERVER
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => list(data));

        //I DECLARE THE VALUE WHERE I'LL FIND THE LANG VALUE OF LOCAL STORAGE
        const getLang = localStorage.getItem('lang');


// I DO A SWITCH TO DIFFERENCE THE LANGUAGE AND TO RENDER IN DIFFERENT LANGUAGE WITH array.MAP AND THE TEMPLATE STRING
// I DECLARE A NER ARRAY BECAUSE .MAP IS AN ARRAY METHOD, DATA IS AN OBJECT. I PUSH DATA INTO ARRAYDATA TO DO A .MAP.
switch (getLang){
    case "it":
        var list = (data) => {
            let arrayData = [];
            arrayData.push(data);
            const elements = arrayData
            .map(item =>`<h3>${item.name}</h3>
            <sup>${item.coord.lat}°N ${item.coord.lon}°E</sup>
            <p><img src="https://img.icons8.com/plasticine/100/000000/apple-weather.png"/>Il meteo oggi prevede ${item.weather[0].description}.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/storm.png"/>Le nuvole sono al ${item.clouds.all}%.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/windsock.png"/>La velocità del vento è ${item.wind.speed}m/s</p>
            `)
            .join ('');
        

            const container = document.querySelector(".container");
        
            render(container,
                `<h2 id="subtitle">Your weather forecast today!</h2>
                <div id="cardWeather">${elements}</div>`);
            }
        break;

    case "en":
        var list = (data) => {
            let arrayData = [];
            arrayData.push(data);
            const elements = arrayData
            .map(item =>`<h3>${item.name}</h3>
            <sup>${item.coord.lat}°N ${item.coord.lon}°E</sup>
            <p><img src="https://img.icons8.com/plasticine/100/000000/apple-weather.png"/>The weather forecast today ${item.weather[0].description}.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/storm.png"/>The clouds are at ${item.clouds.all}%.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/windsock.png"/>Wind speed is ${item.wind.speed}m/s</p>
            `)
            .join ('');
        
            const container = document.querySelector(".container");
        
            render(container,
                `<h2 id="subtitle">Your weather forecast today!</h2>
                <div id="cardWeather">${elements}</div>`);
        }
        break;

        case "fr":
            var list = (data) => {
                let arrayData = [];
                arrayData.push(data);
                const elements = arrayData
                .map(item =>`<h3>${item.name}</h3>
                <sup>${item.coord.lat}°N ${item.coord.lon}°E</sup>
                <p><img src="https://img.icons8.com/plasticine/100/000000/apple-weather.png"/>La météo d'aujourd'hui ${item.weather[0].description}.</p>
                <p><img src="https://img.icons8.com/clouds/100/000000/storm.png"/>Les nuages ​​sont al ${item.clouds.all}%.</p>
                <p><img src="https://img.icons8.com/clouds/100/000000/windsock.png"/>La vitesse du vent est ${item.wind.speed}m/s</p>
                `)
                .join ('');
            
                const container = document.querySelector(".container");
            
                render(container,
                    `<h2 id="subtitle">Your weather forecast today!</h2>
                    <div id="cardWeather">${elements}</div>`);
            }
            break;

    case "es":
        var list = (data) => {
            let arrayData = [];
            arrayData.push(data);
            const elements = arrayData
            .map(item =>`<h3>${item.name}</h3>
            <sup>${item.coord.lat}°N ${item.coord.lon}°E</sup>
            <p><img src="https://img.icons8.com/plasticine/100/000000/apple-weather.png"/>El pronóstico del tiempo hoy ${item.weather[0].description}.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/storm.png"/>Las nubes son todas ${item.clouds.all}%.</p>
            <p><img src="https://img.icons8.com/clouds/100/000000/windsock.png"/>La velocidad del viento es ${item.wind.speed}m/s</p>
            `)
            .join ('');
        
            const container = document.querySelector(".container");
        
            render(container,
                `<h2 id="subtitle">Your weather forecast today!</h2>
                <div id="cardWeather">${elements}</div>`);
        }
        break;
};

// I DEFINE THE STATEMENT THROW (FOR TRY AND CATCH)
if (cityValue == false || cityValue == null ) { throw "city"; }
if (langValue == false || langValue == null ) { throw "language"; }
}
// I CATCH THE ERROR AND I DEFINE WHAT TO DO IN CASE OF ERROR
catch(err) {
         alert ("Please enter your favorite " + err + "!");
}
    });
 
});





