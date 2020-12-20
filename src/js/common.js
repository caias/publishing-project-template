/**
 * 
 * @author caias
 * @since  - draft
 */
'use strict';

$(document).ready(function () {
  layoutHandler(init);
});

function init() {
  toggleClassHandler();
};

/**
 * HEADER / FOOTER import rendering
 * @param {Function} [callback = () => {}] 레이아웃 랜더링 후 콜백
 */
function layoutHandler(callback = () => { }) {
  $('header').load('/dist/html/layout/header.html', function () {
    $(this).find('header').unwrap('header');
    callback();
  });
  $('footer').load('/dist/html/layout/footer.html', function () {
    $(this).find('footer').unwrap('footer');
  });
}

/**
 * 단순 버튼 클레스 토글
 * @example <a href="javascript:void(0);" data-button-toggle="active" data-target-element="[data-layer=trafficInfo1]" data-use-mask="true">
 */
function toggleClassHandler() {
  $('[data-button-toggle]').on('click.buttonToggle', function () {
    const $this = $(this);
    // const { buttonToggle: toggleClass, targetElement, useMask } = $this.data();
    const { buttonToggle: toggleClass, targetElement } = $this.data();
    const $target = targetElement && $(targetElement) || $this;
    const hasActive = $target.hasClass(toggleClass);

    // if (useMask && isMobile()) {
    //   !hasActive ? $mask.show() : $mask.hide();
    // }

    $target.toggleClass(toggleClass, !hasActive);
  });
}

/**
 * layer popup
 */
// function layerPopup() {
//   $('[data-role=layerOpen]').on('click', function () {
//     const getClass = $(this).attr('rel');
//     const $target = $(`.${getClass}`);

//     // $('.dimmed').fadeIn();
//     $target.fadeIn();

//     $('[data-button=layerClose], .dimmed').on('click', function () {
//       // $('.dimmed').fadeOut();
//       $target.fadeOut();
//     });
//   });
// }

/**
 * Table Tbody scroll init
 * @usage https://manos.malihu.gr/jquery-custom-content-scroller/
 */
// function tableScrollHandler() {
//   const $tableScroll = $('[data-scroll]');

//   $tableScroll.length && $tableScroll.each(function () {
//     $(this).mCustomScrollbar({
//       theme: "minimal-dark",
//       // 테이블 스크롤 최하단으로 내려갔을시 보더겹침으로 인한 보더제거
//       callbacks: {
//         whileScrolling: function () {
//           if (this.mcs.topPct === 100) {
//             $(this).addClass('scroll-end');
//           } else {
//             $(this).removeClass('scroll-end');
//           }
//         },
//       }
//     });
//   });
// }

/**
 * 실제 개발에 필요없는 귀차니즘으로 인한 소스
 */
// function autoLabel() {
//   const $checkbox = $('.chk');

//   if (!$checkbox.length) { return; }

//   $checkbox.each(function (index) {
//     const $this = $(this);

//     $this.attr('for', 'chk' + index)
//     $this.prev('input').attr('id', 'chk' + index);
//   });
// }