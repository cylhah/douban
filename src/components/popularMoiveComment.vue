<template>
    <div class="popular">
        <div class="title">
            <p>
                最受欢迎的影评
                <a href="">更多热门影评»</a>
                <a href="">新片影评»</a>
            </p>
        </div>
        <div class="comment" v-for="(item,index) in comment" :key="index">
            <div class="left">
                <a href="">
                    <img :src="item.img">
                </a>
            </div>
            <div class="right">
                <p class="p1"><a href="">{{item.title}}</a></p>
                <p class="p2">
                    <a href="">{{item.userName}}</a>
                    <span>评论</span>
                    <a :href="`#/movie/${item.movieId}`">《{{item.movieName}}》</a>
                    <score-show :score="item.score"></score-show>
                </p>
                <p class="p3">
                    {{polishContent(item.commentContent)}}
                    <a href="">(全文)</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import scoreShow from '../components/scoreShow.vue'
export default {
    data(){
        return {
            comment: [
                {
                    img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510130772.webp',
                    title: '有毕志飞这么一个垃圾导演，中国电影恐怕是没救了',
                    userName: 'United States',
                    movieName: '纯洁心灵·逐梦演艺圈',
                    movieId: 26322774,
                    score: 2.1,
                    commentContent: '这垃圾电影是怎么上映的先不说，就先说这个不要脸的毕志飞以及说这部电影非常好的影评人。毕志飞，你还要脸吗？你的电影祸害完中国人还不够，难道你还要去祸害嘎纳的评委？幸好嘎纳没有把你的电影入围，要不然估计中国电影恐怕在国际上就真的没人愿意看了，因为国际上的人一提起中国电影，就会想到《逐梦演艺圈》这个垃圾电影。再说说那些说这部电影可以参考金鸡奖的影评人，你们是毕志飞雇来的托吗？你们到底是有多么强大的内心才会给这部电影好评？你们这些影评人真的当我们眼瞎吗？我们的眼睛可是雪亮，分的出什么好，什么是坏，所以不需要你们的评判，而且你们这些影评人有可能是雇来托这个嫌疑。'
                },
                {
                    img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526297221.webp',
                    title: '“北洋三部曲”的惨淡落幕',
                    userName: '大海里的针',
                    movieName: '邪不压正',
                    movieId: 26366496,
                    score: 7.1,
                    commentContent: '《邪不压正》是姜文的“北洋三部曲”最终章。 影片上映第一天，豆瓣评分以肉眼可见的速度直线下滑，再加上同期爆款《我不是药神》的挤压，让这部影片又成了姜文一次失败的尝试。 和大多数人的感受一样，《邪不压'
                },
                {
                    img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528217984.webp',
                    title: '一些前后呼应的细节，来一波截图。',
                    userName: '大仔子',
                    movieName: '鬼故事',
                    movieId: 26721644,
                    score: 7.1,
                    commentContent: '整个电影反复出现了下水道里的数字，下水道里数到的有6，79，19，20，48.... 先上一些从头到尾的数字线索。 接下来会发现，梦里面每个人物的身份，在很多地方都有提示到。 还有很多讽刺的，前后呼应的梗，都是再'
                },
                {
                    img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522806962.webp',
                    title: '打败复联、死侍，今年韩国票房冠军也不过如此',
                    userName: '电影幕后故事',
                    movieName: '毒战',
                    movieId: 26934399,
                    score: 6.3,
                    commentContent: '相信没人不爱杜琪峰，所以知道韩国翻拍杜导的《毒战》后我马上就看了。 今天关于这两部影片我来比较一下： 韩版《毒战》在立意、格局、突破等方面都做的不如港版。 如果港版《毒战》能打85分的话，我只给韩版65分'
                }
            ]
        }
    },
    components: {
        scoreShow
    },
    methods: {
        polishContent(content){
            return content.substr(0,98)+'...'
        }
    }
}
</script>

<style lang="scss" scoped>
$blue: rgb(34, 119, 170);
$aBgColor: rgb(34, 119, 170);
.title{
    margin: 20px 0;
    p{
        a{
            text-decoration: none;
            color: $blue;
            font-size: 13px;
            margin-left: 7px;
            &:hover{
                background: $aBgColor;
                color: white;
            }
        }
    }
}
.comment{
    padding-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid rgb(223, 219, 219);
    a{
        text-decoration: none;
    }
    div{
        display: inline-block;
    }
    .left{
        img{
            width: 68px;
            height: 101px;
        }
    }
    .right{
        margin: 8px 0 0 7px;
        vertical-align: top;
        width: 592px;
        .p1{
            margin-top: 0;
            margin-bottom: 8px;
            a{
                font-size: 15px;
                color: $blue;
                &:hover{
                    background: $aBgColor;
                    color: white;
                }
            }
        }
        .p2{
            margin-top: 10px;
            margin-bottom: 0;
            a{
                font-size: 13px;
                color: #666;
                &:hover{
                    background: $aBgColor;
                    color: white;
                }
            }
            span{
                font-size: 13px;
                color: #666;
            }
        }
        .p3{
            font-size: 13px;
            margin-top: 8px;
            a{
                color: $blue;
                &:hover{
                    background: $aBgColor;
                    color: white;
                }
            }
        }
    }
}
</style>


