const colourApp = {};

colourApp.apiUrl = 'http://thecolorapi.com/scheme';

const button = document.querySelector('button');

colourApp.init = () => {
    colourApp.buttonEvent();
}

colourApp.getColour = (userSelection, userInput) => {
    const proxyURL = new URL('http://thecolorapi.com/scheme')
    const url = new URL('http://proxy.hackeryou.com');
    url.search = new URLSearchParams({
        reqUrl: proxyURL,
        'params[mode]': userSelection,
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
        for (const color of colors) {
            const colourPalette = document.createElement('p');
            container.appendChild(colourPalette);
            const hexValue = color.hex.value;
            colourPalette.style.height = '100px';
            colourPalette.style.width = '100px';
            colourPalette.style.backgroundColor = hexValue;
            colourPalette.textContent = hexValue;
        }
    })
}

colourApp.buttonEvent = () => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // colourApp.getColour();
        // when button is clicked
        // fetch user colour choice from input from API
        const userSelection = document.querySelector('#schemeMode');
        const userSchemeMode = userSelection.value;
        const userInput = document.querySelector('input');
        const userHexCode = userInput.value;
        colourApp.getColour(userSchemeMode, userHexCode);
        // display user colour choice on the page
    });
}


colourApp.init();