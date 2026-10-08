document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const WHATSAPP_NUMBER = "573025221040";

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get("nombre") || "";
  const empresa = data.get("empresa") || "";
  const correo = data.get("correo") || "";
  const telefono = data.get("telefono") || "";
  const mensaje = data.get("mensaje") || "";

  const lineas = [
    `Hola, soy ${nombre}.`,
    empresa && `Empresa: ${empresa}`,
    correo && `Correo: ${correo}`,
    telefono && `Teléfono: ${telefono}`,
    mensaje && `Mensaje: ${mensaje}`,
  ].filter(Boolean);

  const texto = encodeURIComponent(lineas.join("\n"));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");

  formNote.textContent = "Te estamos llevando a WhatsApp para enviar tu solicitud...";
  form.reset();
});
