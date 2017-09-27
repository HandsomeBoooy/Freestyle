/**
 * Created by XingLiu on 2017/6/30.
 */
class Freestyle{
    constructor() {

    }
}

//plugin used as DOM-attribution title
class Plugin_title{
    constructor() {

    }
    init(elementId, content, mouseOn_time, autoDisappear, disappearTime) {
        autoDisappear = (autoDisappear === undefined || autoDisappear === null) ? false : autoDisappear;
        disappearTime = (disappearTime === undefined || disappearTime === null) ? false : disappearTime;

        let ele = document.getElementById(elementId);
        //todo
        //define a function to bind the mouseon events
    }
}

class util{
    constructor () {

    }

    clickInWindow () {
        (function () {
            setInterval(function () {
                $('body')
            }, 570000)
        })();
    }
}
