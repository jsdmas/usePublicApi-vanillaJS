## 서울시 문화행사 정보 사이트

> - DOM API를 활용하여 HTML 요소를 생성 하고 스타일을 변경하였습니다.
> - Webpack 을 사용하여 프론트엔드 환경을 구성하고 최적화 하였습니다.

| 소개 | 공공 데이터 포탈, kakao map API를 활용해 서울에서 개최하는 행사 정보를 제공하는 프로젝트 |
| --- | --- |
| 기간 | 23.05.16 ~ 23.05.19 (4일) |
| 인원 | 개인 프로젝트 |
| 저장소 | https://github.com/jsdmas/usePublicApi-vanillaJS |


![](https://github.com/jsdmas/frontend-interview/assets/105098581/e0f10f62-c04e-49a2-b258-de9f812fe0d7)
![Untitled (16)](https://github.com/jsdmas/frontend-interview/assets/105098581/3dd7ceb1-9635-4db2-8289-4b756772022a)

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
    
    ![Untitled (6)](https://github.com/jsdmas/frontend-interview/assets/105098581/9faf852c-7246-401a-90bd-95bf1076d4bc)
    
    **throttle을 적용하여 빠른 스크롤링 방지**
    
    ![Untitled (7)](https://github.com/jsdmas/frontend-interview/assets/105098581/58a6990d-7573-4b53-9fed-73e26bb37ca7)
    
- Webpack으로 렌더링 최적화
    
    - Webpack을 이용해 코드를 ****Tree Shaking, 난독화, 압축**** 하여 애플리케이션을 최적화 하였습니다.
    
    Bundler를 사용하지 않고 JavaScript 파일을 로드하여 웹사이트를 만들었을 때 **각 파일마다 별도의 네트워크 요청이 발생**하여 **초기 웹 페이지 로딩이 느려지는 현상이 발생**하였습니다.
    
    이를 해결하기 위해 Webpack을 도입하여 **파일을 번들링**하여 기존 **렌더링 요청을 9건 줄이고 레이아웃 시간을 13ms 단축**했습니다.
    
    **Bundling 전**
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/a6d84412-55d9-402e-a750-42f44e40e867)
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/53021632-36da-4682-bce5-e9934a7d1b18)
    
    **Bundling 후**
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/f4541a17-229f-441c-be15-ce8318ef7ed6)
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/a2563322-c294-4eb7-a324-9d15f7b42539)
    
    또한, **Speed Index를 4.8초 LCP(Largest Contentful Paint)를 0.9초 단축하여 사용자에게 더 빠르게 화면을 보여주게 되었습니다.** 성능은 크롬 개발자도구와 **LightHouse**로 측정하였습니다.
    
    **Bundling 전 웹페이지 초기 로드**
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/96822549-8f9e-4670-826f-4c42f2087246)
    
    **Bundling 후 웹페이지 초기 로드**
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/705e2912-4ecc-4c23-8c65-4e6af2bf9472)
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/d887ef5f-4bd5-424d-93ba-d092b9468c58)
    
    ![](https://github.com/jsdmas/frontend-interview/assets/105098581/2626cb8a-6779-4053-9282-b2819060e008)
    

### ‼️ **깨달은 점**

- **Bundler**의 사용 이유와 방법에 대해 이해
- 웹 페이지의 품질을 개선할 수 있는 **LighHouse**의 사용법 이해

### 📑 사용 API
- [문화행사 정보](http://data.seoul.go.kr/dataList/OA-2269/S/1/datasetView.do)
- [카카오지도](https://apis.map.kakao.com/) 



