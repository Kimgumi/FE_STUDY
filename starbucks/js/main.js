const search = document.querySelector('.search');
const searchINPUT = search.querySelector('input'); //document.querySelector('.search input')

search.addEventListener('click',function(){
  searchINPUT.focus();
});

searchINPUT.addEventListener('focus',function(){
  search.classList.add('focused');
  searchINPUT.setAttribute('placeholder','검색어를 입력하세요');
});

searchINPUT.addEventListener('blur',function(){ //blur는 포커스가 사라질 때 발생하는 이벤트
  search.classList.remove('focused');
  searchINPUT.setAttribute('placeholder',''); //placeholder 속성 제거
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){ 
  // _.throttle은 Lodash 라이브러리에서 제공하는 함수로, 
  // 형태: _.throttle(함수,시간간)
  // 특정 함수를 일정 시간 간격으로 호출할 수 있도록 제한하는 기능을 제공
  console.log(window.scrollY);
  if (window.scrollY > 500) { // 배지 숨기기
    // gsap.to(요소,지속시간,옵션);
    // gsap는 애니메이션을 처리해주는 라이브러리
    gsap.to(badgeEl, .6, {// 객체 데이터
      opacity: 0,
      display: 'none'
    }); 
  } else { // 배지 보이기 
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
},300));