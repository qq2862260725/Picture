function showPreview(source, imgId) {
    var file = source.files[0];
    
    if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) {
        return;
    }

    if(window.FileReader) {
        var fr = new FileReader();
        fr.onloadend = function(e) {
            document.getElementById(imgId).src = e.target.result;
        }
        fr.readAsDataURL(file);
    }
}