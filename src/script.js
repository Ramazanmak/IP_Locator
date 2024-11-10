
const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button')

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);


function getData(){
    // checking data
    console.log('Hello!')
    fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=a73be4a19e0d4640b02ff43d21721e6a&${ipInput.value}`)
        .then(response => response.json())
        .then(console.log);
}

function handleKey(e){
    if (e.key == 'Enter'){
        getData()
    }
}