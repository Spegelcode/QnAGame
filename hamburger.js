function toggleMenu () { 
  const navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("expanded")) {
    navLinks.classList.remove("expanded");
    navLinks.classList.add("collapsed");
  }else {
    navLinks.classList.remove("collapsed");
    navLinks.classList.add("expanded");
  }
}