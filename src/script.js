import { validateIp } from "./helpers";
import {load} from "@2gis/mapgl";

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button')

const idInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const isp = document.querySelector('#isp');

const mapContainer = document.querySelector('#map')

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);


function getData(){
    // checking data
    if (validateIp(ipInput.value)){
        console.log('Hello!')
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_xtyj2jQEjBLEdQgJvM4vCtonDYkNF&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(showInfo);
    }
}

function handleKey(e){
    if (e.key == 'Enter'){
        getData()
    }
}

function showInfo(data){
    console.log(data)
    const {lat, lng, country, region, timezone} = data.location;
    idInfo.innerText = data.ip;
    locationInfo.innerText = country +' '+ region;
    timezoneInfo.innerText = timezone;
    isp.innerText = data.isp;

    buildMap(lat,lng)
}

function buildMap(lat,lng){
    mapContainer.innerHTML = '';
    load().then((mapglAPI) => {
        let map = new mapglAPI.Map('map', {
            center: [lng, lat],
            zoom: 9,
            key: 'aa3f5fd5-12cf-46ca-8ec4-d9f90a974239',
        })
        marker = new mapgl.Marker(map,{
            coordinates: [lng, lat],
        })
    })
}
