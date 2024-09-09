const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
  const AlturaScroll = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().bottom;
    if (boxTop < AlturaScroll) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
