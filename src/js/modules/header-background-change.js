export const headerBackgroundChange = () => {
  window.onscroll = function () {
    let scrolled = window.scrollY || document.documentElement.scrollTop;
    let header = document.querySelector('.header')
    if (header) {
      header.style.backgroundColor = scrolled <= 950 ? "transparent" : "#FDFBFB";
      header.style.position = scrolled <= 950 ? "absolute" : "fixed";
    }
  }
}
