let valor = parseInt(prompt("1) Ingrese un valor en pesos (ARS)."));
let moneda = prompt("2) Ingrese USD para convertir a dólar o EUR para convertir a euro.").toLowerCase();
let cotizacionUsd = 171.75;
let cotizacionEur = 176.50;

if ((valor > 0) && (moneda === "usd")) {
    valor = valor * cotizacionUsd
    alert("El valor es ARS " + valor + " a cotización oficial de " + cotizacionUsd);
} else if ((valor > 0) && (moneda === "eur")) {
    valor = valor * cotizacionEur
    alert("El valor es ARS " + valor + " a cotización oficial de " + cotizacionEur);
} else {
    alert("Por favor, ingrese un valor válido.")
}
