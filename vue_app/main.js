/*
* 2018/1/21 by han jun yi
* lazy yang is sleeping now~
*
* -------        -_-#     ------------
*
* */

import home from 'views/home'


// var home = { template: '<p>老子是首页</p>' };
// var list = { template: '<p>啊啊啊啊的</p>' };
// var mine = { template: '<p>w 的 多岁的 found</p>' };

var routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/list', component: list },
    { path: '/mine', component: mine }
];

var router = new VueRouter({
    routes:routes // （缩写）相当于 routes: routes
});

var app = new Vue({
    // el:,
    router:router

}).$mount('#app');





    // var data1 = [
    //     {
    //         id:'0001',
    //         title:'凭业务能力；唠唠圈粉',
    //         detail:'版权归作者所有，任何形式转载请联系作者。\n' +
    //         '作者：Lens（来自豆瓣）\n' +
    //         '来源：https://www.douban.com/note/653803322/\n' +
    //         '\n' +
    //         '18岁时，通过一则招募歌手的广告，Dolores加入了The Cranberries Saw Us 乐队。此后乐队更名，以The Cranberries的名字发表了第一张专辑。当时，乐队中最年轻的成员只有16岁。\n' +
    //         '\n' +
    //         '最开始，Dolores留着长直的黑发，有时甚至戴着金色假发演出。但经过了第一次美国巡演，看到太多金发歌手的Dolores决定将头发剪掉。\n' +
    //         '\n' +
    //         '极富个性的短发，从此成了她和小红莓乐队的标志。',
    //         type:'豆瓣读书'
    //     },
    //     {
    //         id:0002,
    //         title:'期末考到了，本命年什么的，都可以往后放放',
    //         detail:'版权归作者所有，任何形式转载请联系作者。\n' +
    //         '作者：刮刮油（来自豆瓣）\n' +
    //         '来源：https://www.douban.com/note/653479172/\n' +
    //         '\n' +
    //         '但是，如果你家里正好有一个上小学三四年级的孩子，又到了期末，那么那些旧说法都不算事了。前者的坎儿至少你会选择去躲开、去注意，民间上也有一些比较传统魔幻法子化解——化解效果不重要，关键是给人有法可依的踏实；而后者就凶险得多，无解不说，还有一种明知是坎儿而必须硬头皮迎上去的绝望——找死的感觉你晓得吧？',
    //         type:'豆瓣读书'
    //     },
    //     {
    //         id:0003,
    //         title:'章子怡：一位合格表演者的自定义 | 观影会客',
    //         detail:'版权归作者所有，任何形式转载请联系作者。\n' +
    //         '作者：Lens（来自豆瓣）\n' +
    //         '来源：https://www.douban.com/note/653803322/\n' +
    //         '\n' +
    //         '18岁时，通过一则招募歌手的广告，Dolores加入了The Cranberries Saw Us 乐队。此后乐队更名，以The Cranberries的名字发表了第一张专辑。当时，乐队中最年轻的成员只有16岁。\n' +
    //         '\n' +
    //         '最开始，Dolores留着长直的黑发，有时甚至戴着金色假发演出。但经过了第一次美国巡演，看到太多金发歌手的Dolores决定将头发剪掉。\n' +
    //         '\n' +
    //         '极富个性的短发，从此成了她和小红莓乐队的标志。',
    //         type:'豆瓣读书'
    //     },
    //     {
    //         id:0004,
    //         title:'凭业务能力；唠唠圈粉',
    //         detail:'版权归作者所有，任何形式转载请联系作者。\n' +
    //         '作者：Lens（来自豆瓣）\n' +
    //         '来源：https://www.douban.com/note/653803322/\n' +
    //         '\n' +
    //         '18岁时，通过一则招募歌手的广告，Dolores加入了The Cranberries Saw Us 乐队。此后乐队更名，以The Cranberries的名字发表了第一张专辑。当时，乐队中最年轻的成员只有16岁。\n' +
    //         '\n' +
    //         '最开始，Dolores留着长直的黑发，有时甚至戴着金色假发演出。但经过了第一次美国巡演，看到太多金发歌手的Dolores决定将头发剪掉。\n' +
    //         '\n' +
    //         '极富个性的短发，从此成了她和小红莓乐队的标志。',
    //         type:'豆瓣读书'
    //     },
    //     {
    //         id:0005,
    //         title:'凭业务能力；唠唠圈粉',
    //         detail:'版权归作者所有，任何形式转载请联系作者。\n' +
    //         '作者：Lens（来自豆瓣）\n' +
    //         '来源：https://www.douban.com/note/653803322/\n' +
    //         '\n' +
    //         '18岁时，通过一则招募歌手的广告，Dolores加入了The Cranberries Saw Us 乐队。此后乐队更名，以The Cranberries的名字发表了第一张专辑。当时，乐队中最年轻的成员只有16岁。\n' +
    //         '\n' +
    //         '最开始，Dolores留着长直的黑发，有时甚至戴着金色假发演出。但经过了第一次美国巡演，看到太多金发歌手的Dolores决定将头发剪掉。\n' +
    //         '\n' +
    //         '极富个性的短发，从此成了她和小红莓乐队的标志。',
    //         type:'豆瓣读书'
    //     },
    //
    // ];
    // NBapp.mainData = data1;











