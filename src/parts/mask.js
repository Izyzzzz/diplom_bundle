function mask() {
//------------------------------------------------------------
    //Mask

    let input = document.querySelector('#phone'),
        blockMask = document.querySelectorAll('.page > div'),
        mask = "+1 (___) ___-____";

    if (!blockMask.length) {} else {
        input.addEventListener("input", putMask);
    }

    function putMask() {
        let i = 0,
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