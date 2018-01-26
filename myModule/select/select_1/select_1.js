$(document).ready(function () {

    var beijing = ['东城区','西城区','朝阳区','朝海淀区','dd','石景山区','门头沟区','朝丰台区','通州区','顺义区','朝丰台区','大兴区','怀柔区','平谷区','密云区','延庆区'];
    var shanghai = ['黄浦区','徐汇区','长宁区'];
    var fuzi = {
        'level1':{
            level1_1:['东邪','西毒','南帝','北丐'],
            level1_2:{
                level1_2_1:['aa','bb','cc','dd']
            }
        },
        'level2':['华山','泰山','衡山','恒山','嵩山'],
        'level3':{
            level3_2:['华山','泰山','衡山','恒山','嵩山'],
            level3_1:{
                level3_1_1:['aa','bb','cc','dd']
            }
        }
    };

    var obj = {
        ops:shanghai,
        placeholder:'这是holder',
        isRequired:true,
        isMultiple:true,
    };

    var kk = {
        ops:fuzi,
        placeholder:'可以自己配置的placeholder~~~',
        isMultiple:true
    };

    $('.aaa').initSelect(obj);
    $('.bb').initSelect(obj).css('color','red');

    // console.log(kk);
    $('.cc').initSelect(kk).css('color','green');





});




