
// --------------------------------------------------
var popuplenovo = document.querySelector('.brend-types__desktop_wrapper-item-lenovo');
var popupSamsung = document.querySelector('.brend-types__desktop_wrapper-item-samsung');
var popupApple = document.querySelector('.brend-types__desktop_wrapper-apple');
var popupAcer = document.querySelector('.brend-types__desktop_wrapper-item-acer');
var popupSony = document.querySelector('.brend-types__desktop_wrapper-item-sony');

var openPopupButton = document.querySelector('.brend-type-btn');
var closePopupButton = document.querySelector('.brend-type-btn_close');


openPopupButton.addEventListener('click', function () {
  popuplenovo.classList.add("open--lenovo");
  popupSamsung.classList.add("open--samsung");
  popupApple.classList.add("open--apple");
  openPopupButton.classList.add("close--openBtn");
  closePopupButton.classList.add("open--closeBtn");
});


closePopupButton.addEventListener('click', function () {
  popuplenovo.classList.remove("open--lenovo");
  popupSamsung.classList.remove("open--samsung");
  popupApple.classList.remove("open--apple");
  openPopupButton.classList.remove("close--openBtn");
  closePopupButton.classList.remove("open--closeBtn");
});


if (window.matchMedia("(max-width: 1000px)").matches) {
  openPopupButton.addEventListener('click', function () {
    popupAcer.classList.add("open--acer");
    popupSony.classList.add("open--sony");
  });
  closePopupButton.addEventListener('click', function () {
    popupAcer.classList.remove("open--acer");
    popupSony.classList.remove("open--sony");
  });
} else {
};
// --------------------------------------------------------
var popupMonitorRepair = document.querySelector('.device-types__wrapper_monitor-repair');

var openDevic = document.querySelector('.devic-type-btn');
var closeDevic = document.querySelector('.devic-type-btn_close');

if (window.matchMedia("(max-width: 1000px)").matches) {
  openDevic.addEventListener('click', function () {
    popupMonitorRepair.classList.add("open--monitor");
    closeDevic.classList.add("open--btnClose");
    openDevic.classList.add("hidden--btnOpen");
  });
  closeDevic.addEventListener('click', function () {
    popupMonitorRepair.classList.remove("open--monitor");
    closeDevic.classList.remove("open--btnClose");
    openDevic.classList.remove("hidden--btnOpen");
  });
} else { }




// ------------------------------------------------------------------
var popupBurger = document.querySelector('.block-burger');
var popupContainer = document.querySelector('.container');

var openPopupBurger = document.querySelector('.header-nav__btn-thema_menu');
var closePopupBurger = document.querySelector('.swipe-nav-header__btn-thema_close');

var hiddenContainer = document.querySelector('.container');

let clickClose = document.querySelector('.main');
let clickClose2 = document.querySelector('.header-nav__logo');
let clickClose3 = document.querySelector('.header-nav__tablet-list');
let clickClose4 = document.querySelector('.header-nav__mobile-list');

openPopupBurger.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 400px)').matches) {
    hiddenContainer.classList.add("hidden--container");

    popupBurger.classList.add("modal--burger");
    popupContainer.classList.add("modal--container");

  } else {
    popupBurger.classList.add("modal--burger");
    popupContainer.classList.add("modal--container");

  };
});



closePopupBurger.addEventListener('click', function () {
  popupBurger.classList.remove("modal--burger");
  popupContainer.classList.remove("modal--container");
  hiddenContainer.classList.remove("hidden--container");

});


clickClose.addEventListener('click', function () {
  popupBurger.classList.remove("modal--burger");
  popupContainer.classList.remove("modal--container");
  hiddenContainer.classList.remove("hidden--container");
});

clickClose2.addEventListener('click', function () {
  popupBurger.classList.remove("modal--burger");
  popupContainer.classList.remove("modal--container");
  hiddenContainer.classList.remove("hidden--container");
});

clickClose3.addEventListener('click', function () {
  popupBurger.classList.remove("modal--burger");
  popupContainer.classList.remove("modal--container");
  hiddenContainer.classList.remove("hidden--container");
});

clickClose4.addEventListener('click', function () {
  popupBurger.classList.remove("modal--burger");
  popupContainer.classList.remove("modal--container");
  hiddenContainer.classList.remove("hidden--container");
});


// --------------------------------------------------------------

var popupCallContainer = document.querySelector('.call-back-container');
var popupCallContainerOpen = document.querySelector('.swipe-nav-footer__btn-thema_call');
var popupCallContainerClose = document.querySelector('.call-back-container__close');
var hiddenBurger = document.querySelector('.block-burger');

popupCallContainerOpen.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 400px)').matches) {
    hiddenContainer.classList.add("hidden--container");
    hiddenBurger.classList.add("hidden--burger");

    popupCallContainer.classList.add("call--open");
    popupContainer.classList.add("opasity--cotainer");
    popupBurger.classList.add("opasity--burger");
  } else {
    popupCallContainer.classList.add("call--open");
    popupContainer.classList.add("opasity--cotainer");
    popupBurger.classList.add("opasity--burger");
  }
});

popupCallContainerClose.addEventListener('click', function () {

  if (window.matchMedia('(max-width: 400px)').matches) {
    hiddenBurger.classList.remove("hidden--burger");
    popupCallContainer.classList.remove("call--open");
    popupContainer.classList.remove("opasity--cotainer");
    popupBurger.classList.remove("opasity--burger");
  } else {
    hiddenContainer.classList.remove("hidden--container");

    hiddenBurger.classList.remove("hidden--burger");
    popupCallContainer.classList.remove("call--open");
    popupContainer.classList.remove("opasity--cotainer");
    popupBurger.classList.remove("opasity--burger");
  }



  // popupContainer.classList.add("modal--container");
});

// --------------------------------------------------------------
var popupFeedbackContainer = document.querySelector('.feedback-container');
var popupFeedbackContainerOpen = document.querySelector('.swipe-nav-footer__btn-thema_feedback');
var popupFeedbackContainerClose = document.querySelector('.feedback-container__button_close');

popupFeedbackContainerOpen.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 400px)').matches) {
    hiddenContainer.classList.add("hidden--container");
    hiddenBurger.classList.add("hidden--burger");

    popupFeedbackContainer.classList.add("feedback--open");
    popupContainer.classList.add("opasity--cotainer");
    popupBurger.classList.add("opasity--burger");
  } else {
    popupFeedbackContainer.classList.add("feedback--open");
    popupContainer.classList.add("opasity--cotainer");
    popupBurger.classList.add("opasity--burger");
  }
});

popupFeedbackContainerClose.addEventListener('click', function () {
  if (window.matchMedia('(max-width: 400px)').matches) {
    hiddenBurger.classList.remove("hidden--burger");

    popupFeedbackContainer.classList.remove("feedback--open");
    popupContainer.classList.remove("opasity--cotainer");
    popupBurger.classList.remove("opasity--burger")
  } else {
    hiddenContainer.classList.remove("hidden--container");
    hiddenBurger.classList.remove("hidden--burger");

    popupFeedbackContainer.classList.remove("feedback--open");
    popupContainer.classList.remove("opasity--cotainer");
    popupBurger.classList.remove("opasity--burger");
  }
});

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'));
});


