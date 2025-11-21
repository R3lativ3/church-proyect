// Maneja el estado del sidebar (toggle, overlay y autocierre en móvil)
(function () {
  // Referencias clave
  const toggleBtns = document.querySelectorAll(".sidebar-toggle, .sidebar-close");
  const overlay = document.querySelector(".sidebar-overlay");
  const body = document.body;
  const STORAGE_KEY = "sidebar-collapsed";
  const COLLAPSED_CLASS = "sidebar-collapsed";
  const navItems = document.querySelectorAll(".sidebar .nav-item, .sidebar .nav-link");

  if (!toggleBtns.length) return;

  // Aplica o quita la clase de colapsado y sincroniza aria + overlay móvil
  const setState = (collapsed) => {
    body.classList.toggle(COLLAPSED_CLASS, collapsed);
    toggleBtns.forEach((btn) =>
      btn.setAttribute("aria-expanded", (!collapsed).toString())
    );
    if (overlay) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      overlay.classList.toggle("visible", !collapsed && isMobile);
    }
  };

  // Inicializa estado con localStorage (por defecto: expandido)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    setState(saved === "true");
  } else {
    setState(false);
  }

  // Click en botones de toggle (hamburguesa o cerrar)
  toggleBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      const collapsed = !body.classList.contains(COLLAPSED_CLASS);
      setState(collapsed);
      localStorage.setItem(STORAGE_KEY, collapsed);
    })
  );

  if (overlay) {
    overlay.addEventListener("click", () => {
      setState(true);
      localStorage.setItem(STORAGE_KEY, true);
    });
  }

  // Al hacer click en cualquier link del sidebar en móvil, cierra el panel
  navItems.forEach((item) =>
    item.addEventListener("click", () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        setState(true);
        localStorage.setItem(STORAGE_KEY, true);
      }
    })
  );
})();
