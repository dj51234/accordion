const buttons = document.querySelectorAll("button");
const dds = document.querySelectorAll("dd");
const dts = document.querySelectorAll("dt");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const currentDt = btn.parentElement;
    const currentDd = btn.parentElement.nextElementSibling;
    dds.forEach((dd) => {
      dd.classList.add("hide");
      dd.classList.remove("show");
      dd.classList.remove("bold");
      dd.classList.remove("border");
    });
    dts.forEach((dt) => {
      dt.classList.add("border");
      dt.classList.remove("bold");
    });
    currentDt.classList.toggle("border");
    currentDt.classList.toggle("bold");
    currentDd.classList.toggle("show");
    currentDd.classList.toggle("hide");
    currentDd.classList.toggle("border");
  });
});
