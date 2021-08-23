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
- 변경된 앱 위치 LocalStorage 저장 
```
- Drag & Drop </br>
![Animation10](https://user-images.githubusercontent.com/45025551/130417217-f9dca3ee-d457-4cb0-b1fa-bfd8c5f85850.gif) 


2. 알람 페이지 </br>
```
- 우측 상단에 New 버튼 생성
- Nem 버튼 클릭시 입력창 생성
- 분은 10분 단위 입력 가능
- 저장 클릭시 리스트 추가 및 입력창 사라짐
- 알람 리스트에 삭제 클릭시 지워짐
- 해당 알람 시간이 되면 alert창 띄워준 후 해당 알람 삭제
- 다른 앱(메뉴, 메모, 앨범) 에 있어도 알람 동작 구현
- 모든 알람 리스트 LocalStorage 저장
```
- 알람 생성 </br>
![Animation07](https://user-images.githubusercontent.com/45025551/130398355-cd1fcada-86f7-420a-9e30-ce2700ddf297.gif) </br>
- 알람 삭제 </br>
![Animation08](https://user-images.githubusercontent.com/45025551/130398359-cc59b5ec-0d1b-413a-aac4-a7ce753e2b26.gif) </br>
- 알람 alert(알람앱 화면) -> 오후 3시 10분 알람 </br>
![Animation09](https://user-images.githubusercontent.com/45025551/130398816-dc18648c-3745-4a9a-9322-236a72f725e8.gif) </br>
- 알람 alert(알람앱 외에 다른 화면) -> 오후 6시 40분 알람 </br>
![Animation11](https://user-images.githubusercontent.com/45025551/130426358-6e19dbde-5e04-443b-b38b-57e3843fc2d7.gif) </br>




3. 메모 페이지 </br>
```
- 우측 상단에 New 버튼 생성
- New 버튼 클릭시 입력창 생성
- input 태그 사용 및 엔터키 입력시 저장후, 입력창 사라짐
- 메모 리스트 2줄 표시
- 해당 메모 클릭시 메모의 모든 내용 출력
- 한번에 하나의 메모만 펼쳐질 수 있도록 출력
- 모든 메모 LocalStorage 저장
```
- 노트 생성 </br>
![Animation04](https://user-images.githubusercontent.com/45025551/130392785-a30e25d7-6009-415b-95eb-52ac820832f6.gif) </br>
- 노트 상세 열기 </br>
![Animation05](https://user-images.githubusercontent.com/45025551/130392790-6b8209ae-0f9a-4130-80af-385a2da791b3.gif) </br>


4. 앨범 페이지 </br>
```
- 로컬에 사진 10장 저장후 불러오기
- 상단에 모든 사진 리스트 출력 및 가로 스크롤
- 해당 사진 선택시 Border을 통해 선택 표시
- 선택된 사진 표시 및 가로 세로 중앙정렬
```
- 앨범 선택 </br>
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

<h2> 실행 방법 </h2>
- git clone https://github.com/Hyoin-Kim/Smartphone-emulation.git </br>
- 압축 풀기 </br>
- 파일 index.html 실행

<h2> Code Convention </h2>

```
[Feat] 기능 추가
[Fix] 오류 수정
[Refactor] 코드 수정
[Style] 스타일 수정
[Etc] 기타 
✅ 한글로 Commit
```
