class RegularExpression {

    constructor() {}

    static UrlMatch(url) {
        let expression = /(ht|f)tp(s?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
        let expObj = new RegExp(expression);
        let flag = expObj.test(url);
        return flag;
    }
}