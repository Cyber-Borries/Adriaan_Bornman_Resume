const homepageLeftElement = document.getElementById("mainLeft");
const homepageRightElement = document.getElementById("mainRight");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-item-link")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//jquery function to grow mainLeft on mouse enter (hover)

//jquery function to change styling on mainRight on mouse enter (hover)
