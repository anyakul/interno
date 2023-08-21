import CircleType from 'circletype';

export function circleText() {
  const text = document.querySelector('.circle-text')
  const circleType = new CircleType(text);
  if (window.innerWidth > 1199) {
    circleType.radius(170).dir(1);
    text.style.transform = 'rotate(' + 46 + 'deg)'
  } else if (window.innerWidth > 767) {
    circleType.radius(100).dir(1);
    text.style.transform = 'rotate(' + 48 + 'deg)'
  }
}
