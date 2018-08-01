<template>
    <div class="hotRecently">
        <div class="title">
            <span>
                最近热门电影
            </span>
            <nav class="nav">
                <a href="javascript:void(0)"
                @click="getHotMovies('top250')">热门</a>
                <a href="javascript:void(0)">最新</a>
                <a href="javascript:void(0)">豆瓣高分</a>
                <a href="javascript:void(0)">冷门佳片</a>
                <a href="javascript:void(0)">华语</a>
                <a href="javascript:void(0)">欧美</a>
                <a href="javascript:void(0)">韩国</a>
                <a href="javascript:void(0)">日本</a>
            </nav>
            <a href="" class="more">
                更多»
            </a>
        </div>
        <div class="movies">
            <el-carousel indicator-position="none"
                        :autoplay="false"
                        arrow="never"
                        height="430px"
                        ref="carousel">
                <el-carousel-item v-for="item in totalPage" :key="item">
                    <div class="movie10">
                        <div v-for="n in 10" :key="n" class="movieDiv" v-if="loaded">
                            <a :href="`#/movie/detail/${movieHot[(item-1)*5+n-1].id}`" class="movieImg"
                            target="_blank"
                            @mouseover="getMovieDeatil($event,(item-1)*5+n-1)"
                            @mouseout="closeMovieDetail">
                                <img :src="getImageUrl(movieHot[(item-1)*5+n-1].images.large)">
                            </a>
                            <p>
                                <a class="movieName" :href="`#/movie/detail/${movieHot[(item-1)*5+n-1].id}`" target="_blank">
                                    {{movieHot[(item-1)*5+n-1].title}}
                                    <span>{{movieHot[(item-1)*5+n-1].rating.average}}</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="menu">
                <a href="javascript:void(0)"
                    @click="decreasePage()"><i class="el-icon-arrow-left"></i></a>
                <i class="iconfont icon-dian" @click="gotoPage(0)" :style="{color: dotObj.dot0}"></i>
                <i class="iconfont icon-dian" @click="gotoPage(1)" :style="{color: dotObj.dot1}"></i>
                <i class="iconfont icon-dian" @click="gotoPage(2)" :style="{color: dotObj.dot2}"></i>
                <i class="iconfont icon-dian" @click="gotoPage(3)" :style="{color: dotObj.dot3}"></i>
                <i class="iconfont icon-dian" @click="gotoPage(4)" :style="{color: dotObj.dot4}"></i>
                <a href="javascript:void(0)"
                    @click="increasePage()"><i class="el-icon-arrow-right"></i></a>
            </div>
        </div>
        <div class="movieInfo" :style="movieDeatilStyle" v-if="getDetail" 
        @mouseover="movieDeatilStyle.visibility = 'visible'"
        @mouseout="movieDeatilStyle.visibility = 'hidden'">
            <div class="center">
                <h4 class="movieTitle">
                    <a :href="`#/movie/detail/${movieDetail.id}`">
                        {{movieDetail.title}} {{movieDetail.original_title}}({{movieDetail.year}})
                    </a>
                </h4>
                <p class="movieRate">
                    <score-show :score="movieDetail.rating.average" class="movieScore"></score-show>
                    <span>( 28614人评价)</span>
                </p>
                <p class="detail">
                    <span class="play">
                        可播放
                    </span>
                    <span>
                        110分钟（剧场版）
                    </span>
                    <span>
                        法国
                    </span>
                    <span v-for="(i,index) in movieDetail.genres" :key="index">
                        {{i}}
                    </span>
                    <span>
                        {{movieDetail.directors[0].name}}(导演)
                    </span>
                    <span v-for="cast in movieDetail.casts" :key="cast.id">
                        {{cast.name}}
                    </span>
                </p>
                <p class="button">
                    <span>
                        看过
                    </span>
                    <span>
                        想看
                    </span>
                </p>
            </div>
            <div class="comment">
                <p>
                    
                根据真人真事改编，讲述印度一块女子摔跤金牌的诞生。剧情热血逗乐，竞技惊心动魄，挑不出什么毛病的宝莱坞电影，父女情尽在不言中。阿米尔·汗太敬业了，为了一闪而过的几秒就把自己的身材从肥胖练成魔鬼，好演员都是用生命在演戏啊～
                
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import scoreShow from '../components/scoreShow.vue'
export default {
    components: {
        scoreShow
    },
    data(){
        return {
            totalPage: 5,
            loaded: false,
            movieHot: [],
            getDetail: false,
            showDetail: false,
            showi: false,
            closeDetail: false,
            dotObj: {
                dot0: 'rgb(97, 152, 215)',
                dot1: 'rgb(230, 230, 230)',
                dot2: 'rgb(230, 230, 230)',
                dot3: 'rgb(230, 230, 230)',
                dot4: 'rgb(230, 230, 230)'
            },
            movieDetail: {},
            movieDeatilStyle: {
                left: '0',
                top: '0',
                visibility: 'hidden'
            },
            comment: {}
        }
    },
    methods: {
        getHotMovies(type){
            this.$axios.get('/api//v2/movie/top250?start=0&count=50').then((response)=>{
                this.movieHot = response.data.subjects
                this.loaded = true
            })
        },
        getImageUrl(url){
            let temp = url.split('/')
            let id = temp[7].split('.')[0]
            return `https://img3.doubanio.com/view/photo/s_ratio_poster/public/${id}.webp`
        },
        getMovieDeatil(e,movieIndex){
            this.getDetail = true
            this.movieDeatilStyle.visibility = 'visible'
            let el = e.currentTarget.getBoundingClientRect()
            this.movieDetail = this.movieHot[movieIndex]
            this.movieDeatilStyle.left = `${el.left+140}px`
            this.movieDeatilStyle.top = `${el.top-147}px`
        },
        closeMovieDetail(){
            this.movieDeatilStyle.visibility = 'hidden'
        },
        increasePage(){
            for(let i in this.dotObj){
                this.dotObj[i] = 'rgb(230, 230, 230)'
            }
            this.$refs.carousel.next()
            this.dotObj[`dot${this.$refs.carousel.activeIndex}`] = 'rgb(97, 152, 215)'
        },
        decreasePage(){
            for(let i in this.dotObj){
                this.dotObj[i] = 'rgb(230, 230, 230)'
            }
            this.$refs.carousel.prev()
            this.dotObj[`dot${this.$refs.carousel.activeIndex}`] = 'rgb(97, 152, 215)'
        },
        gotoPage(index){
            for(let i in this.dotObj){
                this.dotObj[i] = 'rgb(230, 230, 230)'
            }
            this.dotObj[`dot${index}`] = 'rgb(97, 152, 215)'
            this.$refs.carousel.setActiveItem(index)
        },
        getCastsStr(casts){
            let castStr = ''
            for(let i=0;i<casts.length;i++){
                if(i==casts.length-1){
                    castStr += casts[i].name
                }
                else {
                    castStr += casts[i].name + '/'
                }
            }
            return castStr
        }
    },
    created(){
        this.getHotMovies()
    }
}
</script>

<style lang="scss" scoped>
.movieInfo{
    position: fixed;
    padding-top: 5px;
    text-align: left;
    transition-property: visibility;
    transition-duration: 1s;
    visibility: hidden;
    width: 370px;
    border: 1px solid rgb(219, 211, 211);
    background-color: white;
    z-index: 5;
    .center{
        position: relative;
        margin: 0 auto;
        width: 320px;
    }
    p{
        font-size: 12px;
    }
    .comment{
        border-top: 1px solid rgb(212, 210, 210);
        padding: 5px 25px;
        background-color: rgb(245, 245, 245);
        p{
            font-size: 13px;
            color: #666;
        }
    }
    .movieScore{
        display: inline-block;
    }
    .movieRate{
        span{
            position: relative;
            top: -2px;
            left: 4px;
        }
    }
    .button{
        span{
            display: inline-block;
            border: 1px solid #bbb;
            padding: 4px 14px;
            border-radius: 2px;
            cursor: pointer;
        }
    }
    .detail{
        .play{
            background: #66c056;
            color: white;
        }
        span{
            display: inline-block;
            margin: 0 8px 8px 0;
            color: #666;
            font-size: 13px;
            word-break: keep-all;
            white-space: nowrap;
            background-color: rgb(245, 245, 245);
            padding: 4px 10px 4px 10px;
            border-radius: 15px;
        }
    }
}
.hotRecently{
    position: relative;
    margin: 20px 0 60px 0;
}
.title{
    border-bottom: 1px solid rgb(223, 219, 219);
    padding-bottom: 16px;
}
.nav{
    display: inline-block;
    a{
        text-decoration: none;
        color: rgb(163, 163, 167);
        font-size: 13px;
        margin-left: 7px;
        &:hover{
            background: rgb(34, 119, 170);
            color: white;
        }
    }
}
.menu{
    text-align: center;
    font-size: 13px;
    i{
        color: rgb(230, 230, 230);
        cursor: pointer;
    }
    a{
        background: rgb(109, 152, 210);
        padding: 3px;
        color: white;
        border-radius: 50%;
        margin: 0;
    }
}
.movies{
    width: 100%;
    margin: 20px 0;
}
.movieDiv{
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    p{
        margin: 0;
    }
    img{
        width: 115px;
        height: 161px;
    }
    .movieName{
        text-decoration: none;
        font-size: 13px;
        color: rgb(55,150,209);
        span{
            color: rgb(255, 172, 45);
        }
    }
}
.movie10{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.more{
    position: absolute;
    right: 0;
    top: 2px;
    text-decoration: none;
        color: rgb(55,150,209);
        font-size: 13px;
        margin-left: 7px;
        &:hover{
            background: rgb(34, 119, 170);
            color: white;
        }
}
.movieTitle{
    a{
        margin-right:19px;
        font-size: 18px;
        text-decoration: none;
        color: rgb(34, 119, 170);
        &:hover{
            background: rgb(34, 119, 170);
            color: white;
        }
    }
}
</style>


