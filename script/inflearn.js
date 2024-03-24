(function ($) {

  const inf = {

    init() {
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section8();
      this.footer();
      this.modal();
   
    },

    header() {
      //헤더 탑 교육,커리어 on클래스
      $('.career').on({
        click(){
          $('.study-img').addClass('on');
          $('.career-img').addClass('on');
        }
      })      
      $('.study').on({
        click(){
          $('.study-img').removeClass('on');
          $('.career-img').removeClass('on');
        }
      })      
      
      //메인메뉴 mouseenter 시 display show, mouseleave hide

      // 메뉴 클릭 시
      $('.main-menu-study').on({
        mouseenter(e) {
          $('.sub-menu1-wrap').show();
        },
      });
      //서브1벗어날 시 서브메뉴 숨김
      $('.col').on({
        mouseleave(e) {
          $('.sub-menu1-wrap').hide();
        },
      });


      //서브1메뉴 클릭시 서브2 show
      $('.sub1menu').on({
        mouseenter(e) {
          // 해당영역의 자식 ul만 show 
          $(this).children().show();
        },
        mouseleave(e) {
          $('.sub-menu2-wrap').hide();
          // $('.sub1menu').hide();
        }
      });
      //서브2메뉴 클릭시 서브3 show
      $('.sub2menu').on({
        mouseenter(e) {
          // 해당영역의 자식 ul만 show 
          $(this).children().show();
        },
        mouseleave(e) {
          $('.sub-menu3-wrap').hide();
          // $('.sub1menu').hide();
        }
      });

    },//헤더 끝


    section1() {
      // 슬라이드 작동
      // 변수선언
      let cnt = 0;
      // 메인슬라이드
      let setIn;
      function mainSlide() {
        // position:relative 있어야 작동가능하다.
        $('.slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, function () {
          //margint-left : -100% 주고 시작했으니 cnt 0 이 첫번째슬라이드.
          //cnt = > 0 1 2 3 4 5 6 7 8 9 10 11 => 총12개 
          if (cnt > 11) {
            cnt = 0;
          }
          if (cnt < 0) {
            cnt = 11;
          }
          $('.slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
        }),

          //왼쪽 섹션 슬라이드 숫자카운트
          $('.current-number').text(cnt + 1 > 12 ? 1 : (cnt + 1 === 0 ? 12 : cnt + 1)); //cnt0부터라 +1

        // 가운데 슬라이드버튼 같이 움직이기
        $('.page-container').stop().animate({ left: `${-62 * cnt}px` }, 0, function () {
          if (cnt > 11) {
            cnt = 0;
          }
          if (cnt < 0) {
            cnt = 11;
          }
          $('.page-container').stop().animate({ left: `${-62 * cnt}px` }, 0);
        })

        //가운데 슬라이드버튼 클릭시 on클래스 추가(버튼테두리변경)
        $('.page-btn').removeClass('on');
        $('.page-btn').eq(cnt > 11 ? 0 : cnt).addClass('on');

        //언더페이지 버튼 클릭시 on클래스 추가(버튼테두리변경)
        $('.under-page-btn').removeClass('on');
        $('.under-page-btn').eq(cnt > 11 ? 0 : cnt).addClass('on');
      }

      // 왼쪽 화살표 버튼
      $('.left-arrow').on({
        click() {
          prevCount();
        }
      });
      // 오른쪽 화살표 버튼
      $('.right-arrow').on({
        click() {
          nextCount();
        }
      });

      // 슬라이드 stop. play 버튼 토글형식
      $('.paly-stop').on({
        click() {
          // console.log('palystop')
          if ($(this).hasClass('play') === true) { //플레이상태면
            $(this).removeClass('play');
            $(this).addClass('stop');
            clearInterval(setIn);
          }
          else { //stop 상태면
            $(this).removeClass('stop');
            $(this).addClass('play');
            autoTimer();
          }
        }
      });

      // 슬라이드 페이지 버튼 클릭시 해당 페이지로 이동
      $('.page-btn').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.page-btn').eq(idx).on({
          click() {
            cnt = idx;
            mainSlide();
          }
        })
      });
      //언더페이지 버튼
      $('.under-page-btn').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.under-page-btn').eq(idx).on({
          click() {
            cnt = idx;
            mainSlide();
          }
        })
      });

      // 오른쪽 언더 버튼 클릭시 하단 메뉴 show, on클래스 삽입, 한번더 클릭시 hide,on클래스삭제 
      $('.right-btn').on({
        click() {
          if ($(this).hasClass('on') === false) {
            $('.right-btn').addClass('on');
            $('.under').addClass('on');
            $('.under-btn-box').show();
          } else {
            $('.right-btn').removeClass('on');
            $('.under').removeClass('on');
            $('.under-btn-box').hide();
          }
        }
      })

      //오른쪽 닫기버튼 클릭시 하단메뉴 hide, on클래스삭제
      $('.under-btn-close').on({
        click() {
          $('.right-btn').removeClass('on');
          $('.under').removeClass('on');
          $('.under-btn-box').hide();
        }

      })

      // 다음카운트

      function nextCount() {
        cnt++;
        mainSlide();
      }

      //이전 카운트
      function prevCount() {
        cnt--;
        mainSlide();
      }

      // 자동타이머
      function autoTimer() {
        setIn = setInterval(nextCount, 5000);
      }
      autoTimer();


      
      $('.page-btn').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.page-btn').eq(idx).on({
          click() {
            idx;
            mainSlide();
          }
        })
      });


    },

    section2() {
      //돋보기 클릭 시
      $('.search-btn').on({
        click(){
          $('.search-btn').addClass('on');
        }
      });

      //s2 아이콘 슬라이드 버튼
      $('.s2right-btn').on({
        click(){
          // 104.4px
          $('.s2-icon-wrap').stop().animate({left : -365},300);
          $('.s2rightBtnC').hide();
          $('.s2leftBtnC').show();
        }
      });
      $('.s2left-btn').on({
        click(){
          // 104.4px
          $('.s2-icon-wrap').stop().animate({left : 0},300);
          $('.s2rightBtnC').show();
          $('.s2leftBtnC').hide();
        }
      });


     },
    section3() {

      //s3 아이콘 슬라이드 버튼
      $('.s3right-btn').on({
        click(){
          // 104.4px
          $('.s3-slide-wrap').stop().animate({marginLeft : -1200},300);
          $('.s3right-btn').animate({opacity: '0.2'});
          $('.s3left-btn').animate({opacity: '1'});

        }
      });
      $('.s3left-btn').on({
        click(){
          // 104.4px
          $('.s3-slide-wrap').stop().animate({marginLeft : 0},300);
          $('.s3left-btn').animate({opacity: '0.2'});
          $('.s3right-btn').animate({opacity: '1'});

        }
      });      

      // 이미지 호버시 상세설명
      $('.s3-slide-content').on({
        mouseenter(){
          $(this).next('.s3-slide-content-hover').stop().show();
        },
        // mouseleave(){
        //   $(this).next('.s3-slide-content-hover').stop().hide();
        // },
      })
      
      $('.s3-slide').on({
        mouseleave(){
          $(this).children('.s3-slide-content-hover').stop().hide();
        },
      })
      

      // $('.page-btn').each(function (idx) {
      //   // console.log('idx값 확인', idx)
      //   $('.page-btn').eq(idx).on({
      //     click() {
      //       idx;
      //       mainSlide();
      //     }
      //   })
      // });






     },//섹션3 끝
    section4() {

      let s4cnt = 0;

      function s4slide(){
        $('.s4-slid-wrap').stop().animate({left: `${-1200 * s4cnt}px` },600)

        if (s4cnt>1){
          $('.s4right-btn').animate({opacity: '0.2'});
        }
        if (s4cnt < 1){
          $('.s4left-btn').animate({opacity: '0.2'});
        }
      }

      $('.s4right-btn').on({
        click(){
          if (s4cnt>1){
            s4cnt = 1;
          }
          s4nextCount();
        }
      })
      $('.s4left-btn').on({
        click(){
          console.log(s4cnt)
          if(s4cnt>1){
            s4cnt = 2;
          }
          if (s4cnt < 1){
            s4cnt = 1;
          }
          s4prevCount();
          $('.s4right-btn').animate({opacity: '1'});
        }
      })



      //다음 카운트
      function s4nextCount() {
        s4cnt++;
        s4slide();
      }

      //이전 카운트
      function s4prevCount() {
        s4cnt --;    
        s4slide();    
      }



     },//섹션4끝
    
    
    section5() { 


      let s5cnt = 0;

      function s5slide(){
        $('.s5-slid-wrap').stop().animate({marginLeft: `${-1200 * s5cnt}px` },600)

        if (s5cnt>1){
          $('.s5right-btn').animate({opacity: '0.2'});
        }
        if (s5cnt < 1){
          $('.s5left-btn').animate({opacity: '0.2'});
        }
      }

      $('.s5right-btn').on({
        click(){
          if (s5cnt>1){
            s5cnt = 1;
          }
          s5nextCount();
        }
      })
      $('.s5left-btn').on({
        click(){
          console.log(s5cnt)
          if(s5cnt>1){
            s5cnt = 2;
          }
          if (s5cnt < 1){
            s5cnt = 1;
          }
          s5prevCount();
          $('.s5right-btn').animate({opacity: '1'});
        }
      })



      //다음 카운트
      function s5nextCount() {
        s5cnt++;
        s5slide();
      }

      //이전 카운트
      function s5prevCount() {
        s5cnt --;    
        s5slide();    
      }


    }, //섹션5끝

    section8() {

      let s8cnt = 0;

      function s8slide(){
        $('.s8-slide-box').stop().animate({marginLeft: `${-100 * s8cnt}%` },600)

        if (s8cnt>1){
          $('.s8-right-btn').animate({opacity: '0.2'});
        }
        if (s8cnt < 1){
          $('.s8-left-btn').animate({opacity: '0.2'});
        }
      }

      $('.s8-right-btn').on({
        click(){
          if (s8cnt>1){
            s8cnt = 1;
          }          
          s8nextCount();
          $('.s8-left-btn').animate({opacity: '1'});
        }
      })
      $('.s8-left-btn').on({
        click(){
          if(s8cnt>1){
            s8cnt = 2;
          }
          if (s8cnt < 1){
            s8cnt = 1;
          }
          s8prevCount();
          $('.s8-right-btn').animate({opacity: '1'});
        }
      })



      //다음 카운트
      function s8nextCount() {
        s8cnt++;
        s8slide();
      }

      //이전 카운트
      function s8prevCount() {
        s8cnt --;    
        s8slide();    
      }

      

     },
     footer(){
      $("#family").on({
        change() {
          if ($(this).val() !== "") { 
            window.open($(this).val());
          }
        },
      });
      },

      modal() { 

        $('.sign-up-btn').on({
          click(){
            $('#modal').show();
          }
        })
        $('.close-btn').on({
          click(){
            $('#modal').hide();
          }
        })

      },

  }
  inf.init();


})(jQuery);