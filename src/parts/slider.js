function slider() {
    // Big slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.page > div'),
        modules = document.querySelectorAll('.module'),
        logo = document.querySelectorAll('.sidecontrol a'),
        next = document.querySelectorAll('.nextmodule'),
        prev = document.querySelectorAll('.prevmodule');

    showSlides(slideIndex);

    function showSlides(n) {
        if (!slides.length) {
            modules.forEach((item) => item.style.display = 'none');
            modules[slideIndex - 1].style.display = 'block';
        } else {
            slides.forEach((item) => item.style.display = 'none');
            slides[slideIndex - 1].style.display = 'block';

        }
    }

    function plusSlides(n) {
        showSlides(Number(slideIndex += n));
    }

    // Slider Loan and modules left

    for (let i = 1; i <= logo.length; i = i + 2) {

        logo[i].addEventListener('click', function () {
            (i + 1 == logo.length) ? showSlides(slideIndex = 1): plusSlides(1);
        });

        logo[i - 1].addEventListener('click', function () {
            (!slides.length) ? document.location.replace("./index.html"): showSlides(slideIndex = 1);
            sessionStorage.clear();
        });
    }

    //Slider modules bottom

    for (let i = 1; i <= next.length; i++) {

        next[i - 1].addEventListener('click', function () {
            (i == next.length) ? showSlides(slideIndex = 1): plusSlides(1);
        });

        prev[i - 1].addEventListener('click', function () {
            (i == 1) ? showSlides(slideIndex = next.length): plusSlides(-1);
        });
    }

    // Slider Box

    function sliderBox(box, prev, next, classActive, flag, numFlag) {
        if (!slides.length) {} else {
            if (flag) {
                logo[numFlag].addEventListener('click', function () {
                    let timerId = setTimeout(function tick() {
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
            box.appendChild(box.children[0]);
        }

        function clickPrev() {
            box.insertBefore(box.children[box.children.length - 1], box.children[0]);
        }
    }

    // Slider Loan bottom

    let showupSlider = document.querySelector('.showup__content-slider'),
        bottomSlider = document.querySelector('.showup__content-slider'),
        slickPrev = document.querySelector('.slick-prev'),
        slickNext = document.querySelector('.slick-next');

    if (!slides.length) {} else {
        styleСhangeSlider(showupSlider);
    }

    sliderBox(bottomSlider, slickPrev, slickNext, 'card-active');

    // Slider third page

    let modulesSlider = document.querySelector('.modules__content-slider'),
        slickPrevTwo = document.querySelector('.modules__info-btns .slick-prev'),
        slickNextTwo = document.querySelector('.modules__info-btns .slick-next'),
        boxSliderTwo = document.querySelector('.modules__content-slider');

    if (!slides.length) {} else {
        styleСhangeSlider(modulesSlider);
    }

    sliderBox(boxSliderTwo, slickPrevTwo, slickNextTwo, 'card-active', true, 3);


    // Slider five page

    let feedSlider = document.querySelector('.feed__slider'),
        slickPrevThree = document.querySelector('.button .slick-prev'),
        slickNextThree = document.querySelector('.button .slick-next'),
        boxSliderThree = document.querySelector('.feed__slider');

    if (!slides.length) {} else {
        styleСhangeSlider(feedSlider);
    }

    sliderBox(boxSliderThree, slickPrevThree, slickNextThree, 'feed__item-active');


    function styleСhangeSlider(changeItem) {
        changeItem.style.display = '-webkit-box';
    }

    //--------------------------------------------------------------------
    // Go to another page

    let plusContent = document.querySelector('.plus__content');
    if (!slides.length) {} else {
        plusContent.addEventListener('click', function () {
            document.location.replace("./modules.html");
        });
    }

    //----------------------------------------------------------------------
    // Add links slider to module

    let cardLink = document.querySelectorAll('.showup__content-slider .card'),
        moduleLink = document.querySelectorAll('.modules__content-slider .card');

    function addLink(link) {

        for (let i = 0; i < link.length; i++) {

            link[i].href = `./modules.html`;
            link[i].addEventListener('click', function () {

                sessionStorage.setItem('myKey', i);

            });
        }
    }

    addLink(cardLink);
    addLink(moduleLink);


    window.onload = function () {
        slideIndex = Number(sessionStorage.getItem('myKey'));
        if (!slides.length) {
            modules.forEach((item) => item.style.display = 'none');
            modules[slideIndex].style.display = 'block';
        }
        slideIndex = slideIndex + 1;
    };

}

module.exports = slider;