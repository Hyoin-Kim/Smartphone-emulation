    document.addEventListener("DOMContentLoaded", function() {
        realTimer();
        setInterval(realTimer, 500);
    });

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

    }

    function addTimeZero(num) {
        if(num < 10) { num = "0" + num; }
        return num;
    }

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

    function minSetting(type)  {
        const resultElement = document.getElementById('minResult');
        let minute = resultElement.innerText;
        
        if(type === 'plus') {
            minute = parseInt(minute) + 1;
        }else if(type === 'minus')  {
            minute = parseInt(minute) - 1;
        }

        if(minute >59){
            minute = 1;
        }else if(minute<1){
            minute = 59;
        }
        resultElement.innerText = addTimeZero(minute);
      }

