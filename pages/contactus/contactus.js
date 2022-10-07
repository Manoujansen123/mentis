const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".thema");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

  document.body.style.backgroundColor= "red";
};