/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./parts/accordion.js":
/*!****************************!*\
  !*** ./parts/accordion.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
  //------------------------------------------------------------------------------------------------
  // Accordion small
  var moduleInfo = document.querySelectorAll('.module__info'),
      blockAccordion = document.querySelectorAll('.page > div');

  if (!blockAccordion.length) {
    var plusContentModuls = document.querySelectorAll('.plus__content');

    var _loop = function _loop(i) {
      var newModuleText = document.createElement('div');
      newModuleText.className = "module__info-show-text";
      newModuleText.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
      moduleInfo[i].insertBefore(newModuleText, moduleInfo[i].children[5]);
      plusContentModuls[i].addEventListener('click', function () {
        newModuleText.classList.toggle("text_out");
      });
    };

    for (var i = 0; i < plusContentModuls.length; i++) {
      _loop(i);
    }
  }
}

module.exports = accordion;

/***/ }),

/***/ "./parts/addcard.js":
/*!**************************!*\
  !*** ./parts/addcard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addcard() {
  //---------------------------------------------------------------------------
  //Add card
  var addItemLeft = 1,
      addItemRight = 1,
      addText = ['First', 'Second', 'Third'],
      officernew = document.querySelector('.officernew'),
      officerold = document.querySelector('.officerold'),
      plusLeft = document.querySelector('.officerold .plus'),
      plusRight = document.querySelector('.officernew .plus'),
      blockCard = document.querySelectorAll('.page > div');

  if (!blockCard.length) {} else {
    plusLeft.addEventListener('click', function () {
      addNewDiv(addItemLeft, officerold, 'officerold');
      addItemLeft++;
    });
    plusRight.addEventListener('click', function () {
      addNewDiv(addItemRight, officernew, 'officernew');
      addItemRight++;
    });
  }

  function addNewDiv(addItemLR, officer, classItem) {
    var newDiv = document.createElement('div');
    newDiv.className = "officer__card-item";
    newDiv.innerHTML = "<div class=\"card__counter\">0".concat(addItemLR, "</div><div class=\"card__descr\">").concat(addText[addItemLR - 1], " step with some text and explanation</div>");
    officer.insertBefore(newDiv, officer.children[addItemLR]);

    if (addItemLR === 3) {
      officer.removeChild(document.querySelectorAll(".".concat(classItem, " .officer__card-item"))[3]);
    }

    newDiv.animate([{
      transform: 'rotateX(90deg)'
    }, {
      transform: 'rotateX(0deg)'
    }], 500);
  }
}

module.exports = addcard;

/***/ }),

/***/ "./parts/ban.js":
/*!**********************!*\
  !*** ./parts/ban.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function ban() {
  //----------------------------------------------------------------
  // Ban cyrillic email
  var inputEmail = document.querySelectorAll('input[type="email"]');

  var _loop = function _loop(i) {
    inputEmail[i].addEventListener("input", function () {
      this.value = inputEmail[i].value.replace(/[^0-9a-zA-Z-@._]+/gi, "");
    });
  };

  for (var i = 0; i < inputEmail.length; i++) {
    _loop(i);
  } //----------------------------------------------------------------
  // Ban letters and signs


  var inputWhen = document.querySelector('input[type="datetime"]'),
      blockBan = document.querySelectorAll('.page > div');

  if (!blockBan.length) {} else {
    inputWhen.addEventListener("input", function () {
      this.value = inputWhen.value.replace(/[^0-9/.]+/gi, "");
    });
  }
}

module.exports = ban;

/***/ }),

/***/ "./parts/download.js":
/*!***************************!*\
  !*** ./parts/download.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function download() {
  //-----------------------------------------------------------------------------------------------
  // File download
  var fileDownload = document.querySelectorAll('.download'),
      blockFile = document.querySelectorAll('.page > div');

  if (!blockFile.length) {
    for (var i = 0; i < fileDownload.length; i++) {
      fileDownload[i].setAttribute('download', '');
      fileDownload[i].addEventListener('click', function () {
        document.location = './Hello.pdf';
      });
    }
  }
}

module.exports = download;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  //------------------------------------------------------------------------
  // Form
  var blockForm = document.querySelectorAll('.page > div');

  if (!blockForm.length) {} else {
    var sendForm = function sendForm(elem, numElem) {
      elem.addEventListener('submit', function (e) {
        e.preventDefault();
        var formInputTwo = elem.getElementsByTagName('input');
        var flag = false;
        formInputTwo[numElem].value.replace(/\D/g, "").length > 10 || numElem === 0 ? flag = true : flag = false;

        if (flag) {
          var postData = function postData(data) {
            return new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest();
              request.open('POST', 'server.php');
              request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                  resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                  resolve();
                } else {
                  reject();
                }
              });
              request.send(data);
            });
          };

          var clearInput = function clearInput() {
            for (var i = 0; i < formInputTwo.length; i++) {
              formInputTwo[i].value = '';
            }
          };

          elem.appendChild(statusMessage);
          var formData = new FormData(elem);
          postData(formData).then(function () {
            return statusMessage.innerHTML = message.loading;
          }).then(function () {
            return statusMessage.innerHTML = message.success;
          }).catch(function () {
            return statusMessage.innerHTML = message.failure;
          }).then(clearInput);
        } else {
          elem.appendChild(statusMessage);
          statusMessage.innerHTML = message.phone;
        }
      });
    };

    var inputAll = document.querySelectorAll('input');
    inputAll[0].setAttribute("name", "name");
    inputAll[1].setAttribute("name", "profession");
    inputAll[2].setAttribute("name", "email");
    inputAll[3].setAttribute("name", "phone");
    inputAll[4].setAttribute("name", "name");
    inputAll[5].setAttribute("name", "email");
    inputAll[6].setAttribute("name", "when");
    var message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...',
      phone: 'Слишком мало символов в телефоне.'
    };

    var _form = document.querySelector('.join__evolution .form'),
        formCont = document.querySelector('.schedule__form .form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    sendForm(_form, 3);
    sendForm(formCont, 0);
  }
}

module.exports = form;

/***/ }),

/***/ "./parts/mask.js":
/*!***********************!*\
  !*** ./parts/mask.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function mask() {
  //------------------------------------------------------------
  //Mask
  var input = document.querySelector('#phone'),
      blockMask = document.querySelectorAll('.page > div'),
      mask = "+1 (___) ___-____";

  if (!blockMask.length) {} else {
    input.addEventListener("input", putMask);
  }

  function putMask() {
    var i = 0,
        constant = mask.replace(/\D/g, ""),
        inputValue = this.value.replace(/\D/g, "");

    if (constant.length >= inputValue.length) {
      inputValue = constant;
    }

    this.value = mask.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < inputValue.length ? inputValue.charAt(i++) : i >= inputValue.length ? "" : a;
    });
  }
}

module.exports = mask;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  // Big slider
  var slideIndex = 1,
      slides = document.querySelectorAll('.page > div'),
      modules = document.querySelectorAll('.module'),
      logo = document.querySelectorAll('.sidecontrol a'),
      next = document.querySelectorAll('.nextmodule'),
      prev = document.querySelectorAll('.prevmodule');
  showSlides(slideIndex);

  function showSlides(n) {
    if (!slides.length) {
      modules.forEach(function (item) {
        return item.style.display = 'none';
      });
      modules[slideIndex - 1].style.display = 'block';
    } else {
      slides.forEach(function (item) {
        return item.style.display = 'none';
      });
      slides[slideIndex - 1].style.display = 'block';
    }
  }

  function plusSlides(n) {
    showSlides(Number(slideIndex += n));
  } // Slider Loan and modules left


  var _loop = function _loop(i) {
    logo[i].addEventListener('click', function () {
      i + 1 == logo.length ? showSlides(slideIndex = 1) : plusSlides(1);
    });
    logo[i - 1].addEventListener('click', function () {
      !slides.length ? document.location.replace("./index.html") : showSlides(slideIndex = 1);
      sessionStorage.clear();
    });
  };

  for (var i = 1; i <= logo.length; i = i + 2) {
    _loop(i);
  } //Slider modules bottom


  var _loop2 = function _loop2(i) {
    next[i - 1].addEventListener('click', function () {
      i == next.length ? showSlides(slideIndex = 1) : plusSlides(1);
    });
    prev[i - 1].addEventListener('click', function () {
      i == 1 ? showSlides(slideIndex = next.length) : plusSlides(-1);
    });
  };

  for (var i = 1; i <= next.length; i++) {
    _loop2(i);
  } // Slider Box


  function sliderBox(box, prev, next, classActive, boxLenght, flag, numFlag) {
    if (!slides.length) {} else {
      if (flag) {
        logo[numFlag].addEventListener('click', function () {
          var timerId = setTimeout(function tick() {
            box.children[0].classList.remove(classActive);
            box.children[1].classList.add(classActive);
            clickNext();
            timerId = setTimeout(tick, 4000);
          }, 4000);
        });
      }

      next.addEventListener('click', function () {
        box.children[0].classList.remove(classActive);
        box.children[1].classList.add(classActive);
        clickNext();
      });
      prev.addEventListener('click', function () {
        clickPrev();
        box.children[1].classList.remove(classActive);
        box.children[0].classList.add(classActive);
      });
    }

    function clickNext() {
      box.children[0].animate([{
        transform: 'rotateY(0deg)'
      }, {
        transform: 'rotateY(90deg)'
      }], 800);
      setTimeout(function () {
        box.appendChild(box.children[0]);
      }, 800);
    }

    function clickPrev() {
      box.children[boxLenght.length - 1].animate([{
        transform: 'translateX(-100px)'
      }, {
        transform: 'translateX(0px)'
      }], 800);
      box.insertBefore(box.children[box.children.length - 1], box.children[0]);
    }
  } // Slider Loan bottom


  var showupSlider = document.querySelector('.showup__content-slider'),
      bottomSlider = document.querySelector('.showup__content-slider'),
      slickPrev = document.querySelector('.slick-prev'),
      slickNext = document.querySelector('.slick-next'),
      boxSlider = document.querySelectorAll('.showup__content-slider .card');

  if (!slides.length) {} else {
    styleСhangeSlider(showupSlider);
  }

  sliderBox(bottomSlider, slickPrev, slickNext, 'card-active', boxSlider); // Slider third page

  var modulesSlider = document.querySelector('.modules__content-slider'),
      slickPrevTwo = document.querySelector('.modules__info-btns .slick-prev'),
      slickNextTwo = document.querySelector('.modules__info-btns .slick-next'),
      boxSliderTwo = document.querySelector('.modules__content-slider'),
      boxModules = document.querySelectorAll('.modules__content-slider .card');

  if (!slides.length) {} else {
    styleСhangeSlider(modulesSlider);
  }

  sliderBox(boxSliderTwo, slickPrevTwo, slickNextTwo, 'card-active', boxModules, true, 3); // Slider five page

  var feedSlider = document.querySelector('.feed__slider'),
      slickPrevThree = document.querySelector('.button .slick-prev'),
      slickNextThree = document.querySelector('.button .slick-next'),
      boxSliderThree = document.querySelector('.feed__slider');

  if (!slides.length) {} else {
    styleСhangeSlider(feedSlider);
  }

  sliderBox(boxSliderThree, slickPrevThree, slickNextThree, 'feed__item-active');

  function styleСhangeSlider(changeItem) {
    changeItem.style.display = '-webkit-box';
  } //--------------------------------------------------------------------
  // Go to another page


  var plusContent = document.querySelector('.plus__content');

  if (!slides.length) {} else {
    plusContent.addEventListener('click', function () {
      document.location.replace("./modules.html");
    });
  } //----------------------------------------------------------------------
  // Add links slider to module


  var cardLink = document.querySelectorAll('.showup__content-slider .card'),
      moduleLink = document.querySelectorAll('.modules__content-slider .card');

  function addLink(link) {
    var _loop3 = function _loop3(i) {
      link[i].href = "./modules.html";
      link[i].addEventListener('click', function () {
        sessionStorage.setItem('myKey', i);
      });
    };

    for (var i = 0; i < link.length; i++) {
      _loop3(i);
    }
  }

  addLink(cardLink);
  addLink(moduleLink);

  window.onload = function () {
    slideIndex = Number(sessionStorage.getItem('myKey'));

    if (!slides.length) {
      modules.forEach(function (item) {
        return item.style.display = 'none';
      });
      modules[slideIndex].style.display = 'block';
    }

    slideIndex = slideIndex + 1;
  };
}

module.exports = slider;

/***/ }),

/***/ "./parts/upcard.js":
/*!*************************!*\
  !*** ./parts/upcard.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function upcard() {
  //------------------------------------------------------------
  // The appearance of the card
  var hanson = document.querySelector('.hanson'),
      blockApp = document.querySelectorAll('.page > div'),
      logo = document.querySelectorAll('.sidecontrol a');

  if (!blockApp.length) {} else {
    hanson.style.display = 'none';
    logo[3].addEventListener('click', function () {
      setTimeout(function () {
        hanson.style.display = 'block';
        hanson.animate([{
          transform: 'translateX(-500px)'
        }, {
          transform: 'translateX(0px)'
        }], 500);
      }, 3000);
    });
    logo[5].addEventListener('click', function () {
      hanson.style.display = 'none';
    });
  }
}

module.exports = upcard;

/***/ }),

/***/ "./parts/video.js":
/*!************************!*\
  !*** ./parts/video.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function video() {
  //------------------------------------------------------------------
  //Video demonstration
  var play = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay'),
      closeBtn = document.querySelector('.close'),
      moduleVideoItem = document.querySelectorAll('.module__video-item'),
      lock = document.querySelectorAll('.lock'),
      lockPlay = document.querySelectorAll('.lock__play'),
      blockDemo = document.querySelectorAll('.page > div'),
      logoVideo = document.querySelectorAll('.sidecontrol a'),
      nextVideo = document.querySelectorAll('.nextmodule'),
      prevVideo = document.querySelectorAll('.prevmodule'),
      srcSmoll;

  var _loop = function _loop(i) {
    play[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      srcSmoll = play[i].dataset.url.slice(30);
      onYouTubePlayerAPIReady();
    });
  };

  for (var i = 0; i < play.length; i++) {
    _loop(i);
  }

  for (var i = 0; i < lockPlay.length; i++) {
    lockPlay[i].style.display = 'none';
  }

  function blockVideo() {
    if (!blockDemo.length) {
      for (var _i = 1; _i < play.length; _i = _i + 2) {
        play[_i].style.pointerEvents = 'none';
      }

      for (var _i2 = 1; _i2 < moduleVideoItem.length; _i2 = _i2 + 2) {
        moduleVideoItem[_i2].style.opacity = '.4';
        moduleVideoItem[_i2].style.filter = 'grayscale(100%)';

        moduleVideoItem[_i2].children[1].children[0].classList.add('closed');

        moduleVideoItem[_i2].children[1].children[1].classList.add('attention');
      }

      for (var _i3 = 0; _i3 < lock.length; _i3++) {
        lock[_i3].style.display = 'block';
        lockPlay[_i3].style.display = 'none';
      }
    }
  } // blockVideo();


  for (var _i4 = 1; _i4 <= logoVideo.length; _i4 = _i4 + 2) {
    logoVideo[_i4].addEventListener('click', function () {
      blockVideo();
    });
  }

  for (var _i5 = 1; _i5 <= nextVideo.length; _i5++) {
    nextVideo[_i5 - 1].addEventListener('click', function () {
      blockVideo();
    });

    prevVideo[_i5 - 1].addEventListener('click', function () {
      blockVideo();
    });
  }

  function unlockVideo() {
    for (var _i6 = 1; _i6 < play.length; _i6 = _i6 + 2) {
      play[_i6].style.pointerEvents = 'unset';
    }

    for (var _i7 = 1; _i7 < moduleVideoItem.length; _i7++) {
      moduleVideoItem[_i7].style.opacity = '1';
      moduleVideoItem[_i7].style.filter = 'grayscale(0)';

      moduleVideoItem[_i7].children[1].children[0].classList.remove('closed');

      moduleVideoItem[_i7].children[1].children[1].classList.remove('attention');
    }

    for (var _i8 = 0; _i8 < lock.length; _i8++) {
      lock[_i8].style.display = 'none';
      lockPlay[_i8].style.display = 'block';
    }
  }

  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    frame.destroy();
  }); //---------------------------------------------------------------------------------------------
  // Video Youtube player api

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var frame;

  function onYouTubePlayerAPIReady() {
    frame = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: srcSmoll,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  } //autoplay video


  function onPlayerReady(event) {
    event.target.playVideo();
  } // Stop video


  function onPlayerStateChange(event) {
    if (event.data === 0) {
      unlockVideo();
    }
  }
}

module.exports = video;

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var slider = __webpack_require__(/*! ./parts/slider */ "./parts/slider.js"),
      addcard = __webpack_require__(/*! ./parts/addcard */ "./parts/addcard.js"),
      upcard = __webpack_require__(/*! ./parts/upcard */ "./parts/upcard.js"),
      mask = __webpack_require__(/*! ./parts/mask */ "./parts/mask.js"),
      ban = __webpack_require__(/*! ./parts/ban */ "./parts/ban.js"),
      form = __webpack_require__(/*! ./parts/form */ "./parts/form.js"),
      video = __webpack_require__(/*! ./parts/video */ "./parts/video.js"),
      accordion = __webpack_require__(/*! ./parts/accordion */ "./parts/accordion.js"),
      download = __webpack_require__(/*! ./parts/download */ "./parts/download.js");

  slider();
  addcard();
  upcard();
  mask();
  ban();
  form();
  video();
  accordion();
  download();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map