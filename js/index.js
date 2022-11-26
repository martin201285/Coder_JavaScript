function conversor() {

    let valor = parseInt(prompt("1) Ingrese un valor en pesos (ARS)."));
    let moneda = prompt("2) Seleccione: USD para dólar, EUR para euro, GBP para libra, BRL para real.").toLowerCase();

    // Cotizaciones
    let cotizacionUsd = 165.31; // Dólar
    let cotizacionEur = 176.50; // Euro
    let cotizacionGbp = 199.87; // Libra esterlina
    let cotizacionBrl = 6.54; // Real

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

conversor();