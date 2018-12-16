function accordion() {

    //------------------------------------------------------------------------------------------------
    // Accordion small

    let moduleInfo = document.querySelectorAll('.module__info'),
        blockAccordion = document.querySelectorAll('.page > div');
    if (!blockAccordion.length) {
        let plusContentModuls = document.querySelectorAll('.plus__content');
        for (let i = 0; i < plusContentModuls.length; i++) {
            let newModuleText = document.createElement('div');
            newModuleText.className = "module__info-show-text";
            newModuleText.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
            moduleInfo[i].insertBefore(newModuleText, moduleInfo[i].children[5]);

            plusContentModuls[i].addEventListener('click', function () {
                newModuleText.classList.toggle("text_out");

            });
        }
    }
}

module.exports = accordion;