let html = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `
/*你好，我是一个刚开始学前端的新人
*接下来我要试着写换行的文本
*试试能不能换行显示
*这是一个div样式*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*然后让这个div变成一个黑色的圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*现在开始做一个左白右黑的圆圈,
*然后再加两个圆，以及圆中心的圆环；
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
    ;
let string2 = '';
let n = 1;
let step = () => {
    setTimeout(() => {
        if (string[n - 1] === '\n') { string2 += '<br>' }
        else if (string[n - 1] === ' ') {
            string2 += '&nbsp;';
        }
        else { string2 += string[n - 1] }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 8888);//用一个很大的数来保持页面处于最新的位置。
        demo.scrollTo(0, 8888);
        n = n + 1;
        if (n <= string.length) {
            step();
        }
    }, 0)
}
step();