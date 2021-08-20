function showInput(){
  document.getElementById("memo-text").style.display="block";
  document.getElementById("add-btn").style.display="block";
}

// 로컬스토리지에 노트 추가
let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", function(e) {
    document.getElementById("memo-text").style.display="none";
    document.getElementById("add-btn").style.display="none";

  let addTxt = document.getElementById("memo-text");
  
    if (addTxt.value == "") {
        return alert("해당 게시물에 글을 추가하세요.");
    }

  let memos = localStorage.getItem("memos");
  if (memos == null) {
    memosObj = []; //null인 경우 유효하지 않음
  } else {
    memosObj = JSON.parse(memos); 
  }
  let myObj = {
    text: addTxt.value
  } //json에 키 값과 value
  memosObj.push(myObj);
  localStorage.setItem("memos", JSON.stringify(memosObj)); //문자열로 변환해야하는 로컬 저장소
  showMemos();
});

//노트를 보여주는 함수
function showMemos() {
  let memos = localStorage.getItem("memos");
  if (memos == null) {
    memosObj = [];
  } else {
    memosObj = JSON.parse(memos);
  } 
  //로컬 저장소에 저장된 값 보여줌
  let newMemo = "";
  memosObj.forEach(function(element, index) { //노트가 추가될때마다 foreach문으로 추가
    newMemo += `
        <div class="memo">
            <p class="memo-count">Memo ${index + 1}</p>
            <p class="memo-text"> ${element.text}</p>
            <hr>
        </div>
            `;
  });

  let memosElm = document.getElementById("memos");
  if (memosObj.length != 0) {
    memosElm.innerHTML = newMemo;
  } else {
    memosElm.innerHTML = `노트가 비워있습니다. 작성하여 채워보세요!`;
  }
}


showMemos();