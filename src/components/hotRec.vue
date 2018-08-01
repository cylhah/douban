<template>
    <div class="hotRec">
        <div class="title">
            <p>
                热门推荐
                <label class="titleRight">
                    <span>{{carouselObj.activeIndex+1}} / {{totalpage}}</span>
                    <a href="javascript:void(0)"
                        @click="decreasePage()"><i class="el-icon-arrow-left"></i></a>
                    <a href="javascript:void(0)"
                        @click="increasePage()"><i class="el-icon-arrow-right"></i></a>
                </label>
            </p>
        </div>
        <div class="content">
            <el-carousel indicator-position="none"
                        :interval="10000"
                        arrow="never"
                        height="280px"
                        ref="carousel">
                <el-carousel-item v-for="(item,index) in galerry" :key="index" class="item">
                    <div class="left"><a href="" target="_blank"><img :src="item.img"></a></div>
                    <div class="right">
                        <p>
                            <a href="">
                                {{item.title}}
                            </a>
                        </p>
                        <p>
                            {{item.content}}
                        </p>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            galerry: [
                {
                    img: './static/img/hotRec1.jpg',
                    title: '郭月遭遇“最难”考验，实力上演逆风翻盘',
                    content: '文艺片十级试题，考验观影量的时候到了！'
                },
                {
                    img: './static/img/hotRec2.jpg',
                    title: '肥胖走样的女神，告诉你成长的可爱与可怕',
                    content: '甄选全球热门新片，分享豆瓣高分剧集。最值得推荐的影视内容，都在这里！'
                },
                {
                    img: './static/img/hotRec3.jpg',
                    title: '徐克：身不由己的地方就是江湖',
                    content: '什么是“狄仁杰”系列贯穿始终的灵魂？豆瓣电影专访《狄仁杰之四大天王》导演徐克。'
                }
            ],
            carouselObj: {},
            totalpage: 4
        }
    },
    methods: {
        init(){
            this.carouselObj = this.$refs.carousel
            this.totalpage = this.galerry.length
        },
        increasePage(){
            this.$refs.carousel.next()
        },
        decreasePage(){
            this.$refs.carousel.prev()
        },
    },
    mounted(){ 
        this.init()
    }
}
</script>

<style lang="scss" scoped>
.title{
    border-bottom: 1px solid rgb(223, 219, 219);
}
.titleRight{
    float: right;
    span{
        font-size: 12px;
        color: #666;
    }
    a{
        font-size: 13px;
        background: rgb(109, 152, 210);
        padding: 3px;
        color: white;
        border-radius: 50%;
        margin: 0;
        &:hover{
            background: rgb(34, 119, 170);
        }
    }
}
.content{
    margin: 20px 0;
}
.item{
    div{
        display: inline-block;
        margin-left: -8px;
    }
    .right{
        p{
            a{
                text-decoration: none;
                font-size: 18px;
                color: #111;
            }
            color: #999;
            font-size: 13px;
        }
        width: 277px;
        height: 168px;
        padding:48px 28px 24px 28px;
        vertical-align: top;
        background-color: #F9F9F9;
    }
}
</style>


