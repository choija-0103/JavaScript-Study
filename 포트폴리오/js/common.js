

$(document).ready(function(){
  // menu
	$('#ico_menu').click(function(){
    var wrap = document.getElementById("wrap");
    var menu = document.getElementById("menu");
    var header = document.getElementById("header");
    var content = document.getElementById("content_wrap");
    var mainContent = document.getElementById("content");
		$(this).toggleClass('open');
    $(wrap).toggleClass('on');
    $(header).toggleClass('on');
    $(menu).toggleClass('on');
    $(content).toggleClass('on');  
    $('#about').click(function(ev){
      var sub = document.getElementById("sub_content");
      var ico = document.getElementById("ico_menu");
      ev.preventDefault();
      $(ico_menu).toggleClass('open');
      $(sub).toggleClass('on');
      $(menu).toggleClass('on');
      $(wrap).toggleClass('on');
      $(header).toggleClass('on');
      $(mainContent).css({"display":"none"});
    });
	});



  // scroll-top
  var btt = document.getElementById('back-to-top'), // back-to-top button
  docEle = document.documentElement, // document자체
  offset,
  scrollPos, 
  docHeight;

  // 문서 높이 계산하기 scrollHeight, offsetHeight
  // 브러우저마다 높이값이 다를 수 있기 때문에 두가지 높이 구하는 방법 중 큰 값으로 한다
  docHeight = Math.max(docEle.offsetHeight,docEle.scrollHeight);


  if ( docEle.docHeight != 0 ) { // 0 == 'undefined' == '' 문서 높이가 0이 아닐 때
  offset = docHeight / 6; // offset은 전체 문서의 1/6 지점
  }

  // 스크롤 이벤트 추가
  window.addEventListener('scroll', function(){
  scrollPos = docEle.scrollTop; // 올라간 스크롤 양

  if (scrollPos > offset) btt.className = 'on';
  else btt.className = '';

  // if 축약형
  // btt.className = (scrollPos > offset)
  // ? 'on'
  // : '';
  });


  // 버튼의 기능 만들기
  btt.addEventListener('click', function(ev){
  ev.preventDefault(); // a링크 형태의 버튼일 때 a본연의 기능을 막아야함
  // docEle.scrollTop = 0; 올라간 스크롤 양 0으로 변경하기(한번에 위로 이동하는 기본 기능)
  scrollTop(); // 스크롤을 조금씩 줄여나가는 함수
  });

  function scrollTop(){ // 스크롤을 조금씩 조금씩 줄여나가는 함수 만들기
    // 일정시간마다 할 일
    // var scrollInterval = setInterval(할 일, 시간)
    // 0.0015s = 15
    // 할 일 = function(){실제로 할 일}
    // 윈도우 스크롤 양이 0이 아닐 때 실제로 할 일 window.scrollBy(0,-55);
    // 스크롤 양이 0이면 setInterval 멈춰라. clearInterval(이름);

    var scrollInterval = setInterval (function() { // setInterval(호출할함수, 지연시간)
        if( scrollPos != 0 ) window.scrollBy(0,-55);
        else clearInterval(scrollInterval); // setInterval() 메소드의 반환값을 clearInterval() 메소드의 인수로 전달
    }, 15);
  }    

  
});
