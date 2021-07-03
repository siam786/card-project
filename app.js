const panels = document.querySelectorAll(".panel");

console.log(panels[2]);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
      panel.classList.add('active')
  });
});
