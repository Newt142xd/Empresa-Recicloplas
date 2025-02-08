document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const arrows = document.querySelectorAll(".arrow");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (event) {
      event.preventDefault();
      const submenu = this.parentElement.nextElementSibling;
      submenu.classList.toggle("show");
      this.classList.toggle("open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove("show");
      document.querySelectorAll(".menu ul").forEach((submenu) => {
        submenu.classList.remove("show");
      });
      document.querySelectorAll(".arrow").forEach((arrow) => {
        arrow.classList.remove("open");
      });
    }
  });
});

// Alternar barra lateral
function toggleChat() {
  const sidebar = document.getElementById("whatsappSidebar");
  sidebar.style.right = sidebar.style.right === "0px" ? "-300px" : "0px";
}

// Abrir chat en WhatsApp
function startChat() {
  window.open("https://wa.me/+573209748962", "_blank");
}

// Mostrar modal informativo
function showInfo() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "flex";
}

// Cerrar modal informativo
function closeInfo() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "none";
}
