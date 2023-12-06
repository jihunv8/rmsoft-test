# Upnote Clone

## 시작
패키지 설치
```
npm install
```

개발환경 실행
```
npm start
```


## 사용 스택
<img width="417" alt="Frame 1" src="https://github.com/jihunv8/rmsoft-test/assets/78804014/aae572b1-3fe4-438f-98e3-d69f98f9acf5">

## 구조
<img width="360" alt="Frame 6" src="https://github.com/jihunv8/rmsoft-test/assets/78804014/27e114ef-976b-4806-aa9c-98613f5a7fce">

### 모듈
- db : 해당 프로젝트의 데이터를 저장하는 공간을 가지고 있으며 localHost동기화 하여 저장합니다. (위치: src/utils/db)
- controler : db모듈을 이용하여 데이터를 CRUD합니다. (위치: src/utils/controler)
- controler-hook : 데이터가 수정되는 것을 감지하여 state를 재설정 하게 도와줍니다. (위치: src/hooks/controler)

### db 스키마
![rmsoft-test](https://github.com/jihunv8/rmsoft-test/assets/78804014/3a8690ee-a9ee-45b3-b830-e7b87e6f0da8)

## 요구사항
- [x]  'Upnote' 를 구글에서 검색하여 화면과 기능을 참고하여 구현하고, 요구되는 기능만 구현하십시오. (다운로드하여 사용 후 구현하는 것을 추천합니다.)
- [x]  UI는 'Upnote'에 맞춰서 구현하십시오.
- [x]  최소 가로 길이는 '1400px' 이고, 최대 가로 길이는 '1920px' 입니다.
- [x]  최초의 화면에서 NOTEBOOKS는 하나도 없는 상태이어야 합니다.
- [x]  백엔드를 구현하지 않습니다. 모두 프론트 단에서만 처리될 수 있어야 합니다. (그러므로 데이터는 LocalStorage에 저장하여 구현합니다.)
- [x]  NOTEBOOKS의 목록을 확인할 수 있어야 합니다.
- [x]  NOTEBOOKS를 추가하거나 삭제할 수 있어야 합니다.
    - [x]  추가
    - [x]  삭제
- [x]  NOTEBOOKS에 메모를 추가하거나 삭제할 수 있어야 합니다.
    - [x]  추가
    - [x]  삭제
- [x]  NOTEBOOKS 안에 NOTEBOOKS를 추가할 수 없습니다.
- [x]  NOTEBOOKS를 선택하여 해당 NOTEBOOKS에 있는 메모 목록을 확인할 수 있어야 합니다.
- [x]  메모 목록에서 메모를 선택하여 메모 내용을 확인하고 수정할 수 있어야 합니다.
    - [x]  내용 확인
    - [x]  수정
- [x]  텍스트 편집기는 'lexical text editor'를 이용하여 구현되어야 합니다.
- [x]  텍스트 편집 영역의 위, 아래 버튼은 구현하지 않습니다.
- [x]  텍스트 입력 후 즉시 혹은 일정 시간 후에 입력 사항이 저장되어야 합니다.
- [x]  메모 목록에서 메모 내용의 첫 번째 줄이 메모의 제목으로 표시되어야 합니다.
- [x]  메모의 제목이 메모 목록의 가로 길이를 넘어가는 경우 말줌임표(...)로 처리되어야 합니다.
