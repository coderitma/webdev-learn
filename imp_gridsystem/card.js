const panelContainers = document.querySelectorAll(".panel-container");

panelContainers.forEach((container) => {
  if (container.id) {
    const panels = document.querySelectorAll(`#${container.id} > .panel`);
    panels.forEach((panel) => {
      panel.addEventListener("click", (e) => {
        removeActiveClasses();
        panel.classList.add("active", "radius");
      });
    });
    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };
  }
});
