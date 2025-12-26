const mainContainer = document.querySelector(".maincontainer");

mainContainer.addEventListener("scroll", () => {
  const section = [
    document.getElementById("introduction_section_1"),
    document.getElementById("introduction_section_2"),
    document.getElementById("introduction_section_3"),
    document.getElementById("introduction_section_4"),
    document.getElementById("introduction_section_5"),
    document.getElementById("introduction_section_6"),
  ];

  const index = getCurrentSectionIndex(mainContainer.scrollTop);
  const asideBtn = document.querySelectorAll("#about_aside_btn");

  switch (index) {
    case 0:
      actionAsideNav(0);
      break;
    case 1:
      actionAsideNav(1);
      break;
    case 2:
      actionAsideNav(2);
      break;
    case 3:
      actionAsideNav(3);
      break;
    case 4:
      actionAsideNav(4);
      break;
    case 5:
      actionAsideNav(5);
      break;
  }

  function getCurrentSectionIndex(scrollTop) {
    for (let i = 0; i < section.length; i++) {
      const currentScroll = section[i];
      const nextScroll = section[i + 1];

      if(!nextScroll) {
        return i;
      }
      if (
        scrollTop >= currentScroll.offsetTop &&
        scrollTop < nextScroll.offsetTop
      ) {
        return i;
      }
    }
    return -1;
  }

  function actionAsideNav(index) {
    asideBtn.forEach((btn, i) => {
      if (i === index) {
        btn.classList.remove("w-[15px]");
        btn.classList.add("w-[30px]");
      } else {
        btn.classList.remove("w-[30px]");
        btn.classList.add("w-[15px]");
      }
    });
  }
});
