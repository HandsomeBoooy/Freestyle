(() => {
    let counter = 0;
    let r = Math.floor(Math.random() * 1000);
    console.log("r = " + r);
    while (r !== 1) {
        r = (r % 2 === 0 ? (r / 2) : ((3 * r + 1) / 2));
        counter++;
    }
    console.log("counter = " + counter + ", r = " + r);
})()