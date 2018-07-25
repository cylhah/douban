<template>
    <div class="movieNav">
        <div class="main">
            <div class="searchBox">
                <div class="title">
                    <a href="#/movie">豆瓣电影</a>
                </div>
                <div class="search"> 
                    <el-input placeholder="请输入内容" v-model="searchText">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <div class="navbar">
                <nav></nav>
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
.main{
    position: relative;
    margin: 0 auto;
    width: 1068px;
}
.searchBox{
    display: flex;
    padding: 20px 0;
}
.title{
    a{
        text-decoration: none;
        color: $titleColor;
        font-size: 30px;
        font-weight: bolder;
    }
}
.search{
    width: 518px;
    position: relative;
    left: 20px;
}
@media screen and (max-width: 1068px){
    .movieNav{
        width: 1068px;
    }
}
</style>


