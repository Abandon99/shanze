/*var myFunc = {
    Calculate:function () {

    var time1 = new Date('2018/6/14 00:00:00:000').getTime();
    var time2 = new Date().getTime();
    var time = new Date(time1-time2);

    var year = time.getFullYear()-1970;
    var month = time.getMonth()+1;
    var day = time.getDate();

    var hour = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();

    var date = year+'年'+month+'月'+day+'日'+' '+hour+'时'+minutes+'分'+second+'秒';

    $('body').html(date);
    date.replace(/年/g,'-');
    console.log(date);
        },
    // calculate();
    // setInterval(calculate,1000)
    uniq:function (arr) {
    var newArr = [];
    var obj = {};

    for(var i=0;i<arr.length;i++){
        obj[arr[i]]=''
    }
    for(var item in obj){
        newArr.push(item)
    }
    return newArr
    }
}
*/

(function ($) {
    //Array.forEach implementation for IE support..
    //https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }
            var O = Object(this);
            var len = O.length >>> 0; // Hack to convert O.length to a UInt32
            if ({}.toString.call(callback) != "[object Function]") {
                throw new TypeError(callback + " is not a function");
            }
            if (thisArg) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }

    
    $.fn.extend({
        initSelect:function (obj) {

            var ops = obj.ops;
            var placeholder = obj.placeholder || '请选择';
            var isRequired = obj.isRequired || false;
            var isMultiple = obj.isMultiple || false;
            var typeOf_ops = Object.prototype.toString.call(ops);

            var $this = $(this);

            var selected = this.selected = {};


            if(typeOf_ops !== '[object Array]' && typeOf_ops !== '[object Object]'){
                console.log('传入项需是一个 Array 或 Object ');
                return false
            }

            $this.append('<div class="select-search">\n' +
                '    <div class="choose">'+'<span class="place">'+placeholder+'</span>'+'</div>\n' +
                '<div class="box">'+
                '    <div class="option">\n' +
                '        <input type="text">\n' +
                '   </div>\n' +
                '</div>'+
                '</div>');

            if(typeOf_ops === '[object Array]'){//单级option
                ops.forEach(function (val) {
                    $this.find('.option').append('<div>'+val+'</div>')
                });
            }
            if(typeOf_ops === '[object Object]'){//分级option
                var x,y;
                var fen =function (ops) {
                    for(var key in ops){
                        if (Object.prototype.toString.call(ops[key])==='[object Object]'){
                            $this.find('.option').append('<div>'+key+'</div>');
                            fen(ops[key])
                        }else{
                            $this.find('.option').append('<div>'+key+'</div>');
                            ops[key].forEach(function (val) {
                                        $this.find('.option').append('<div style="padding-left: 30px">'+val+'</div>')
                                    })
                        }
                    }
                };
                fen(ops)
            }
            // for(var key in ops){
            //     $this.find('.option').append('<div disabled>'+key+'</div>');
            //     ops[key].forEach(function (val) {
            //         $this.find('.option').append('<div style="padding-left: 30px">'+val+'</div>')
            //     })
            // }



            /*----------------------------------*/
            /*------------事件---------_-#------*/
            /*---------------------------------*/

            //添加滚动条
            $this.find('.option').niceScroll({
                cursorcolor: "#dcdee0", //滚动条的颜色
                cursoropacitymax: 1, //滚动条的透明度，从0-1
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //滚动条的宽度
                cursorborder: "0", // 游标边框css定义
                cursorborderradius: "4px", //以像素为光标边界半径  圆角
                autohidemode: false, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条
                zindex: "auto", //给滚动条设置z-index值
                railpadding: {
                    top: 10,
                    right: 5,
                    left: 0,
                    bottom: 0
                }, //滚动条的位置
            });

            //模拟失焦
            $('body').click(function () {
                //$('.select-search .option').css('top','-999em')
                $('.option').css('display','none')
            });

            

            $this.find('.option div').on('click',function(){
                $this.find('.place').hide();
                if(isMultiple){//多选
                    var html0 = $(this).html();

                    if (html0 in selected){
                        delete selected[html0];
                        $this.find('.choose').find('span').remove();
                        for(var item in selected){
                            $this.find('.choose').append('<span style="padding-right: 10px">'+item+'</span>');
                        }
                    }else {
                        selected[html0] = '';
                        $this.find('.choose').append('<span style="padding-right: 10px">'+html0+'</span>');
                    }

                }else {//单选
                    var html = $(this).html();
                    $this.find('.choose').find('.place').remove();

                    $this.find('.choose').html('<span style="padding-right: 10px">'+html+'</span>');
                    //$('.option').css('top','-999em');
                    $this.find('.option').slideToggle('fast');
                }

                if ($.isEmptyObject(selected) && isMultiple){
                    $this.find('.choose').append('<span class="place">'+placeholder+'</span>'+'</div>\n')
                }

            	return false
            });

            //show & hide
            $this.on('click',function () {
               $('.option').css('display','none');
               $this.find('.option').slideToggle('fast');


               $('.select-search .choose').css('border','1px solid #cccccc');
               //$(this).find('.option').css('top','32px');
               $(this).find('.choose').css('border','1px solid #80b0f9');
               return false
            });

            var global = {};

            //input搜索
            $this.find('input')
                .on('keyup',function () {

                    if(typeOf_ops === '[object Array]'){//普通搜索

                        var newOps = [];
                        var inputVal = $(this).val();

                        ops.forEach(function (val) {
                            if (val.indexOf(inputVal)>-1 && inputVal!=='') {
                                newOps.unshift(val)
                            }else {
                                newOps.push(val)
                            }
                        });

                        newOps.forEach(function (val,index) {
                            $this.find('.option').children('div').eq(index).html(val)
                        })
                    }else {//分级下拉时的搜索

                        var inputVal1 = $(this).val();
                        var linshiarr = [];

                        if(!global['grading']){
                            global['grading'] = [];
                            $this.find('.option').children('div').map(function (value) {
                                global.grading.push($(this).html())
                            });
                        }


                        global.grading.forEach(function (value) {
                            if (value.indexOf(inputVal1)>-1 && inputVal1!=='') {

                                linshiarr.push(value);

                                $this.find('.option').children('div').remove();

                                linshiarr.forEach(function (val) {
                                    $this.find('.option').append('<div>'+val+'</div>')
                                });

                            }else {
                                // $this.find('.option').children('div').remove();
                                // var fen =function (ops) {
                                //     for(var key in ops){
                                //         if (Object.prototype.toString.call(ops[key])==='[object Object]'){
                                //             $this.find('.option').append('<div>'+key+'</div>');
                                //             fen(ops[key])
                                //         }else{
                                //             $this.find('.option').append('<div>'+key+'</div>');
                                //             ops[key].forEach(function (val) {
                                //                 $this.find('.option').append('<div style="padding-left: 30px">'+val+'</div>')
                                //             })
                                //         }
                                //
                                //     }
                                // };
                                // fen(ops)
                            }
                        })
                    }
            })
                .on('focus click',function () {
                    return false
                });
            

            return this

        }

        });

    })(jQuery);