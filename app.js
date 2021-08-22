    function getPage(type) {
      if(type === "alarm"){ 
        var template = document.getElementById("template-alarm").innerHTML;
        document.getElementById("page-container").innerHTML = template;
        showAlarms();
      }else if(type === "memo"){
        var template = document.getElementById("template-memo").innerHTML;
        document.getElementById("page-container").innerHTML = template;
        showMemos();
      }else if(type === "album"){
        var template = document.getElementById("template-album").innerHTML;
        document.getElementById("page-container").innerHTML = template;
      }else if(type === "menu"){
        var template = document.getElementById("template-menu").innerHTML;
        document.getElementById("page-container").innerHTML = template;
      }
    }

    function allowDrop() {
        event.preventDefault();
      };
      
      function dropItem() {
        let targetEle = event.target;
        let id = event.dataTransfer.getData('text');
        let moveElement = document.getElementById(id);
        targetEle.before(moveElement);
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

      //드래그앤 드롭 로컬스토리지 저장
      let drag = localStorage.getItem("appbutton");

      if (drag===null) {
        memosObj = [];
        console.log("null",memosObj);
      } else {
        memosObj = JSON.parse(memos);
        console.log(memosObj);
      } 


