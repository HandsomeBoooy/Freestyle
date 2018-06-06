class ImageTransformer {
    constructor() {}

    static fileToBase64(imgFile, target, callback) {
        let reader = new FileReader();
        reader.readAsDataURL(imgFile.raw || imgFile);
        reader.onload = () => {
            target = reader.result;
            if (callback) { callback() }
        }
    }

    static urlToBase64InCanvas(url, target, callback, quality, type) {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            let context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, img.width, img.height);
            let dataUrl = canvas.toDataURL(type || 'image/jpeg', quality || 0.92);
            target = dataUrl;
            if (callback) { callback() }
            canvas.parentNode.removeChild(canvas);
        }
    }
}