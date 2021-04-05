const navigationMobileButton = document.querySelector('.navigation__menuButton');
const navigationMobile = document.querySelector(".navigationMobile");
const navigation = document.querySelector(".navigation")
let activeMobileMenu = false;

navigationMobileButton.addEventListener('click', () => {
  if(!activeMobileMenu) {
    navigationMobileButton.classList.add('activeMobileNavigation');
    activeMobileMenu = true;
    navigationMobile.style.left = "0vw"
  } else {
    navigationMobileButton.classList.remove('activeMobileNavigation');
    activeMobileMenu = false;
    navigationMobile.style.left = "-80vw"
  }
}); 

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 150) {
        navigation.classList.add("navigation__scroll")
    } else if(window.pageYOffset < 150) {
        navigation.classList.remove("navigation__scroll")
    }
})

