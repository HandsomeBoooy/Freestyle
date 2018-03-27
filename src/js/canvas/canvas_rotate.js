class CanvasRotation {
    constructor() {}

    rotateAroundCenterP(canvas, context, str, image) {
        var x = canvas.width / 2; //画布宽度的一半
        var y = canvas.height / 2; //画布高度的一半
        context.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
        context.translate(x, y); //将绘图原点移到画布中点
        context.rotate((Math.PI / 180) * (-45)); //旋转角度
        context.translate(-x, -y); //将画布原点移动
        context.fillText(str, x * 2 / 3, y * 1.2); //绘制文字
        // context.drawImage(image, 0, 0);//绘制图片
    }
}