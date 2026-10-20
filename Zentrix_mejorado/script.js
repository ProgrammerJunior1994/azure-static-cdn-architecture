// Zentrix: interacciones pequeñas y seguras para el panel demostrativo.
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#current-year");
  const dateElement = document.querySelector("#current-date");
  const solutionMetric = document.querySelector("#metric-solutions");
  const focusMetric = document.querySelector("#metric-focus");
  const stageMetric = document.querySelector("#metric-stage");

  // Los valores se insertan como texto plano con textContent, no como HTML.
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  if (dateElement) {
    const now = new Date();
    dateElement.textContent = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "medium"
    }).format(now);
  }

  // Datos simulados para cumplir el propósito académico de la práctica.
  // No representan estadísticas reales de clientes ni sistemas conectados.
  const demoMetrics = {
    solutions: "06",
    focus: "A medida",
    stage: "En desarrollo"
  };

  if (solutionMetric) solutionMetric.textContent = demoMetrics.solutions;
  if (focusMetric) focusMetric.textContent = demoMetrics.focus;
  if (stageMetric) stageMetric.textContent = demoMetrics.stage;

  // Resalta el enlace de navegación correspondiente a la sección visible.
  const navLinks = document.querySelectorAll(".side-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
