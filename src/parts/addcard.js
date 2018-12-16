function addcard() {
    //---------------------------------------------------------------------------
    //Add card

    let addItemLeft = 1,
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
        let newDiv = document.createElement('div');
        newDiv.className = "officer__card-item";
        newDiv.innerHTML = `<div class="card__counter">0${addItemLR}</div><div class="card__descr">${addText[addItemLR - 1]} step with some text and explanation</div>`;
        officer.insertBefore(newDiv, officer.children[addItemLR]);
        if (addItemLR === 3) {
            officer.removeChild(document.querySelectorAll(`.${classItem} .officer__card-item`)[3]);
        }
    }
}

module.exports = addcard;