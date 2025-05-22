// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: { // 플레이어 설정
      autoplay: true, // 자동 재생 유튜브 영상
      loop: true, // 반복 재생
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID
    },
    events: { // 이벤트 설정
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
   });
}
