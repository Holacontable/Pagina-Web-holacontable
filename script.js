    // Menú adaptable para celulares
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));

    // Animaciones discretas al desplazarse
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Precarga el servicio seleccionado cuando alguien pulsa una tarjeta
    document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
      const select = document.getElementById('servicio');
      select.value = link.dataset.service;
    }));

    // Formulario: arma el mensaje y lo envía directo por WhatsApp, sin pasar por correo.
    const WHATSAPP_NUMBER = '573025221040';
    document.getElementById('contactForm').addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const lineas = [
        'Hola Holacontable, quiero información sobre sus servicios.',
        'Nombre: ' + data.get('nombre'),
        'Correo: ' + data.get('correo'),
        'Teléfono: ' + (data.get('telefono') || 'No indicado'),
        'Servicio: ' + (data.get('servicio') || 'No seleccionado'),
        '',
        'Mensaje: ' + data.get('mensaje')
      ];
      const texto = encodeURIComponent(lineas.join('\n'));
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + texto, '_blank');
      event.currentTarget.reset();
    });
    // Cabecera: fondo sólido al desplazarse
const siteHeader = document.getElementById('siteHeader')
const onScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 40)
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()
document.getElementById('year').textContent = new Date().getFullYear();
  