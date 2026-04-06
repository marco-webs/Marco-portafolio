
// Año en footer
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp (ejemplo). Luego pondremos el número real y un texto pre-rellenado.
const phone = "34600000000"; // <-- Cambiar por el de Costita cuando lo confirme
const text = encodeURIComponent("Hola, he visto tu web y quiero pedir presupuesto. ¿Podemos hablar?");
const waUrl = `https://wa.me/${phone}?text=${text}`;

const waFloat = document.getElementById("waFloat");
const waLink = document.getElementById("waLink");

waFloat.href = waUrl;
waLink.href = waUrl;
