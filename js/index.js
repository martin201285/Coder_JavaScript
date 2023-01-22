// OBJECT: CURRENCIES (rate reference from: https://www.aduanaargentina.com/conversor-de-monedas/)

const currencies = [
    { code: "ARS", name: "ARS - Peso argentino", description: "Peso argentino", rate: 1.000000, img: "./img/icon_argentina.png", alt: "Image of Argentina Flag" },
    { code: "BRL", name: "BRL - Real brasileño", description: "Real brasileño", rate: 0.028400, img: "./img/icon_brazil.png", alt: "Image of Brazil Flag" },
    { code: "CAD", name: "CAD - Dólar canadiense", description: "Dólar canadiense", rate: 0.007390, img: "./img/icon_canada.png", alt: "Image of Canada Flag" },
    { code: "CHF", name: "CHF - Franco suizo", description: "Franco suizo", rate: 0.005010, img: "./img/icon_switzerland.png", alt: "Image of Switzerland Flag" },
    { code: "CLP", name: "CLP - Peso chileno", description: "Peso chileno", rate: 4.510000, img: "./img/icon_chile.png", alt: "Image of Chile Flag" },
    { code: "CNY", name: "CNY - Yuan chino", description: "Yuan chino", rate: 0.037100, img: "./img/icon_china.png", alt: "Image of China Flag" },
    { code: "COP", name: "COP - Peso colombiano", description: "Peso colombiano", rate: 25.760000, img: "./img/icon_colombia.png", alt: "Image of Colombia Flag" },
    { code: "EUR", name: "EUR - Euro", description: "Euro", rate: 0.005060, img: "./img/icon_euro.png", alt: "Image of Euro Flag" },
    { code: "GBP", name: "GBP - Libra esterlina", description: "Libra esterlina", rate: 0.004430, img: "./img/icon_united-kingdom.png", alt: "Image of United Kingdom Flag" },
    { code: "JPY", name: "JPY - Yen japonés", description: "Yen japonés", rate: 0.701000, img: "./img/icon_japan.png", alt: "Image of Japan Flag" },
    { code: "MXN", name: "MXN - Peso mexicano", description: "Peso mexicano", rate: 0.104000, img: "./img/icon_mexico.png", alt: "Image of Mexico Flag" },
    { code: "PEN", name: "PEN - Sol perú", description: "Sol perú", rate: 0.021000, img: "./img/icon_peru.png", alt: "Image of Peru Flag" },
    { code: "RUB", name: "RUB - Rublo ruso", description: "Rublo ruso", rate: 0.376000, img: "./img/icon_rusia.png", alt: "Image of Rusia Flag" },
    { code: "USD", name: "USD - Dólar estadounidense", description: "Dólar estadounidense", rate: 0.005480, img: "./img/icon_united-states.png", alt: "Image of United States Flag" },
    { code: "UYU", name: "UYU - Peso uruguayo", description: "Peso uruguayo", rate: 0.217000, img: "./img/icon_uruguay.png", alt: "Image of Uruguay Flag" },
    { code: "VES", name: "VES - Bolívar venezolano", description: "Bolívar venezolano", rate: 0.112000, img: "./img/icon_venezuela.png", alt: "Image of Venezuela Flag" },
]

// ADD CURRENCIES OBJECT TO LOCAL STORAGE

localStorage.setItem("currencies",JSON.stringify(currencies));

// GET OBJECT CURRENCIES FROM LOCAL STORAGE

let recoverObjectFromStorage = JSON.parse(localStorage.getItem("currencies"));
// console.log(recoverObjectFromStorage);

// MAP OBJECT AND GET "NAME" VALUE

let entradas = Object.entries(recoverObjectFromStorage);
// console.log(entradas);

let recorrer = entradas.map(function (elemento) {
    const codeValues = elemento[1].name;
    // console.log(codeValues);
});

// DINAMIC LIST FOR CURRENCY SELECTION

// Capture Currencies: From & To Tags

const currencyFromTag = document.getElementById("currencyFrom");
const currencyToTag = document.getElementById("currencyTo");

// From Currency Option List

currencies.forEach(currency => {
    let option = document.createElement("option");
    option.innerHTML = `<option>${currency.code}</option>`;

    // Add to list
    currencyFromTag.append(option);
})


// To Currency Option List

currencies.forEach(currency => {
    let option = document.createElement("option");
    option.innerHTML = `<option>${currency.code}</option>`;

    // Add to list
    currencyToTag.append(option);
})

// CONVERSOR

const monedaEl_one = document.getElementById("currencyFrom");
const monedaEl_two = document.getElementById("currencyTo");
const cantidadEl_one = document.getElementById("input");
const tazaEl = document.getElementById("rate");
const cantidadEl_two = document.getElementById("output");

// Fetch w/API
function calculate(){

    const monedaOne = monedaEl_one.value;
    const monedaTwo = monedaEl_two.value;

    console.log(monedaOne);
    console.log(monedaTwo);

    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOne}`)
    .then(res => res.json())
    .then(data => {
        const taza = data.rates[monedaTwo];
        console.log(taza);

        // Add rates values in HTML
        tazaEl.innerText = `1 ${monedaOne} = ${taza} ${monedaTwo}`;

        // Add output value in HTML
        outputValue = (cantidadEl_one.value * taza).toFixed(2);
        cantidadEl_two.innerHTML = `$ ${outputValue}`;

    });
}

// Events
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);


// DINAMIC ROWS FOR RATES TABLE

const addRows = document.getElementById("cotizaciones__table");

currencies.forEach(currency => {
    let row = document.createElement("tr");
    
    // HTML Code for rows
    row.innerHTML =
    `<td class="tableFlag"><img class="countryFlag" src="${currency.img}" alt="${currency.alt}">${currency.code}</td>
    <td>${currency.description}</td>
    <td class="currencyRate">${currency.rate}</td>`;

    // Add to table
    addRows.append(row);
});

// RESET BUTTON ON INPUT FIELD

function clearAmount() {
    document.getElementById("input").value = "";
    let p = document.getElementById("output");
    p.innerText = "0.00";
}

const clearButton = document.getElementById("button");
clearButton.addEventListener("click", clearAmount);

// SCROLL UP FUNCTION

function scrollUp(pxScreen){
    window.addEventListener('scroll', () => {
        let scroll  = document.documentElement.scrollTop;
        let upButton = document.getElementById('upButton');

        if(scroll > pxScreen){
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    })
}

scrollUp(100);

// SWEETALERT ON OLD CONVERSOR BUTTON

oldConversor.addEventListener('click', () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Old Conversor is no longer available.'
      })
})


// CONVERSOR FUNCTION (2nd VERSION) - Reemplazado por API para la entrega final

// function userInputs() {
    // Capture user inputs: Amount, Currency From & Currency To
    // let amount = parseInt(document.getElementById("input").value);
    // const selectedValueFrom = document.getElementById("currencyFrom").value;
    // const selectedValueTo = document.getElementById("currencyTo").value;

    // VARS
    // let currencyFrom = "";
    // let currencyTo = "";
    // let rateTo = 0;
    // let outputValue = 0;

    // Capture selected value for convert to currency code: from
    // if (selectedValueFrom === "ARS - Peso argentino") {
    //     currencyFrom = "ARS";
    // } else if (selectedValueFrom === "BRL - Real brasileño") {
    //     currencyFrom = "BRL";
    // } else if (selectedValueFrom === "CAD - Dólar canadiense") {
    //     currencyFrom = "CAD";
    // } else if (selectedValueFrom === "CHF - Franco suizo") {
    //     currencyFrom = "CHF";
    // } else if (selectedValueFrom === "CLP - Peso chileno") {
    //     currencyFrom = "CLP";
    // } else if (selectedValueFrom === "CNY - Yuan chino") {
    //     currencyFrom = "CNY";
    // } else if (selectedValueFrom === "COP - Peso colombiano") {
    //     currencyFrom = "COP";
    // } else if (selectedValueFrom === "EUR - Euro") {
    //     currencyFrom = "EUR";
    // } else if (selectedValueFrom === "GBP - Libra esterlina") {
    //     currencyFrom = "GBP";
    // } else if (selectedValueFrom === "JPY - Yen japonés") {
    //     currencyFrom = "JPY";
    // } else if (selectedValueFrom === "MXN - Peso mexicano") {
    //     currencyFrom = "MXN";
    // } else if (selectedValueFrom === "PEN - Sol perú") {
    //     currencyFrom = "PEN";
    // } else if (selectedValueFrom === "RUB - Rublo ruso") {
    //     currencyFrom = "RUB";
    // } else if (selectedValueFrom === "USD - Dólar estadounidense") {
    //     currencyFrom = "USD";
    // } else if (selectedValueFrom === "UYU - Peso uruguayo") {
    //     currencyFrom = "UYU";
    // } else if (selectedValueFrom === "VES - Bolívar venezolano") {
    //     currencyFrom = "VES";
    // }

    // Capture selected value for convert to currency code: to, & convert
    // if (selectedValueTo === "ARS - Peso argentino") {
    //     currencyTo = "ARS";
    //     rateTo = 1.000000;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "BRL - Real brasileño") {
    //     currencyTo = "BRL";
    //     rateTo = 0.008076;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "CAD - Dólar canadiense") {
    //     currencyTo = "CAD";
    //     rateTo = 0.008076;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "CHF - Franco suizo") {
    //     currencyTo = "CHF";
    //     rateTo = 0.005558;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "CLP - Peso chileno") {
    //     currencyTo = "CLP";
    //     rateTo = 5.203710;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "CNY - Yuan chino") {
    //     currencyTo = "CNY";
    //     rateTo = 0.041151;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "COP - Peso colombiano") {
    //     currencyTo = "COP";
    //     rateTo = 28.592900;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "EUR - Euro") {
    //     currencyTo = "EUR";
    //     rateTo = 0.005620;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "GBP - Libra esterlina") {
    //     currencyTo = "GBP";
    //     rateTo = 0.004846;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "JPY - Yen japonés") {
    //     currencyTo = "JPY";
    //     rateTo = 0.811129;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "MXN - Peso mexicano") {
    //     currencyTo = "MXN";
    //     rateTo = 0.116769;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "PEN - Sol perú") {
    //     currencyTo = "PEN";
    //     rateTo = 0.022839;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "RUB - Rublo ruso") {
    //     currencyTo = "RUB";
    //     rateTo = 0.374138;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "USD - Dólar estadounidense") {
    //     currencyTo = "USD";
    //     rateTo = 0.005901;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "UYU - Peso uruguayo") {
    //     currencyTo = "UYU";
    //     rateTo = 0.232026;
    //     outputValue = amount * rateTo;
    // } else if (selectedValueTo === "VES - Bolívar venezolano") {
    //     currencyTo = "VES";
    //     rateTo = 0.068435;
    //     outputValue = amount * rateTo;
    // }

    // Put inputs values in HTML: <p> tag (id "rate")
    // let pR = document.getElementById("rate");
    // pR.innerText = "1 " + `${currencyFrom}` + " = " + `${rateTo}` + " " + `${currencyTo}`;

    // Put inputs values in HTML: <p> tag (id "output")
    // let pO = document.getElementById("output");
    // pO.innerText = currencyTo + " " + outputValue.toFixed(2);

    // for test:
    // console.log("Amount: " + amount);
    // console.log("From Currency: " + selectedValueFrom);
    // console.log("To Currency: " + selectedValueTo);
    // console.log("Output Value: " + currencyTo + " " + outputValue.toFixed(2));
    