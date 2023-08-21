export function header() {
  let headerButton = document.querySelector(".header-menu-button")
  let headerContainer = document.querySelector(".header-container")

  headerButton.addEventListener('click', function (e) {
    headerContainer.classList.toggle("header-container-active")
  })
}
