(() => {
    let self = this;
    this.addEventListener('message', (e) => {
        console.log(e.data);
        self.postMessage('Copy. ----- From No.1');
    }, false);
})();