document.addEventListener("DOMContentLoaded", () => {
  const darkmodeBtn = document.getElementById("darkmode_btn");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  darkmodeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    console.log(darkmodeBtn);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
