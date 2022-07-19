function dianZan(){
    let dianZanShuBiaoQian = window.document.getElementById('dzs');
    //通过浏览器自带的标签选择器函数获取到dianZanShu标签，放在dzs是这个dianZanShuBiaoQian中；
    let dianZanShu = parseInt(dianZanShuBiaoQian.innerText);
    //声明一个dianZanShu数据，数据的值为 标签中的被parseInt函数转化而来的数字 （parseInt将标签中的文字转化成数字） 
    let xinShuZi = dianZanShu +1; 
    // 声明一个xinShuZi数据，数据的值为dianZanShu +1
    dianZanShuBiaoQian.innerText = xinShuZi
    //让dianZanShuBiaoQian中的文字 等于 xinShuzi
   return
} 