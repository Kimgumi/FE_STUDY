# FE_STUDY
인강 수강하면서 배운 것들 모음집
-스타벅스 페이지 제작(과정에서 배포 올바르게 하겠다고 수동으로 업로드한 거 삭제해서 이전 거 없어짐 => 삭제 주의)
-GitHub로 버전관리

*새로운 브런치를 만들어서 개발을 한 뒤에 나중에 합치는 방식으로 보통 개발이 이루어진다(현재 로그인을 signin브랜치에 만들어 나중에 병합한다. 병합하기 전까지 실제 웹사이트에 영향은 없다)\


# 마크다운 표기법

1. 제목 표현

# 제목(Header)
## 제목2
### 제목3 ==> h태그와 유사 

2. 문장(Paragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 => p 태그와 유사 

3. 줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세  
==> 띄어쓰기를 2번 진행하면 br태그 처럼 된다  
(br태그를 작성해도 괜찮아요) 

4. 강조(Emphasis)  
_이델릭_  
**두껍게**  
**_이델릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  

# 5. 목록(List)  

1. 순서1  
태그로도 만들 수 있지만 1.로도 가능 
1. 순서2
    1. 서브1
    1. 서브2 
1. 순서3  

태그로도 만들 수 있지만 1.로도 가능  

- 순서가 필요X_1
    - 서브순서
- 순서가 필요X_2


# 6. 링크(Links)

<a href='https://google.com'>GOOGLE</a>  

[GOOGLE](http://google.com)  

<a href='https://naver.com' title='NAVER로 이동'>NAVER</a>  

[NAVER](http://naver.com "NAVER로 이동!")  

<a href='https://youtube.com' title='유튜브로 이동' target='_blank'>Youtube</a>  

# 7. 이미지(Images)
구조1: ![HEROPY[대체텍스트]]('이미지 주소')

구조2(이미지로 이동): [![HEROPY[대체텍스트]]('이미지 주소')]('이미지주소')  

# 8. 인용문(BlockQuote)
> 남의 말이나 글에서 직접/간접으로 따온 문장  
> (네이버 국어사전)

> 인용문
>> 중첩1 
>>> 중첩2

# 9. 인라인(inline) 코드 강조 

CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.  

# 10. 블록(block) 코드 강조 

```html 
<a href='https://youtube.com' title='유튜브로 이동' target='_blank'>Youtube</a>  
```

```css 
header > .inner {
  height: 110px;
}
```

```javascript
function func(){
  let a = 'AAA';
  return a;
}
```

```bash
$ git commit -m 'Study Markdown' 
```

```plaintext
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
```

# 11. 표(Table)

position 속성  
1. 
값 | 의미 | 기본값 
--|--|-- 
static | 배치 기준: 없음 | O
relative | 배치 기준: 요소 자신 | X 
absolute | 배치 기준: 위치상 부모 요소 | X
fixed | 배치 기준: 뷰포트 | X 
  
2. 
값 | 의미 | 기본값 
--|:--:|--:
static | 배치 기준: 없음 | O
relative | 배치 기준: 요소 자신 | X 
absolute | 배치 기준: 위치상 부모 요소 | X
fixed | 배치 기준: 뷰포트 | X 

# 원시 HTML(Raw HTML)

동해물과 <span style="text-decoration: underline">백두산</span>이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세

# 수평선(Horizontal Rule)

--- 

*** 

___ 

