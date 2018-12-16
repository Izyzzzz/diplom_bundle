function form() {
    //------------------------------------------------------------------------
    // Form
    let blockForm = document.querySelectorAll('.page > div');

    if (!blockForm.length) {} else {
        let inputAll = document.querySelectorAll('input');

        inputAll[0].setAttribute("name", "name");
        inputAll[1].setAttribute("name", "profession");
        inputAll[2].setAttribute("name", "email");
        inputAll[3].setAttribute("name", "phone");
        inputAll[4].setAttribute("name", "name");
        inputAll[5].setAttribute("name", "email");
        inputAll[6].setAttribute("name", "when");

        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...',
            phone: 'Слишком мало символов в телефоне.'
        };

        let form = document.querySelector('.join__evolution .form'),
            formCont = document.querySelector('.schedule__form .form'),
            statusMessage = document.createElement('div');

        statusMessage.classList.add('status');


        function sendForm(elem, numElem) {
            elem.addEventListener('submit', function (e) {
                e.preventDefault();
                let formInputTwo = elem.getElementsByTagName('input');
                let flag = false;

                (formInputTwo[numElem].value.replace(/\D/g, "").length > 10 || numElem === 0) ? flag = true: flag = false

                if (flag) {
                    elem.appendChild(statusMessage);

                    let formData = new FormData(elem);

                    function postData(data) {
                        return new Promise(function (resolve, reject) {
                            let request = new XMLHttpRequest();

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
                    }

                    function clearInput() {
                        for (let i = 0; i < formInputTwo.length; i++) {
                            formInputTwo[i].value = '';
                        }
                    }

                    postData(formData)
                        .then(() => statusMessage.innerHTML = message.loading)
                        .then(() => statusMessage.innerHTML = message.success)
                        .catch(() => statusMessage.innerHTML = message.failure)
                        .then(clearInput);
                } else {
                    elem.appendChild(statusMessage);
                    statusMessage.innerHTML = message.phone;
                }

            });
        }

        sendForm(form, 3);
        sendForm(formCont, 0);
    }
}

module.exports = form;