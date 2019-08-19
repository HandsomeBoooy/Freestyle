class Transfer {
    
    constructor() {}

    // 多位数转换为汉字
    static NumberTransferToCharacters(num) {
        var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
        var chnUnitChar = ["", "十", "百", "千"];
    
        var unitPos = 0, thousandsUnit = 0;
        var strIns = '', chnStr = '';
        var num_origin = num.toString();    
        var zero = true;
        while (num > 0) {
            var v = num % 10;
            if (v === 0) {
                if (!zero) {
                    zero = true;
                    chnStr = chnNumChar[v] + chnStr;
                }
            } else {
                zero = false;
                thousandsUnit = Math.floor(unitPos / 4);
                strIns = chnNumChar[v];
                if (thousandsUnit && !(unitPos % 4)) {
                    strIns += chnUnitSection[thousandsUnit];
                } else {
                    strIns += chnUnitChar[(unitPos % 4)];
                }
                chnStr = strIns + chnStr;
            }
            unitPos++;
            num = Math.floor(num / 10);
        }
        if (num_origin[0] == 1 && num_origin.length === 2) {
            chnStr = chnStr.substring(1);
        }
        return chnStr;
    }
}