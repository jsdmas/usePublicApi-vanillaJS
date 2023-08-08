## 서울시 문화행사 정보 사이트

> - DOM API를 활용하여 HTML 요소를 생성 하고 스타일을 변경하였습니다.
> - Webpack 을 사용하여 프론트엔드 환경을 구성하고 최적화 하였습니다.

| 소개 | 공공 데이터 포탈, kakao map API를 활용해 서울에서 개최하는 행사 정보를 제공하는 프로젝트 |
| --- | --- |
| 기간 | 23.05.16 ~ 23.05.19 (4일) |
| 인원 | 개인 프로젝트 |
| 저장소 | https://github.com/jsdmas/usePublicApi-vanillaJS |


![](https://file.notion.so/f/s/c1cbc931-b507-46e5-89b3-96cc230b35ba/Untitled.png?id=af0b2306-26eb-482a-bdcc-884709ab5e4c&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=3aeNM8ioCtzJK3ypxxqdjKKBWd6Yf8qNwzLElITqmdo&downloadName=Untitled.png)  
  
![](https://file.notion.so/f/s/74ed46a8-6f44-43aa-b232-b1caafbd71ec/Untitled.png?id=a86ca360-67a0-4cb2-ba31-d0c9f1db7e25&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=90TzC7J9YkyQQTczoSKNsZKTNBWNomZTiKIuhnd912U&downloadName=Untitled.png)
  

## 📚 실행방법

```
npm start
```

### 💾 **기술 스택**

- Style : `SCSS`
- Bundler : `Webpack`
- Language : `JavaScript`

### **💻 핵심 구현 기능**

- 이미지 지연로딩, throttle을 적용하여 스크롤 이벤트 최적화
    
    - 사용자 화면에 이미지가 나타나야 할때만 요청하도록 변경하여 **이미지 렌더링 성능을 최적화** 하였습니다.
    
    무한스크롤을 이용하여 행사데이터를 불러올시 **로딩시간이 매우 길어지는 현상**이 발생하였습니다.
    
    원인을 찾아보니 이미지 로딩 시 **모든 이미지를 한 번에 요청**하게 되어, **로딩 속도가 느려지는** 문제가 발생하였습니다. 또한, **빠른 스크롤링 동안 여러 이미지 요청이 동시에 발생**하여 웹 페이지 성능이 하락했습니다.
    
    이를 해결하기 위해 이미지는 **사용자 화면에 나타날 때만 이미지를 요청**하도록 변경하고 빠른 스크롤링으로 불필요한 API 요청을 방지하기위해 **throttle**을 적용하여 성능을 최적화 하였습니다.
    
    **이미지 지연 로딩**
    
    ![](https://file.notion.so/f/s/2e96ebec-19f4-4fe7-ac33-0a7ba52c31c1/Untitled.gif?id=c1874ad9-ab9e-48aa-807c-1289fff161fe&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=FFaFOnGGnlBAbQKZLOXdowyjBjvtI1QW5NOj6Xp0E94&downloadName=Untitled.gif)
    
    **throttle을 적용하여 빠른 스크롤링 방지**
    
    ![](https://file.notion.so/f/s/5dd49e01-4dc1-4f7e-bd09-75237e22d58a/Untitled.gif?id=b441e7a6-b0d2-4175-8194-57675c08a085&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=RSXJr38YkcU9td2B4u17OuwrkqrlnDUboM8XzP-JggE&downloadName=Untitled.gif)
    
- Webpack으로 렌더링 최적화
    
    - Webpack을 이용해 코드를 ****Tree Shaking, 난독화, 압축**** 하여 애플리케이션을 최적화 하였습니다.
    
    Bundler를 사용하지 않고 JavaScript 파일을 로드하여 웹사이트를 만들었을 때 **각 파일마다 별도의 네트워크 요청이 발생**하여 **초기 웹 페이지 로딩이 느려지는 현상이 발생**하였습니다.
    
    이를 해결하기 위해 Webpack을 도입하여 **파일을 번들링**하여 기존 **렌더링 요청을 9건 줄이고 레이아웃 시간을 13ms 단축**했습니다.
    
    **Bundling 전**
    
    ![](https://file.notion.so/f/s/d4124ea6-182e-4795-81f4-124e2e26b40b/Untitled.png?id=2a86ca9c-2114-45ec-897e-b9f31606ca79&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=K9skdUI-qmdbYTGFHBfTExR9MjEGcDAmjq3S-ZDmHoQ&downloadName=Untitled.png)
    
    ![](https://file.notion.so/f/s/b72a92c0-a977-4b89-9086-af38879f422f/Untitled.png?id=7c3d14c2-4677-4a8f-94ac-b94d3e7bc8aa&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=dXIxLeJ87l-OLthg8bp59JmEZOA6WNAc4anQwqsynLo&downloadName=Untitled.png)
    
    **Bundling 후**
    
    ![](https://file.notion.so/f/s/62d262b2-ceb9-4348-8f21-c68506458fb0/Untitled.png?id=d4b2a3f0-5c70-4aaa-a5f6-48d5177b1dfc&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=0ejZqK7YDnxvRktN8Ubv5glyTBbd6-ijevtZbRkEZV0&downloadName=Untitled.png)
    
    ![](https://file.notion.so/f/s/c68d3437-68c6-40a1-b933-6c3348180290/Untitled.png?id=d793b6b3-3e65-4e9c-b787-272a69f3b857&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=viWO5CP8jPj7JontIzaiDn-9uLFlQpzZ7pdvchDQ4Ac&downloadName=Untitled.png)
    
    또한, **Speed Index를 4.8초 LCP(Largest Contentful Paint)를 0.9초 단축하여 사용자에게 더 빠르게 화면을 보여주게 되었습니다.** 성능은 크롬 개발자도구와 **LightHouse**로 측정하였습니다.
    
    **Bundling 전 웹페이지 초기 로드**
    
    ![](https://file.notion.so/f/s/79b51ee6-0d44-4c5e-a2bc-8eb07c952bb3/Untitled.png?id=6f16239a-252d-4606-b941-260fb97e24fe&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=KsSyZGBIqccUhey3LT5mSXBa6PUGpEEXKfPES8di7d8&downloadName=Untitled.png)
    
    **Bundling 후 웹페이지 초기 로드**
    
    ![](https://file.notion.so/f/s/a5c63671-b240-44f9-9c0a-2573097d4f80/Untitled.png?id=35fb5c4c-fc17-409d-89e0-b8c94bbeff1a&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=VO5CMrBOHhhh-JEwKY1kNTnqP8cigoRaEskVeSCMc4g&downloadName=Untitled.png)
    
    ![](https://file.notion.so/f/s/50c92c78-dbf7-4cf0-8967-5f183fbd85b8/Untitled.png?id=35aadee9-cfd8-49b0-89cf-c95333a4881f&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=B6uABWwnrCO-tTOZaUwlpHydf4U3UPlUHIfHr9Els_w&downloadName=Untitled.png)
    
    ![](https://file.notion.so/f/s/4b572aba-3328-4bd0-a5c1-4d083236eb93/Untitled.png?id=da9a7220-9202-436a-84db-b7a6c3843844&table=block&spaceId=4ad879ee-8801-419a-8198-54a28ce85176&expirationTimestamp=1691546400000&signature=ycMzEAJop-qlYKWOiHXeN9S6P71o7hPHKUHDcoiNafM&downloadName=Untitled.png)
    

### ‼️ **깨달은 점**

- **Bundler**의 사용 이유와 방법에 대해 이해
- 웹 페이지의 품질을 개선할 수 있는 **LighHouse**의 사용법 이해

### 📑 사용 API
- [문화행사 정보](http://data.seoul.go.kr/dataList/OA-2269/S/1/datasetView.do)
- [카카오지도](https://apis.map.kakao.com/) 



