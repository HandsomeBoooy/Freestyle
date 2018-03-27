class ClipboardPrevent {
    constructor() {}

    // 禁用 Ctrl + C 复制（兼容Chrome和IE）
    preventCopy() {
        document.oncopy = function(e) {
            e.preventDefault();
            let clipboardData = window.clipboardData || e.clipboardData;
            clipboardData.clearData();
        }
    }
}