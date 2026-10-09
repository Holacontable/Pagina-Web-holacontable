document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
  });
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const fields = [
    ["Nombre", data.get("nombre")],
    ["Empresa", data.get("empresa")],
    ["Correo", data.get("correo")],
    ["Teléfono", data.get("telefono")],
    ["Mensaje", data.get("mensaje")]
  ].filter(([, value]) => String(value || "").trim());
  const message = "Hola HolaContable, quiero solicitar información sobre sus servicios.%0A%0A" +
    fields.map(([label, value]) => `${label}: ${String(value).trim()}`).join("%0A");
  formNote.textContent = "Se abrirá WhatsApp para que revises y envíes tu solicitud.";
  window.open(`https://wa.me/573025221040?text=${message}`, "_blank", "noopener,noreferrer");
});
