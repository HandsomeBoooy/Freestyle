class RegularExpression {

    constructor() {}

    static UrlMatch(url) {
        let expression = /(ht|f)tp(s?):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
        let expObj = new RegExp(expression);
        return expObj.test(url);
    }

    static EmailMatch(email) {
        let expression = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
        let expObj = new RegExp(expression);
        return expObj.test(email);
    }

    static PhoneMatch(phone) {
        let cellphoneExpression = /^(0|86|17951)?(13[0-9]|14[5678]|15[0-9]|166|17[0135678]|18[0-9]|19[189])[0-9]{8}$/;
        let telephoneExpression = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
        let cellphoneExpObj = new RegExp(cellphoneExpression);
        let telephoneExpObj = new RegExp(telephoneExpression);
        return (cellphoneExpObj.test(phone) || telephoneExpObj.test(phone));
    }
}