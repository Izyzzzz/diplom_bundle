function ban() {
    //----------------------------------------------------------------
    // Ban cyrillic email

    let inputEmail = document.querySelectorAll('input[type="email"]');

    for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].addEventListener("input", function () {
            this.value = inputEmail[i].value.replace(/[^0-9a-zA-Z-@._]+/gi, "");
        });
    }


    //----------------------------------------------------------------
    // Ban letters and signs

    let inputWhen = document.querySelector('input[type="datetime"]'),
        blockBan = document.querySelectorAll('.page > div');

    if (!blockBan.length) {} else {
        inputWhen.addEventListener("input", function () {
            this.value = inputWhen.value.replace(/[^0-9/.]+/gi, "");
        });
    }
}

module.exports = ban;