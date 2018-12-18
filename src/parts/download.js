function download() {
    //-----------------------------------------------------------------------------------------------
    // File download

    let fileDownload = document.querySelectorAll('.download'),
        blockFile = document.querySelectorAll('.page > div');

    if (!blockFile.length) {
        for (let i = 0; i < fileDownload.length; i++) {
            let blockDownload = document.createElement("a");
            fileDownload[i].parentNode.insertBefore(blockDownload, fileDownload[i]);
            blockDownload.appendChild(fileDownload[i]);
            blockDownload.setAttribute('download', '');
            blockDownload.setAttribute('href', './Hello.pdf');
            blockDownload.style.display = 'table';
              
        }
    }
}

module.exports = download;