colourApp = {};

colourApp.apiUrl = 'http://thecolorapi.com/scheme';

const button = document.querySelector('button');


colourApp.getColour = (userInput) => {
    const proxyURL = new URL('http://thecolorapi.com/scheme')
    const url = new URL('http://proxy.hackeryou.com');
    url.search = new URLSearchParams({
        reqUrl: proxyURL,
        'params[hex]': userInput
    })
    fetch(url).then(res => {
        return res.json();
    }).then(res => {
        
        // const backgroundColour = res.colors[0].hex.value;
        const container = document.getElementById('container');
        container.innerHTML = '';
        // container.style.backgroundColor = backgroundColour;
        const colors = res.colors;
        for(const color of colors){
            console.log(color);
            const div = document.createElement('div');
            container.appendChild(div);
            const hexValue = color.hex.value;
            div.style.height = '100px';
            div.style.width = '100px';
            div.style.backgroundColor = hexValue;
    
        }
    })
}

colourApp.buttonEvent = () => {
button.addEventListener('click',function(event) {
    console.log('button clicked');
    event.preventDefault();
    // colourApp.getColour();
    // when button is clicked
    // fetch user colour choice from input from API
    const userInput = document.querySelector('input');
    console.log(userInput);
    const userHexCode = userInput.value;
    colourApp.getColour(userHexCode);
    // display user colour choice on the page
    });
}

colourApp.init = () => {
    console.log("running");
    colourApp.buttonEvent();
}

colourApp.init();