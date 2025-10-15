// navbar al hacer scroll
window.addEventListener('scroll',function(){
  const navbar = document.querySelector('.navbar')
  if(window.scrollY>50){
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})
 // scroll suave al hacer click en enlaces
document.querySelectorAll('a.nav-link').forEach((link) => {
  link.addEventListener('click',function(e){
    if(this.hash !==''){
      const target = document.querySelector(this.hash)
      target.scrollIntoView({behavior:'smooth'})
    }
  })
 });
 // animacion reveal con intersectioonObserver

  // Esperar a que el contenido cargue antes de iniciar el observador
  document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los elementos que tengan la clase 'reveal'
    const reveals = document.querySelectorAll(".reveal");

    // Crea un observador con un margen de visibilidad del 15%
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Si el elemento es visible en el viewport...
        if (entry.isIntersecting) {
          // Agrega la clase 'active' para activar la animación CSS
          entry.target.classList.add("active");
          // Deja de observar este elemento (para que no se repita la animación)
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 }); // 15% visible

    // Asocia el observador a cada elemento con la clase 'reveal'
    reveals.forEach(el => observer.observe(el));
  });

 // cerrar navbar automaticamente despues de elegir una en mobile
 document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    bsCollapse.hide(); // Cierra el menú
  });
}); 

// Copiar email con tooltip y animación
document.addEventListener("DOMContentLoaded", () => {
  const copyBtns = document.querySelectorAll(".copyEmailBtn");
  const email = "tomasdelrio.dev@gmail.com";

  // Inicializar tooltips de Bootstrap
  const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

  copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        const icon = copyBtn.querySelector("i");
        icon.classList.remove("fa-copy");
        icon.classList.add("fa-check");
        copyBtn.classList.add("btn-success");

        // Cambiar tooltip a "Copiado!"
        const tooltip = bootstrap.Tooltip.getInstance(copyBtn);
        tooltip.setContent({ '.tooltip-inner': 'Copiado!' });
        tooltip.show();

        setTimeout(() => {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-copy");
          copyBtn.classList.remove("btn-success");
          tooltip.setContent({ '.tooltip-inner': 'Copiar email' });
        }, 2000);
      });
    });
  });
});