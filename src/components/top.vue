<template>
    <div class="top">
        <nav class="navbar">
            <a href="/">豆瓣</a>
            <a href="/">读书</a>
            <a href="#/movie">电影</a>
            <a href="/">音乐</a>
            <a href="/">同城</a>
            <a href="/">小组</a>
            <a href="/">阅读</a>
            <a href="/">FM</a>
            <a href="/">时间</a>
            <a href="/">豆品</a>
            <a href="/">更多</a>
            <div class="navright">
                <a href="https://www.douban.com/doubanapp/frodo?channel=top-nav&referer=https%3A%2F%2Fmovie.douban.com%2Fsubject%2F25849049%2F%3Ffrom%3Dshowing&wechat=0&os=Windows+7"
                    @mouseover="show = true;start = false"
                    @mouseout="show = false">下载豆瓣客户端</a>
                <a href="/">登录</a>
                <a href="/">注册</a>
            </div>
        </nav>
        <div class="download" @mouseover="show = true;start = false" 
        @mouseout="show = false"
        :class="{invisible:start,close:!show}">
            <div class="logo">
                <img :src="'./static/img/douban.png'"> 
                <p>豆瓣</p>
                <img :src="'./static/img/douban_qrcode.png'">
                <p class="bot">
                    <a href="https://itunes.apple.com/cn/app/dou-ban/id907002334">iPhone</a>
                    <span>·</span>
                    <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=Android">Android</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            start: true
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
$bgColor: rgb(84,86,82);
$fontColor: rgb(213,213,213);
@keyframes close {
    100%{
        visibility: hidden;
    }
}
.close{
    animation: close 0.5s forwards;
}
.invisible{
    visibility: hidden;
}
.top{
    position: relative;
    width: 100%;
    background-color: $bgColor;
    .navbar{
        a{
            color: $fontColor;
            display: inline-block;
            text-decoration: none;
            font-size: 12px;
            margin: 7px 8px;
            &:hover{
                color: white;
            }
        }
        .navright{
            display: inline-block;
            position: absolute;
            right: 10px;
        }
    }
    .download{
        position: absolute;
        right: 30px;
        width: 211px;
        padding: 21px;
        background: white;
        border: 1px solid rgb(230, 223, 223);
        .logo{
            text-align: center;
            p{
                font-size: 25px;
            }
            .bot{
                font-size: 14px;
                a{
                    text-decoration: none;
                    color: rgb(51, 119, 170);
                }
            }
        }
    }
}
@media screen and (max-width: 1068px){
    .top{
        width: 1068px;
    }
}
</style>



