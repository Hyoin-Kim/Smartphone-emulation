document.addEventListener("DOMContentLoaded", function() {
    realTimer();
    setInterval(realTimer, 500);
});

//현재시간과 알람설정시간 비교 함수
function realTimer() {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month= nowDate.getMonth() + 1;
    const date = nowDate.getDate();
    const hour = nowDate.getHours();
    const min = nowDate.getMinutes();
    const second = nowDate.getSeconds();
    document.getElementById("nowTimes").innerHTML = 
    year + "년 " + addTimeZero(month) + "월 " + addTimeZero(date) + "일 " + hour + "시 " + addTimeZero(min) + "분 " + addTimeZero(second) + "초";

    let alarms = localStorage.getItem("alarms");
    if(alarms == null){
        alarmsObj = [];
    }else {
        alarmsObj = JSON.parse(alarms);
    }

    alarmsObj.forEach(function(element, index) {
        let compareTime;
        let compareHour=0;
        let compareMin=0;
        if(hour>12){
            compareTime = '오후';
            compareHour = addTimeZero(hour-12).toString();
            compareMin = addTimeZero(min).toString();
        }else{
            compareTime = '오전';
            compareHour = addTimeZero(hour).toString();
            compareMin = addTimeZero(min).toString();
        }

        if(compareTime === element.alarmTime && compareHour === element.alarmHour && compareMin === element.alarmMinute){
            alert("알람이 켜졌습니다.");
            deleteRingAlarm(index);
        }
    });
}

function addTimeZero(num) {
    if(num < 10) { num = "0" + num; }
    return num;
}

//오전,오후 알람 설정 함수
function timeSetting(type){
    const timeResultElement = document.getElementById('timeResult');
    let time = timeResultElement.innerText;

    if(type ==='plus'){
        time = '오후';
    }else if(type ==='minus'){
        time = '오전';
    }
    timeResultElement.innerText = time; 
}

//시간 알람 설정 함수
function hourSetting(type){
    const hourResultElement = document.getElementById('hourResult');
    let hour = hourResultElement.innerText;

    if(type === 'plus'){
        hour = parseInt(hour) + 1;
    }else if(type === 'minus'){
        hour = parseInt(hour) - 1;
    }

    if(hour >12){
        hour = 1;
    }else if(hour<1){
        hour = 12;
    }
    hourResultElement.innerText = addTimeZero(hour); 
}

//분 알람 설정 함수
function minSetting(type)  {
    const resultElement = document.getElementById('minResult');
    let minute = resultElement.innerText;
    
    if(type === 'plus') {
        minute = parseInt(minute) + 10;
    }else if(type === 'minus')  {
        minute = parseInt(minute) - 10;
    }

    if(minute >59){
        minute = 0;
    }else if(minute<0){
        minute = 50;
    }
    resultElement.innerText = addTimeZero(minute);
  }

function showInputAlarm(){
    document.getElementById("timeSettingWrap").style.display="block";
}


let addBtn = document.getElementById("add-btn");

//로컬 저장소에 알람 추가
function addAlarm(){
    document.getElementById("timeSettingWrap").style.display="none";
    let addTime = document.getElementById("timeResult");
    let addHour = document.getElementById("hourResult");
    let addMinute = document.getElementById("minResult");

    let alarms = localStorage.getItem("alarms");
    if (alarms == null){
        alarmsObj = []; //null인 경우
    }else{
        alarmsObj = JSON.parse(alarms);
    }

    let myObj = {
        alarmTime: addTime.innerHTML,
        alarmHour: addHour.innerHTML,
        alarmMinute: addMinute.innerHTML
    } //json에 키 값과 value

    alarmsObj.push(myObj);
    localStorage.setItem("alarms", JSON.stringify(alarmsObj));
    showAlarms();
}

//알람 보여주는 함수
function showAlarms(){
    let alarms = localStorage.getItem("alarms");
    if(alarms == null){
        alarmsObj = [];
    }else {
        alarmsObj = JSON.parse(alarms);
    }

    //로컬 저장소에 저장된 값을 보여줌
    let newAlarm = "";
    alarmsObj.forEach(function(element, index) { //노트가 추가될때마다 foreach문으로 추가
        newAlarm += `
          <div class="alarm">
              <p class="alarm-count">Alarm ${index + 1}</p>
              <p class="alarm-text"> ${element.alarmTime} ${element.alarmHour}시 ${element.alarmMinute}분</p>
              <button class="delete-btn" id="${index}" onclick="deleteAlarm(this.id);">삭제</button>
              <hr class="hr">
          </div>
        `;
    });

    //빈 값일 경우
    let alarmsElm = document.getElementById("alarms");
    if (alarmsObj.length != 0) {
        alarmsElm.innerHTML = newAlarm;
    } else {
        alarmsElm.innerHTML = `알람창이 비워있습니다. 설정하여 채워보세요!`;
    }
}

//알람 삭제 함수
function deleteAlarm(index) {
    let confirmDel = confirm("해당 알람을 삭제하시겠습니까?");
    if (confirmDel == true) {
        let alarms = localStorage.getItem("alarms");
        if (alarms == null) {
            alarmsObj = [];
        } else {
            alarmsObj = JSON.parse(alarms);
        }

        alarmsObj.splice(index, 1);
        localStorage.setItem("alarms", JSON.stringify(alarmsObj));
        showAlarms();
    }
}

//알람 울릴시, alert후 삭제 함수
function deleteRingAlarm(index) {
    let alarms = localStorage.getItem("alarms");
    if (alarms == null) {
        alarmsObj = [];
    } else {
        alarmsObj = JSON.parse(alarms);
    }

    alarmsObj.splice(index, 1);
    localStorage.setItem("alarms", JSON.stringify(alarmsObj));
    showAlarms();
}

