window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let slider = require('./parts/slider'),
        addcard = require('./parts/addcard'),
        upcard = require('./parts/upcard'),
        mask = require('./parts/mask'),
        ban = require('./parts/ban'),
        form = require('./parts/form'),
        video = require('./parts/video'),
        accordion = require('./parts/accordion'),
        download = require('./parts/download');

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