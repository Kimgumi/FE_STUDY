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
const toTopEl = document.querySelector('#to-top'); // 최상단으로 이동 

window.addEventListener('scroll', _.throttle(function(){ 
  // _.throttle은 Lodash 라이브러리에서 제공하는 함수로, 
  // 형태: _.throttle(함수,시간)
  // 특정 함수를 일정 시간 간격으로 호출할 수 있도록 제한하는 기능을 제공
  console.log(window.scrollY);
  if (window.scrollY > 500) { 
    // 배지 숨기기
    // gsap.to(요소,지속시간,옵션);
    // gsap는 애니메이션을 처리해주는 라이브러리
    // gsap 라이브러리는 CSS만 가지고서 제어하기에 한계가 있던 걸 제어한 것 
    gsap.to(badgeEl, .6, {// 객체 데이터
      opacity: 0,
      display: 'none'

    });
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else { 
    // 배지 보이기 
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기! 
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));

toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo: 0
  });
});


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
  spaceBetween: 35, // 슬라이드 사이 여백
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
new Swiper('.awards .mySwiper', {
  // direction: 'horizontal'=> 기본값이라 안 써도 됌
  autoplay: true, // 자동 재생
  loop: true, // 반복 재생
  spaceBetween: 30,
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: { // 다음 버튼 요소 선택자
    prevEl: '.awards .swiper-next',
    nextEl: '.awards .swiper-prev'
  }
}); // 기본값으로 설정



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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // Math.random()은 0이상 1미만의 랜덤한 수를 반환
  // Math.random() * (max - min + 1) + min => min ~ max 사이의 랜덤한 수를 반환
  // 'toFixed()'를 통해 반환된 문자 데이터를, 'parseFloat()'를 통해 소수점을 지닌 숫자로 변환 
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) { // delay: 지연 시간, size: 위아래ㅗ 움직이는 크기
  // gsap.to(요소,지속시간,옵션);
  gsap.to(selector,random(1.5,2.5),{ // 애니메이션 지속 시간
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 애니메이션을 반복할 때 처음 상태로 돌아가는지 여부
    ease: Power1.easeInOut, // 애니메이션의 속도 조절
    // ease: 'power1.inOut' // gsap에서 제공하는 easing 함수 => https://gsap.com/docs/v3/Eases/ 여기서 확인 가능
    delay: random(0,delay) // 애니메이션 시작 지연 시간
  });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


// ScrollMagic 라이브러리 사용
// new ScrollMagic.Controller() => 스크롤 애니메이션을 제어하는 컨트롤러 생성
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEL){
  new ScrollMagic
    .Scene({
      triggerElement: spyEL, // 보여짐 여부를 감시할 요소
      triggerHook: .8 // 뷰포트의 80% 지점에서 보여짐 여부를 감시
    })
    .setClassToggle(spyEL, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면 추가
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재 연도
// 현재 연도를 가져와서 .this-year 요소에 넣어줌