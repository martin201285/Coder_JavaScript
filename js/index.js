// function conversor() {

//     const valor = parseInt(prompt("1) Ingrese un valor en pesos (ARS)."));
//     const moneda = prompt("2) Seleccione: USD para dólar, EUR para euro, GBP para libra, BRL para real.").toLowerCase();

//     // Cotizaciones
//     const cotizacionUsd = 165.31; // Dólar
//     const cotizacionEur = 176.50; // Euro
//     const cotizacionGbp = 199.87; // Libra esterlina
//     const cotizacionBrl = 6.54; // Real

//     let resultado = 0;

//     if ((valor > 0) && (moneda === "usd")) {
//         resultado = valor * cotizacionUsd;
//         alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionUsd);
//         } else if ((valor > 0) && (moneda === "eur")) {
//         resultado = valor * cotizacionEur;
//         alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionEur);
//         } else if ((valor > 0) && (moneda === "gbp")) {
//         resultado = valor * cotizacionGbp;
//         alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionGbp);
//         } else if ((valor > 0) && (moneda === "brl")) {
//         resultado = valor * cotizacionBrl;
//         alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionBrl);
//         } else {
//         alert("Por favor, ingrese un valor válido.");
        
//     }
// }


// CURRENCY RATES

const currencyRates = [
    { name: "ARS - Peso argentino", code: "ARS", country: "Peso argentino", rate: 1.00 },
    { name: "BRL - Real brasileño", code: "BRL", country: "Real brasileño",rate: 2.00 },
    { name: "CAD - Dólar canadiense", code: "CAD", country: "Dólar canadiense",rate: 3.00 },
    { name: "CHF - Franco suizo", code: "CHF", country: "Franco suizo",rate: 4.00 },
    { name: "CLP - Peso chileno", code: "CLP", country: "Peso chileno",rate: 5.00 },
    { name: "CNY - Yuan chino", code: "CNY", country: "Yuan chinoo",rate: 6.00 },
    { name: "COP - Peso colombiano", code: "COP", country: "Peso colombiano",rate: 7.00 },
    { name: "EUR - Euro", code: "EUR", country: "Euro",rate: 8.00 },
    { name: "GBP - Libra esterlina", code: "GBP", country: "Libra esterlina",rate: 9.00 },
    { name: "JPY - Yen japonés", code: "JPY", country: "Yen japonés",rate: 10.00 },
    { name: "MXN - Peso mexicano", code: "MXN", country: "Peso mexicano",rate: 11.00 },
    { name: "PEN - Sol perú", code: "PEN", country: "Sol perú",rate: 12.00 },
    { name: "RUB - Rublo ruso", code: "RUB", country: "Rublo ruso",rate: 13.00 },
    { name: "USD - Dólar estadounidense", code: "USD", country: "Dólar estadounidense",rate: 14.00 },
    { name: "UYU - Peso uruguayo", code: "UYU", country: "Peso uruguayo",rate: 15.00 },
    { name: "VES - Bolívar venezolano", code: "VES", country: "Bolívar venezolano",rate: 16.00 },
]

for (const currency of currencyRates) {
    console.log(currency.country);
}

// CAPTURE AUMONT FROM HTML

const aumont = document.getElementById("input");

// CAPTURE CURRENCY FROM HTML

const currencyOne = document.getElementById("currencyFrom");
const currencyTwo = document.getElementById("currencyTo");

// RESET BUTTON

function ClearAumont () {
    document.getElementById("input").value = "";
}




