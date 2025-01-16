function toggleMenu () { 
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("expended")) {
    navLinks.classList.remove("expended");
    navLinks.classList.add("collapsed");
  }else {
    navLinks.classList.remove("collapsed");
    navLinks.classList.add("expanded");
  }
}