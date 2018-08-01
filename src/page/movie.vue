<template>
    <div class="movie">
        <div>
            <top></top>
        </div>
        <div>
            <movie-nav></movie-nav>
        </div>
        <div class="main">
            <router-view></router-view>
            <div class="footer">
                <div class="left">© 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司</div>
                <div class="right">
                    <nav>
                        <a href="">关于豆瓣</a>
                        <a href="">在豆瓣工作</a>
                        <a href="">联系我们</a>
                        <a href="">免责声明</a>
                        <a href="">帮助中心</a>
                        <a href="">移动应用</a>
                        <a href="">豆瓣广告</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import top from '../components/top.vue'
import movieNav from '../components/movieNav.vue'
export default {
    components: {
        top,movieNav
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: relative;
    margin: 0 auto;
    width: 1068px;
    .footer{
        margin-top: 40px;
        padding: 10px 0;
        border-top: 1px dashed #dfdbdb;
        font-size: 12px;
        div{
            display: inline-block;
        }
        .left{
            color: #999;
        }
        .right{
            float: right;
            a{
                text-decoration: none;
                color: #2277aa;
                &:hover{
                    background: rgb(34, 119, 170);
                    color: white;
                }
            }
        }
    }
}
</style>


