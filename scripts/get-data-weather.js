// Set country data values
const area = 2345409;
const population = 124388160;
const capital = "Kinshasa";
const languages = "French, Luba-Kasai, Swahili, ...";
const currency = "Congolese Franc (CDF)";
const timeZone = "UTC+1";
const code = "+243";
const tld = ".cd";

// Display Country Data
document.getElementById("countryArea").textContent = area.toLocaleString();
document.getElementById("countryPopulation").textContent = population.toLocaleString();
document.getElementById("countryCapital").textContent = capital;
document.getElementById("countryLanguage").textContent = languages;
document.getElementById("countryCurrency").textContent = currency;
document.getElementById("countryTimeZone").textContent = timeZone;
document.getElementById("countryCallingCode").textContent = code;
document.getElementById("countryTLD").textContent = tld;

// set weather data values
const temperature = 25;
const conditions = "Sunny";
const wind = 5;
let wcResult = "N/A"

// Calculate Wind Chill
function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * wind ** 0.16 + 0.3965 * temperature * wind ** 0.16;
}
if(temperature <=10 && wind>4.8){let windchill = calculateWindChill(temperature, wind);wcResult=windchill.toFixed(2).toString();}

// Display weather data
document.getElementById("kanangaTemperature").textContent = temperature.toString();
document.getElementById("kanangaConditions").textContent = conditions;
document.getElementById("kanangaWind").textContent = wind.toString();
document.getElementById("kanangaWindChill").textContent = wcResult;