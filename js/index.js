function conversor() {

    const valor = parseInt(prompt("1) Ingrese un valor en pesos (ARS)."));
    const moneda = prompt("2) Seleccione: USD para dólar, EUR para euro, GBP para libra, BRL para real.").toLowerCase();

    // Cotizaciones
    const cotizacionUsd = 165.31; // Dólar
    const cotizacionEur = 176.50; // Euro
    const cotizacionGbp = 199.87; // Libra esterlina
    const cotizacionBrl = 6.54; // Real

    let resultado = 0;

    if ((valor > 0) && (moneda === "usd")) {
        resultado = valor * cotizacionUsd;
        alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionUsd);
        } else if ((valor > 0) && (moneda === "eur")) {
        resultado = valor * cotizacionEur;
        alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionEur);
        } else if ((valor > 0) && (moneda === "gbp")) {
        resultado = valor * cotizacionGbp;
        alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionGbp);
        } else if ((valor > 0) && (moneda === "brl")) {
        resultado = valor * cotizacionBrl;
        alert("El valor es ARS " + resultado + " a cotización oficial de " + cotizacionBrl);
        } else {
        alert("Por favor, ingrese un valor válido.");
        
    }
}

// Ejemplo de prueba

// const divisas = [
//     { nombre: "Dólar USD", codigo: "USD", cotizacion: 165.31 },
//     { nombre: "Euro", codigo: "EUR", cotizacion: 176.50 },
//     { nombre: "Libra", codigo: "GBP", cotizacion: 199.87 },
//     { nombre: "Real", codigo: "BRL", cotizacion: 6.54 },
// ]


