function upcard() {
    //------------------------------------------------------------
    // The appearance of the card

    let hanson = document.querySelector('.hanson'),
        blockApp = document.querySelectorAll('.page > div'),
        logo = document.querySelectorAll('.sidecontrol a');
    if (!blockApp.length) {} else {

        hanson.style.display = 'none';

        logo[3].addEventListener('click', function () {
            setTimeout(function () {
                hanson.style.display = 'block';
                hanson.animate([{
                        transform: 'translateX(-500px)'
                    },
                    {
                        transform: 'translateX(0px)'
                    }
                ], 500);
            }, 3000);
        });

        logo[5].addEventListener('click', function () {
            hanson.style.display = 'none';
        });
    }

}

module.exports = upcard;