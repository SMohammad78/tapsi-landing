const toggler = document.querySelector(".nav__toggler"),
navbar = document.querySelector(".nav");

toggler.addEventListener('click', (e)=> {
    navbar.classList.toggle("nav__expanded");
})

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__detail");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});


let a = "milad"
let b = 2;

console.log(a + b)