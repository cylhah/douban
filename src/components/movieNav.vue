<template>
    <div class="movieNav">
        <div class="main">
            <div class="searchBox">
                <div class="title">
                    <a href="#/movie"><img :src="'./static/img/doubandy.png'"></a>
                </div>
                <div class="search"> 
                    <div class="searchDiv">
                        <input type="text" placeholder="搜索电影、电视剧、综艺、影人" v-model="searchText">
                        <div class="searchIcon"><i class="el-icon-search"></i></div>
                    </div>
                </div>
            </div>
            <div class="navbar">
                <nav class="nav">
                    <a href="">我看</a>
                    <a href="">影讯&amp;购票</a>
                    <a href="">选电影</a>
                    <a href="">电视剧</a>
                    <a href="">排行榜</a>
                    <a href="">分类</a>
                    <a href="">影评</a>
                    <a href="">2017年度榜单</a>
                    <a href="">2017观影报告</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchText: ''
        }
    }
}
</script>

<style lang="scss" scoped>
$bgColor: rgb(240,243,245);
$titleColor: rgb(55,150,209);
.movieNav{
    width: 100%;
    background-color: $bgColor;
}
.movieNav::after{
    content: '';
    width: 98%;
    position: absolute;
    border-bottom: 1px solid rgb(231, 235, 236);
    top: 100px;
    left: 1%;
}
.main{
    position: relative;
    margin: 0 auto;
    width: 1068px;
}
.searchBox{
    display: flex;
    padding: 15px 0;
}
.title{
    padding-top: 6px;
}
.search{
    width: 540px;
    position: relative;
    left: 40px;
}
.searchDiv{
    input{
        padding: 9px 9px 8px 15px;
        border: 0px;
        width: 455px;
        border-bottom: 1px solid rgb(199, 195, 195);
        border-radius: 5px 0 0 5px;
        outline: none;
    }
}
.searchIcon{
    position: relative;
    cursor: pointer;
    display: inline-block;
    left: -8px;
    font-size: 18px;
    padding: 7px 9px;
    background: rgb(142, 152, 160);
    color: white;
    border-radius: 0 5px 5px 0;
}
@media screen and (max-width: 1068px){
    .movieNav{
        width: 1068px;
    }
}
.navbar{
    margin: 10px 0;
    padding: 11px 0;
}
.nav{
    a{
        margin-right:19px;
        font-size: 15px;
        text-decoration: none;
        color: rgb(34, 119, 170);
        &:hover{
            background: rgb(34, 119, 170);
            color: white;
        }
    }
}
</style>


