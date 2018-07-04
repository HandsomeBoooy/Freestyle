(() => {
    'use strict'
    // let j = '', s = '';
    let numJewelsInStones = (a, b) => {
        let resNum = 0;
        for (let char of b) { resNum += a.indexOf(char) > -1 ? 1 : 0; }
        return resNum;
    }
    let res = numJewelsInStones('i', 'Miata');
    console.log(res);
})()