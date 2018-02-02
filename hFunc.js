

(function () {

    var h = {};


    /*----------------------------------------------------
      返回当前（或传参）url的参数，返回值是一个对象。
      没写太精确，比如没有判断传入参数是不是一个url，日后再加吧
      ---------------------------------------------------*/
    h.getUrlParam = function (url) {

        var url =  url ||window.location.href;

        var paramObj = {};

        var paramStr = url.replace(/.*\?/,'');

        var arr = paramStr.split('&');

        arr.forEach(function (val,index) {
            var key = val.replace(/=.*/,'');
            var value = val.replace(/.*=/,'');
            paramObj[key] = value;
        });

        return paramObj
    };

    /*----------------------------------------------------
      是小数还是整数，分别返回true false。
      如果不是数字 也返回false
      ---------------------------------------------------*/
    h.isFloat = function (num) {

        var reg = /\./g;

        if(!num){return}

        if(typeof num !== 'number'){return false}

        return reg.test(num.toString())
    };

    /*----------------------------------------------------
      返回一个指定位数的浮点数
      第一个参数是数字，第二个参数是几位
      ---------------------------------------------------*/
    h.returnFloat = function (num,x) {



    };





    $('.titleContent').click(function () {
        var x = h.isFloat(23);
        console.log(x)
    })


}());