//grap panel class
const panels = document.querySelectorAll(".panel");


panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClass()
    //add active class
      panel.classList.add('active')
  });
});

//write remove class
function removeActiveClass() { 
panels.forEach(panel =>{
  panel.classList.remove('active')
})
}