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
    // gsap 라이브러리는 CSS만 가지고서 제어하기에 한계가 있던 걸 제어한 것 
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

const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEL, index){
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * .7, // 0.7초 간격으로 애니메이션이 발생하며 opacity 1로 1초동안 변한다 
    opacity: 1
  });
});

// 슬라이드 요소 관리 - new Swiper(선택자, 옵션);
new Swiper('.notice-line .mySwiper', {
  direction: 'vertical',
  autoplay: true, // 자동 재생
  loop: true // 반복 재생
});
new Swiper('.promotion .mySwiper', {
  // direction: 'horizontal'=> 기본값이라 안 써도 됌
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 1, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, 
  pagination: { // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소에 대한 제어 가능 여부
  },
  navigation: { // 다음 버튼 요소 선택자
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 프로모션 영역 숨김 여부(flase: 보임, true: 숨김)
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) { // 숨김 처리 
    promotionEl.classList.add('hide'); 
  } else { // 보임 처리
    promotionEl.classList.remove('hide');
  }
});