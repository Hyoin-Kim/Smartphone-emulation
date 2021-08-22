//new버튼 클릭시 input창 띄우는 함수
function showInput(){
  document.getElementById("memo-input").style.display="block";
}

//메모 detail 보여주는 함수
function showDetail(elem){
document.querySelectorAll(".memo-text-detail").forEach
(el => el.classList.replace("memo-text-detail","memo-text"));

  if(elem.className==="memo-text")
  { 
    elem.classList.replace("memo-text","memo-text-detail");
  }
  else
  { 
    elem.classList.replace("memo-text-detail","memo-text");
  }
}

// 로컬스토리지에 노트 추가
function addMemo(){
  document.querySelector('#memo-input').addEventListener('keypress', function (e) { //enter클릭시 
    if (e.key === 'Enter') {
      document.getElementById("memo-input").style.display="none";
  
      let addTxt = document.getElementById("memo-input");
      
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
    }
  });
}

//노트 보여주는 함수
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
            <p type="button" class="memo-text" name="memo-list" id="${index}" onclick="showDetail(this);"> ${element.text}</p>
            <p class="memo-text-detail" name="memo-list-detail" style="display: none;" >${element.text}</p>
            <hr class="hr">
        </div>
            `;
  });

  //빈 값일 경우
  let memosElm = document.getElementById("memos");
  if (memosObj.length != 0) {
    memosElm.innerHTML = newMemo;
  } else {
    memosElm.innerHTML = `노트가 비워있습니다. 작성하여 채워보세요!`;
  }
}
