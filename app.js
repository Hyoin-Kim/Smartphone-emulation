let alarmButton = '<button class="appButton" id="alarm" onclick="getPage(\'alarm\');" ondragstart="dragStart(event);" draggable="true" ondragend="dragEnd(event)">알람</button>';
let memoButton = '<button class="appButton" id="memo" onclick="getPage(\'memo\');" ondragstart="dragStart(event);" draggable="true" ondragend="dragEnd(event)">메모</button>';
let albumButton = '<button class="appButton" id="album" onclick="getPage(\'album\');" ondragstart="dragStart(event);" draggable="true" ondragend="dragEnd(event)">사진</button>';

function getPage(type) {
    localStorage.setItem("page",type);
    if(type === "alarm"){ 
        let template = document.getElementById("template-alarm").innerHTML;
        document.getElementById("page-container").innerHTML = template;
        showAlarms();
    }else if(type === "memo"){
        let template = document.getElementById("template-memo").innerHTML;
        document.getElementById("page-container").innerHTML = template;
        showMemos();
    }else if(type === "album"){
        let template = document.getElementById("template-album").innerHTML;
        document.getElementById("page-container").innerHTML = template;
    }else if(type === "menu"){
        let template = document.getElementById("template-menu").innerHTML;
        document.getElementById("page-container").innerHTML = template;
        checkMenuState();
    }
}

//Drog & Drop 로컬 저장소에 저장
function checkMenuState(){
    let menu = localStorage.getItem("menu");
    if(menu === null || menu === undefined){ //로컬 저장소에 menu값이 null이거나 undefined일때
        let menu = ["alarm","memo","album"];
        localStorage.setItem("menu",JSON.stringify(menu));
    }else{
        menu = JSON.parse(menu);
    }
    menu.forEach(function(item){
      if(item === "alarm"){
          document.getElementById("menu-container").innerHTML += alarmButton;
      }else if(item === "memo"){
          document.getElementById("menu-container").innerHTML += memoButton;
      }else if(item === "album"){
          document.getElementById("menu-container").innerHTML += albumButton;
      }
    });
}

function checkPage(){
    let page = localStorage.getItem("page");
    if(page !== undefined && page !== null){
        getPage(page);
    }else{
        getPage("menu");
    }
}

function allowDrop() {
    event.preventDefault();
};
      
function dropItem() {
    let targetEle = event.target;
    let id = event.dataTransfer.getData('text');
    let moveElement = document.getElementById(id);
    let newMenu = [];
  
    if(moveElement.offsetLeft <= targetEle.offsetLeft){
      //움직이고자 하는 아이콘이 왼쪽에 더 가까울때
      if(targetEle.getAttribute("class") === "appButton"){
          targetEle.after(moveElement);
      }
    }else{
      //움직이고자 하는 아이콘이 오른쪽에 더 가까울때
      if(targetEle.getAttribute("class") === "appButton"){
          targetEle.before(moveElement);
      }
    }

    document.querySelectorAll(".appButton").forEach
    (el => newMenu.push(el.getAttribute("id")));
    
    localStorage.setItem("menu",JSON.stringify(newMenu));
};
      
function dragStart() {
    let thisElement = event.target;
    let thisId = thisElement.id;
    thisElement.classList.add('is-dragging');
    event.dataTransfer.setData('text/plain', thisId);
};
      
function dragEnd() {
    let thisElement = event.target;
    thisElement.classList.remove('is-dragging');
};
      

checkPage();
