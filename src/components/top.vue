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
                <a href="javascript:void(0)" v-if="user.userName">提醒</a>
                <a href="javascript:void(0)" v-if="user.userName">豆邮</a>
                <a href="javascript:void(0)" v-if="user.userName" @focus="showUserMenu = true"
                @blur="showUserMenu = false">{{user.userName}}的帐号<span>▼</span></a>
                <a href="javascript:void(0)" v-if="!user.userName" @click="login({userId: 1,userName: '桑生'})">登录</a>
                <a href="/" v-if="!user.userName">注册</a>
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
        <div class="userMenu" :class="{visible: showUserMenu}">
            <p><a :href="`#/user/${user.userId}`">个人主页</a></p>
            <p><a href="">我的订单</a></p>
            <p><a href="">我的钱包</a></p>
            <p><a href="">帐号管理</a></p>
            <p><a href="javascript:void(0)" @click="logout">退出</a></p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            start: true,
            user: {
                userId: undefined,
                userName: ''
            },
            showUserMenu: false
        }
    },
    methods: {
        login(user){
            for(let i in user){
                this.setCookie(i,user[i],30)
            }
        },
        logout(){
            this.delCookie('userId','',-1)
            this.delCookie('userName','',-1)
            this.user.userId = undefined
            this.user.userName = ''
        },
        initUser(){
            this.user.userId = this.getCookie('userId')
            this.user.userName = this.getCookie('userName')
        },  
        setCookie(key,value,days){
            let exdate = new Date()
            exdate.setDate(exdate.getDate()+days)
            document.cookie = `${key}=${escape(value)};expires=${exdate.toUTCString()}`
        },
        getCookie(key){
            let reg = new RegExp("(^| )"+key+"=([^;]*)(;|$)")
            let arr = document.cookie.match(reg)
            if(arr){
                return unescape(arr[2])
            }
            else {
                return ''
            }
        },
        delCookie(key){
            this.setCookie(key,'',-1)
        }
    },
    created(){
        this.initUser()
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
.userMenu{
    position: absolute;
    visibility: hidden;
    transition-property: visibility;
    transition-duration: 0.5s;
    z-index: 5;
    right: 0;
    background: white;
    border: 1px solid rgb(223, 219, 219);
    p{
        margin: 7px 0;
        padding: 0 20px 5px 20px;
        &:hover{
            background: rgb(246, 246, 246);
        }
        a{
            text-decoration: none;
            color: #3d3d3d;
            font-size: 13px;
        }
    }
}
.invisible{
    visibility: hidden;
}
.visible{
    visibility: visible;
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
            span{
                font-size: 8px;
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
        z-index: 5;
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



