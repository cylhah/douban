<template>
    <div class="inTheater">
        <div class="title">
            <p class="titleText">
                正在热映
                <a href="">全部正在热映»</a>
                <a href="">即将上映»</a>
                <label class="titleRight">
                    <span>{{carouselObj.activeIndex+1}} / {{totalPage}}</span>
                    <a href="javascript:void(0)"
                        @click="decreasePage()"><i class="el-icon-arrow-left"></i></a>
                    <a href="javascript:void(0)"
                        @click="increasePage()"><i class="el-icon-arrow-right"></i></a>
                </label>
            </p>
        </div>
        <div class="movies">
            <el-carousel indicator-position="none"
                        :interval="18000"
                        arrow="never"
                        height="280px"
                        ref="carousel">
                <el-carousel-item v-for="item in totalPage" :key="item">
                    <div class="movie5">
                        <div v-for="n in 5" :key="n" class="movieDiv" v-if="loaded">
                            <a href="" class="movieImg"
                            @mouseover="getMovieDeatil($event,(item-1)*5+n-1)"
                            @mouseout="closeDtail">
                                <img :src="getImageUrl(inTheater[(item-1)*5+n-1].images.large)">
                            </a>
                            <p class="movieName"
                                @click="gotoMovieUrl">{{getMovieTitle(inTheater[(item-1)*5+n-1].title)}}</p>
                            <score-show :score="inTheater[(item-1)*5+n-1].rating.average"
                                        class="score" v-if="inTheater[(item-1)*5+n-1].rating.average"></score-show>
                            <p v-else class="noscore">暂无评分</p>
                            <p class="buy"><a href="">选座购票</a></p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="movieInfo" :style="movieDeatilStyle" v-if="getDetail" :class="{showDetail}">
            <h4 class="movieTitle">
                {{movieDetail.title}} 
                <span>{{movieDetail.year}}</span>
            </h4>
            <p class="movieRate">
                <score-show :score="movieDetail.rating.average" class="movieScore"></score-show>
                <span>( 28614人评价)</span>
            </p>
            <p>
                <span class="time">118分钟</span>
                <span class="contry">中国大陆</span>
            </p>
            <p>
                <span>导演 {{movieDetail.directors[0].name}}</span>
            </p>
            <p>
                <span>主演 {{getCastsStr(movieDetail.casts)}}</span>
            </p>
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
            inTheater: [
            ],
            totalPage: 4,
            loaded: false,
            getDetail: false,
            showDetail: false,
            carouselObj: {},
            movieDetail: {},
            movieDeatilStyle: {
                left: '0',
                top: '0'
            }
        }
    },
    methods: {
        getInTheater(){
            this.$axios.get('/api//v2/movie/in_theaters').then((response)=>{
                this.inTheater = response.data.subjects
                this.loaded = true
                this.totalPage = parseInt((this.inTheater.length+4)/5)
            })
        },
        getImageUrl(url){
            let temp = url.split('/')
            let id = temp[7].split('.')[0]
            return `https://img3.doubanio.com/view/photo/s_ratio_poster/public/${id}.webp`
        },
        getMovieTitle(title){
            if(title.length>6){
                return title.substr(0,6)+'...'
            }
            else {
                return title
            }
        },
        getMovieDeatil(e,movieIndex){
            this.getDetail = true
            this.showDetail = true
            let el = e.currentTarget.getBoundingClientRect()
            this.movieDetail = this.inTheater[movieIndex]
            this.movieDeatilStyle.left = `${el.left+125}px`
            this.movieDeatilStyle.top = `${el.top-147}px`
        },
        closeDtail(){
            this.showDetail = false
        },
        gotoMovieUrl(){

        },
        increasePage(){
            this.$refs.carousel.next()
        },
        decreasePage(){
            this.$refs.carousel.prev()
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
        this.getInTheater()
    },
    mounted(){
        this.carouselObj = this.$refs.carousel
    }
}
</script>

<style lang="scss" scoped>
@keyframes show {
    0%{
        visibility: hidden;
    }
    99%{
        visibility: hidden;
    }
    100%{
        visibility: visible;
    }
}
.showDetail{
    animation: show 0.5s forwards;
}
.inTheater{
    width: 675px;
    margin: 40px 0;
}
.title{
    border-bottom: 1px solid rgb(223, 219, 219);
}
.titleText{
    a{
        text-decoration: none;
        color: rgb(102, 102, 153);
        font-size: 13px;
        margin-left: 7px;
        &:hover{
            background: rgb(34, 119, 170);
            color: white;
        }
    }
}
.titleRight{
    float: right;
    span{
        font-size: 12px;
        color: #666;
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
    height: 280px;
    margin: 20px 0;
}
.movie5{
    display: flex;
    justify-content: space-between;
}
.screen{
    position: absolute;
    height: 270px;
    width: 2900px;
}
.score{
    margin: 0 auto;
}
.movieDiv{
    position: relative;
    text-align: center;
    .noscore{
        font-size: 12px;
    }
    .movieName{
        font-size: 14px;
        cursor: pointer;
    }
    img{
        width: 115px;
        height: 161px;
    }
}
.movieInfo{
    position: fixed;
    padding: 5px 15px 10px 15px;
    text-align: left;
    visibility: hidden;
    width: 230px;
    border: 1px solid rgb(219, 211, 211);
    background-color: white;
    z-index: 5;
    p{
        font-size: 12px;
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
}
.movieTitle{
    span{
        font-size: 12px;
        color: rgb(189, 184, 184);
        font-weight: bold;
    }
}
.movieUl{
    list-style: none;
    margin: 0;
    li{
        float: left;
    }
}
.buy{
    a{
        text-decoration: none;
        background: rgb(38, 141, 205);
        color: white;
        border-radius: 3px;
        font-size: 12px;
        padding: 5px 20px;
    }
}
</style>


