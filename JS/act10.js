/* Universidad Tecnologia Metropolitana
Aplicaciones Web
Ing Ruth Betsaida Martinez
Practicas Parcial 2
2P_APW_Practica 1. DOM
Bautista Colli Carlos Elias
3 Cuatrimestre
3°C
Parcil 2
-->*/
document.getElementById('demo').innerHTML = "Fecha: " + new Date();
//Modifica la hora al español de españa
const fecha = new Date().toLocaleString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
});




