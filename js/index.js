// OBJECT: CURRENCIES (rate reference from: https://www.aduanaargentina.com/conversor-de-monedas/)

const currencies = [
    { code: "ARS", name: "ARS - Peso argentino", description: "Peso argentino", rate: 1.000000 },
    { code: "BRL", name: "BRL - Real brasileño", description: "Real brasileño", rate: 0.030879 },
    { code: "CAD", name: "CAD - Dólar canadiense", description: "Dólar canadiense", rate: 0.008076 },
    { code: "CHF", name: "CHF - Franco suizo", description: "Franco suizo", rate: 0.005558 },
    { code: "CLP", name: "CLP - Peso chileno", description: "Peso chileno", rate: 5.203710 },
    { code: "CNY", name: "CNY - Yuan chino", description: "Yuan chino", rate: 0.041151 },
    { code: "COP", name: "COP - Peso colombiano", description: "Peso colombiano", rate: 28.592900 },
    { code: "EUR", name: "EUR - Euro", description: "Euro", rate: 0.005620 },
    { code: "GBP", name: "GBP - Libra esterlina", description: "Libra esterlina", rate: 0.004846 },
    { code: "JPY", name: "JPY - Yen japonés", description: "Yen japonés", rate: 0.811129 },
    { code: "MXN", name: "MXN - Peso mexicano", description: "Peso mexicano", rate: 0.116769 },
    { code: "PEN", name: "PEN - Sol perú", description: "Sol perú", rate: 0.022839 },
    { code: "RUB", name: "RUB - Rublo ruso", description: "Rublo ruso", rate: 0.374138 },
    { code: "USD", name: "USD - Dólar estadounidense", description: "Dólar estadounidense", rate: 0.005901 },
    { code: "UYU", name: "UYU - Peso uruguayo", description: "Peso uruguayo", rate: 0.232026 },
    { code: "VES", name: "VES - Bolívar venezolano", description: "Bolívar venezolano", rate: 0.068435 },
]

// RECORRER OBJETO Y TRAER ELEMENTO NAME

let entradas = Object.entries(currencies);
// console.log(entradas);

let recorrer = entradas.map(function (elemento) {
    const codeValues = elemento[1].name;
    // console.log(codeValues);
});

// CONVERSOR FUNCTION

function userInputs() {
    // Capture user inputs: Amount, Currency From & Currency To
    let amount = parseInt(document.getElementById("input").value);
    const selectedValueFrom = document.getElementById("currencyFrom").value;
    const selectedValueTo = document.getElementById("currencyTo").value;

    // VARS
    let currencyFrom = "";
    let currencyTo = "";
    let rateTo = 0;
    let outputValue = 0;

    // Capture selected value for convert to currency code: from
    if (selectedValueFrom === "ARS - Peso argentino") {
        currencyFrom = "ARS";
    } else if (selectedValueFrom === "BRL - Real brasileño") {
        currencyFrom = "BRL";
    } else if (selectedValueFrom === "CAD - Dólar canadiense") {
        currencyFrom = "CAD";
    } else if (selectedValueFrom === "CHF - Franco suizo") {
        currencyFrom = "CHF";
    } else if (selectedValueFrom === "CLP - Peso chileno") {
        currencyFrom = "CLP";
    } else if (selectedValueFrom === "CNY - Yuan chino") {
        currencyFrom = "CNY";
    } else if (selectedValueFrom === "COP - Peso colombiano") {
        currencyFrom = "COP";
    } else if (selectedValueFrom === "EUR - Euro") {
        currencyFrom = "EUR";
    } else if (selectedValueFrom === "GBP - Libra esterlina") {
        currencyFrom = "GBP";
    } else if (selectedValueFrom === "JPY - Yen japonés") {
        currencyFrom = "JPY";
    } else if (selectedValueFrom === "MXN - Peso mexicano") {
        currencyFrom = "MXN";
    } else if (selectedValueFrom === "PEN - Sol perú") {
        currencyFrom = "PEN";
    } else if (selectedValueFrom === "RUB - Rublo ruso") {
        currencyFrom = "RUB";
    } else if (selectedValueFrom === "USD - Dólar estadounidense") {
        currencyFrom = "USD";
    } else if (selectedValueFrom === "UYU - Peso uruguayo") {
        currencyFrom = "UYU";
    } else if (selectedValueFrom === "VES - Bolívar venezolano") {
        currencyFrom = "VES";
    }

    // Capture selected value for convert to currency code: to, & convert
    if (selectedValueTo === "ARS - Peso argentino") {
        currencyTo = "ARS";
        rateTo = 1.000000;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "BRL - Real brasileño") {
        currencyTo = "BRL";
        rateTo = 0.008076;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "CAD - Dólar canadiense") {
        currencyTo = "CAD";
        rateTo = 0.008076;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "CHF - Franco suizo") {
        currencyTo = "CHF";
        rateTo = 0.005558;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "CLP - Peso chileno") {
        currencyTo = "CLP";
        rateTo = 5.203710;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "CNY - Yuan chino") {
        currencyTo = "CNY";
        rateTo = 0.041151;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "COP - Peso colombiano") {
        currencyTo = "COP";
        rateTo = 28.592900;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "EUR - Euro") {
        currencyTo = "EUR";
        rateTo = 0.005620;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "GBP - Libra esterlina") {
        currencyTo = "GBP";
        rateTo = 0.004846;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "JPY - Yen japonés") {
        currencyTo = "JPY";
        rateTo = 0.811129;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "MXN - Peso mexicano") {
        currencyTo = "MXN";
        rateTo = 0.116769;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "PEN - Sol perú") {
        currencyTo = "PEN";
        rateTo = 0.022839;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "RUB - Rublo ruso") {
        currencyTo = "RUB";
        rateTo = 0.374138;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "USD - Dólar estadounidense") {
        currencyTo = "USD";
        rateTo = 0.005901;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "UYU - Peso uruguayo") {
        currencyTo = "UYU";
        rateTo = 0.232026;
        outputValue = amount * rateTo;
    } else if (selectedValueTo === "VES - Bolívar venezolano") {
        currencyTo = "VES";
        rateTo = 0.068435;
        outputValue = amount * rateTo;
    }

    // Put inputs values in HTML: <p> tag (id "rate")
    let pR = document.getElementById("rate");
    pR.innerText = "1 " + `${currencyFrom}` + " = " + `${rateTo}` + " " + `${currencyTo}`;

    // Put inputs values in HTML: <p> tag (id "output")
    let pO = document.getElementById("output");
    pO.innerText = currencyTo + " " + outputValue.toFixed(2);

    // for test:
    // console.log("Amount: " + amount);
    // console.log("From Currency: " + selectedValueFrom);
    // console.log("To Currency: " + selectedValueTo);
    // console.log("Output Value: " + currencyTo + " " + outputValue.toFixed(2));
}

// DINAMIC LIST FOR CURRENCY SELECTION

// Capture Currencies: From & To Tags

const currencyFromTag = document.getElementById("currencyFrom");
const currencyToTag = document.getElementById("currencyTo");

// From Currency Option List
// (Por el momento la deshabilité para que solo sea de pesos argentinos hacia otras monedas. No sé por el momento como hacer la conversión en ambos sentidos para distintas monedas)

// currencies.forEach(currency => {
//     let option = document.createElement("option");
//     option.innerHTML = `<option>${currency.name}</option>`;

//     // Add to list
//     currencyFromTag.append(option);
// })


// To Currency Option List

currencies.forEach(currency => {
    let option = document.createElement("option");
    option.innerHTML = `<option>${currency.name}</option>`;

    // Add to list
    currencyToTag.append(option);
})


// RESET BUTTON ON INPUT FIELD

function ClearAmount () {
    document.getElementById("input").value = "";
    let p = document.getElementById("output");
    p.innerText = "0.00";
}


// CONVERSOR TEST BUTTON AND FUNCTION W/PROMPTS AND ALERTS (FIRST CONVERSOR)

function conversor() {

    const value = parseInt(prompt("1) Ingrese un valor en pesos (ARS)."));
    const moneda = prompt("2) Seleccione: USD para dólar, EUR para euro, GBP para libra, BRL para real.").toLowerCase();

    // Cotizaciones
    const cotizacionUsd = 165.31; // Dólar
    const cotizacionEur = 176.50; // Euro
    const cotizacionGbp = 199.87; // Libra esterlina
    const cotizacionBrl = 6.54; // Real

    let result = 0;

    if ((value > 0) && (moneda === "usd")) {
        result = value * cotizacionUsd;
        alert("El valor es ARS " + result + " a cotización oficial de " + cotizacionUsd);
        } else if ((value > 0) && (moneda === "eur")) {
        result = value * cotizacionEur;
        alert("El valor es ARS " + result + " a cotización oficial de " + cotizacionEur);
        } else if ((value > 0) && (moneda === "gbp")) {
        result = value * cotizacionGbp;
        alert("El valor es ARS " + result + " a cotización oficial de " + cotizacionGbp);
        } else if ((value > 0) && (moneda === "brl")) {
        result = value * cotizacionBrl;
        alert("El valor es ARS " + result + " a cotización oficial de " + cotizacionBrl);
        } else {
        alert("Por favor, ingrese un valor válido.");
        
    }
}

// CONSTRUCTOR: CURRENCY (Sin uso para esta entrega)

// class Currency {
//     constructor(info) {
//         this.code = info.code;
//         this.name = info.name;
//         this.description = info.description;
//         this.rate = info.rate;
//     }
// }

