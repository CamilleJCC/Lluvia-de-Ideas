function showContent(tabNum) {
  var content = document.getElementById("content-" + tabNum);
  var plusSign = document.getElementById("plus-sign-" + tabNum);
  var contents = document.getElementsByClassName("content");
  var plusSigns = document.getElementsByClassName("plus-sign");
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === "content-" + tabNum) {
      if (content.classList.contains("hide")) {
        contents[i].classList.remove("hide");
        contents[i].classList.add("show");
        plusSigns[i].style.transform = "rotate(45deg)";
      } else {
        contents[i].classList.remove("show");
        contents[i].classList.add("hide");
        plusSigns[i].style.transform = "rotate(0deg)";
      }
    } else {
      contents[i].classList.remove("show");
      contents[i].classList.add("hide");
      plusSigns[i].style.transform = "rotate(0deg)";
    }
  }
}
