(() => {
    let exampleOptionObj = {
        type: 'get',
        contentType: 'application/json; charset = utf-8',
        dataType: 'json',
        url: 'http://www.xmiata.com/',
        data: {},
        options: ''
    };
    function ajax(opt) {
        opt = opt || {};
        opt.type = (opt.type || 'GET').toUpperCase();
        opt.dataType = opt.dataType || 'json';
        let params;
        // let params = formatParams(opt.data);
        let xhr;
        // 初始化XMLHTTPRequest实例(init XmlHttpRequest instance)
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }
        if (opt.type === 'GET') {
            xhr.open(opt.type, opt.url + '?' + params, true);
            xhr.send(null);
        } else {
            xhr.open(opt.type, opt.url, true);
            xhr.setRequestHeader('Content-Type', opt.header);
            xhr.send(params); // params = opt.type === 'Get' ? null : params; typeof params === 'string'.
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let status = xhr.status;
                if (status >= 200 && status <= 300) {
                    opt.success
                }
            }
        }
    }
})();