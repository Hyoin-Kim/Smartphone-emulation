//해당 사진 클릭시 확대 및 border표시 함수
function expandImage(imgs) {
    let expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;

    document.querySelectorAll("#imageFile").forEach
    (el => el.style.borderColor ="white");

    if(expandImg.src===imgs.src){
      imgs.style.borderColor = "red";
    }
    imgs.map
    expandImg.parentElement.style.display = "block";
  }