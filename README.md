# 📱Smartphone-emulation

<h2>서비스명</h2>
<h4> [JS] Smartphone emulation Project </h4>
- 순수 바닐라 자바스크립트로 작성 </br>
- Chrome 최신 버전에서 동작 확인 </br>
- 패키지 사용X </br>
- SPA(Single Page Applicaion) 활용 </br>
- 홈 화면과 3개의 앱 알람, 메모, 사진 총 4개의 화면으로 구성 </br>
</br>

<h2>개발 페이지 및 상세 기능</h2>

1. Home (메뉴) 페이지 </br>
```
- 상단에 날짜와 시간 표시
- 3개의 앱 표시
- Drag & Drop 서로 위치 이동 가능
- 각 앱 선택시 해당 앱 화면으로 변경
```
![Animation01](https://user-images.githubusercontent.com/45025551/130390720-ff46c219-d838-4229-9d36-b796fd5ada8d.gif)

2. 알람 페이지 </br>
```
- 우측 상단에 New 버튼 생성
- Nem 버튼 클릭시 입력창 생성
- 분은 10분 단위 입력 가능
- 저장 클릭시 리스트 추가 및 입력창 사라짐
- 알람 리스트에 삭제 클릭시 지워짐
- 해당 알람 시간이 되면 alert창 띄워준 후 해당 알람 삭제
- 다른 앱에 있어도 알람 동작
- 모든 알람 리스트 LocalStorage 저장
```
![Animation02](https://user-images.githubusercontent.com/45025551/130390967-87a56fe3-83a0-41fd-8bca-cc85bd4529a3.gif)


3. 메모 페이지 </br>
```
- 우측 상단에 New 버튼 생성
- New 버튼 클릭시 입력창 생성
- input 태그 사용 및 엔터키 입력시 저장후, 입력창 사라짐
- 메모 리스트 2줄 표시
- 해당 메모 클릭시 모든 메모 내용 출력
- 한번에 하나의 메모만 펼쳐질 수 있도록 출력
- 모든 메모 LocalStorage 저장
```

![Animation04](https://user-images.githubusercontent.com/45025551/130392785-a30e25d7-6009-415b-95eb-52ac820832f6.gif)
![Animation05](https://user-images.githubusercontent.com/45025551/130392790-6b8209ae-0f9a-4130-80af-385a2da791b3.gif)

4. 앨범 페이지 </br>
```
- 로컬에 사진 10장 저장후 불러오기
- 상단에 모든 사진 리스트 출력 및 가로 스크롤
- 해당 사진 선택시 Border을 통해 선택 표시
- 선택된 사진 표시 및 가로 세로 중앙정렬
```
![Animation03](https://user-images.githubusercontent.com/45025551/130392863-fcf87293-c707-45cd-84b2-be56eff9908d.gif)



<h2>파일 구조</h2>

```
└─Smartphone-emulation
    ├─components
    │  ├─Alarm─alarm.js
    │  ├─Album─album.js
    │  └─Memo─memo.js
    ├─css
    │  ├─alarm.css
    │  ├─album.css
    │  ├─memo.css
    │  └─style.css
    ├─image
    ├─index.html
    └─app.js
```
