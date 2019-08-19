class RegularExpression {

    constructor() {}

    static UrlMatch(url) {
        let expression = /(ht|f)tp(s?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
        let expObj = new RegExp(expression);
        return expObj.test(url);
    }

    static EmailMatch(email) {
        let expression = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
        let expObj = new RegExp(expression);
        return expObj.test(email);
    }
}