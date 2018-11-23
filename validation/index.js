/* eslint-disable */
const menu = document.querySelector(".menu-btn");
const hiddenMenu = document.querySelector(".burger-menu");
menu.onclick = () => {
  hiddenMenu.classList.contains("d-none")
    ? hiddenMenu.classList.remove("d-none")
    : hiddenMenu.classList.add("d-none");
};
window.onclick = e => {
  if (e.target !== menu) {
    hiddenMenu.classList.add("d-none");
  }
};

function validate(id, pattern) {
  const node = document.getElementById(id);

  if (pattern.test(node.value)) {
    node.classList.add("success");
    document.getElementById("tip").style.display = "none";
    return;
  }
  node.classList.remove("success");
  node.classList.add("error");
  document.getElementById("tip").style.display = "block";
}

function switchTab(e, tab) {
  let tabcontent;
  let tablinks;
  tabcontent = document.getElementsByClassName("info-text-items");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn-info");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("current", "");
  }
  document.getElementById(tab).style.display = "block";
  e.currentTarget.className += " current";
}

document.getElementById("defaultTab").click();
