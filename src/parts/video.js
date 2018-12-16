function video() {

    //------------------------------------------------------------------
    //Video demonstration

    let play = document.querySelectorAll('.play'),
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



    for (let i = 0; i < play.length; i++) {
        play[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            srcSmoll = play[i].dataset.url.slice(30);
            onYouTubePlayerAPIReady();
        });
    }

    for (let i = 0; i < lockPlay.length; i++) {
        lockPlay[i].style.display = 'none';
    }

    function blockVideo() {
        if (!blockDemo.length) {
            for (let i = 1; i < play.length; i = i + 2) {
                play[i].style.pointerEvents = 'none';
            }

            for (let i = 1; i < moduleVideoItem.length; i = i + 2) {
                moduleVideoItem[i].style.opacity = '.4';
                moduleVideoItem[i].style.filter = 'grayscale(100%)';
                moduleVideoItem[i].children[1].children[0].classList.add('closed');
                moduleVideoItem[i].children[1].children[1].classList.add('attention');
            }
            for (let i = 0; i < lock.length; i++) {
                lock[i].style.display = 'block';
                lockPlay[i].style.display = 'none';
            }
        }
    }

    // blockVideo();

    for (let i = 1; i <= logoVideo.length; i = i + 2) {

        logoVideo[i].addEventListener('click', function () {
            blockVideo();
        });
    }

    for (let i = 1; i <= nextVideo.length; i++) {

        nextVideo[i - 1].addEventListener('click', function () {
            blockVideo();
        });

        prevVideo[i - 1].addEventListener('click', function () {
            blockVideo();
        });
    }

    function unlockVideo() {
        for (let i = 1; i < play.length; i = i + 2) {
            play[i].style.pointerEvents = 'unset';
        }
        for (let i = 1; i < moduleVideoItem.length; i++) {
            moduleVideoItem[i].style.opacity = '1';
            moduleVideoItem[i].style.filter = 'grayscale(0)';
            moduleVideoItem[i].children[1].children[0].classList.remove('closed');
            moduleVideoItem[i].children[1].children[1].classList.remove('attention');
        }
        for (let i = 0; i < lock.length; i++) {
            lock[i].style.display = 'none';
            lockPlay[i].style.display = 'block';
        }
    }

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        frame.destroy();
    });


    //---------------------------------------------------------------------------------------------
    // Video Youtube player api

    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let frame;

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
    }

    //autoplay video
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // Stop video
    function onPlayerStateChange(event) {
        if (event.data === 0) {
            unlockVideo();
        }
    }


}

module.exports = video;