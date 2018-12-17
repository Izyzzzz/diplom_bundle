function download() {
    //-----------------------------------------------------------------------------------------------
    // File download

    let fileDownload = document.querySelectorAll('.download'),
        blockFile = document.querySelectorAll('.page > div');

    if (!blockFile.length) {
        for (let i = 0; i < fileDownload.length; i++) {
            fileDownload[i].setAttribute('download', '');
            fileDownload[i].addEventListener('click', function () {
                document.location = './Hello.pdf';
            });
        }
    }
}

module.exports = download;