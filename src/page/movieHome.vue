<template>
    <div>
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
                            <div v-for="n in 5" :key="n" class="movieDiv" v-if="loaded" :class="classObject">
                                <a href="">
                                    <img :src="getImageUrl(inTheater[(item-1)*5+n-1].images.large)">
                                </a>
                                <p class="movieName"
                                    @click="gotoMovieUrl">{{getMovieTitle(inTheater[(item-1)*5+n-1].title)}}</p>
                                <div class="star-rating" v-if="inTheater[(item-1)*5+n-1].rating.average">
                                    <div class="star-rating-top" :style="{width: inTheater[(item-1)*5+n-1].rating.average*10+'%'}">
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                    </div>
                                    <div class="star-rating-bottom">
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                        <i class="el-icon-star-on"></i>
                                    </div>
                                    <span>{{inTheater[(item-1)*5+n-1].rating.average}}</span>
                                </div>
                                <p v-else style="font-size:12px">暂无评分</p>
                                <p class="buy"><a href="">选座购票</a></p>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inTheater: [
            ],
            totalPage: 4,
            loaded: false,
            classObject: {
                slideLeft1: false,
                slideLeft2: false,
            },
            carouselObj: {}
        }
    },
    methods: {
        getInTheater(){
            this.$axios.get('/api//v2/movie/in_theaters').then((response)=>{
                this.inTheater = response.data.subjects
                this.loaded = true
                this.totalPage = parseInt((this.inTheater.length+4)/5)
                console.log(this.inTheater)
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
        gotoMovieUrl(){

        },
        increasePage(){
            this.$refs.carousel.next()
        },
        decreasePage(){
            this.$refs.carousel.prev()
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
@keyframes slideLeft {
    0%{
        transform: translate(280px);
    }
    100%{
        transform: translate(0);
    }
}
.slideLeft1{
    animation: slideLeft 1s;
}
.slideLeft2{
    animation: slideLeft 1s;
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
.star-rating{
    position: relative;
    margin: 0 auto;
    width: 84px;
    font-size: 12px;
    span{
        position: relative;
        right: -45px;
        color: rgb(255, 172, 45);
    }
    .star-rating-top{
        position: absolute;
        left: -10px;
        z-index: 2;
        overflow: hidden;
        white-space: nowrap;
        i{
            color: rgb(255, 172, 45);
        }
    }
    .star-rating-bottom{
        position: absolute;
        left: -10px;
        margin: 0;
        padding: 0;
        i{
            color: rgb(220, 220, 220);
        }
    }
}
.movieDiv{
    display: inline-block;
    text-align: center;
    .movieName{
        font-size: 14px;
        cursor: pointer;
    }
    img{
        width: 115px;
        height: 161px;
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


