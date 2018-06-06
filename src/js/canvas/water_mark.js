class CanvasWaterMark {
    constructor() {}

    // 生成水印
    generateWaterMark(className, image, str) {
        let canv = document.createElement('canvas');
        let canvasContainer = document.getElementsByClassName(className)[0];
        canv.width = 40;
        canv.height = 30;
        canv.style.display = 'none';
        canv.style.cssFloat = 'left';
        let cant = can.getContext('2d');
        cant.font = "10px Microsoft JhengHei";
        cant.fillStyle = "rgba(50, 50, 50, 0.4)";
        cant.textAlign = 'left';
        cant.textBaseline = 'Middle';
        if (image && ((str === null) || (str === undefined))) {
            cant.drawImage(image, 0, 0);
        } else {
            cant.fillText(str, 0, 0);
        }
    }
}