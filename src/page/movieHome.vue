<template>
    <div class="movieHome">
        <div class="left">
            <movie-intheater></movie-intheater>
            <movie-ad></movie-ad>
            <movie-hot-recently></movie-hot-recently>
            <tv-hot-recently></tv-hot-recently>
            <hot-rec></hot-rec>
            <popular-moive-comment></popular-moive-comment>
        </div>
        <div class="right">
            <div class="rating_answer">
                <a href="">豆瓣电影评分八问</a>
            </div>
            <div class="advertisement">
                <a href="">
                    <img src="https://oimagea2.ydstatic.com/image?id=398492791074071647&product=adpublish&w=300&h=250&sc=0&rm=0">
                </a>
                <span>广告</span>
            </div>
            <div class="activities">
                <p class="act_title"> 电影活动  · · · · · · </p>
                <p><a href="">瓣嘴丨文艺导演宠爱的李梦，竟然想演傻白甜</a></p>
                <p><a href="">对答666 | 深度影迷十级试题</a></p>
                <p><a href="">短片创作，之于电影人究竟有何意义？</a></p>
            </div>
            <div class="week_top10">
                <div class="week_title">
                    <p>
                        本周口碑榜
                        <a href="">更多榜单»</a>
                    </p>
                </div>
                <div class="week_body">
                    <p v-for="(item,index) in weekTop" :key="index">
                        {{index+1}}
                        <a href="">{{item.movieName}}</a>
                    </p>
                </div>  
            </div>
            <div class="advertisement">
                <a href="">
                    <img src="https://oimagec7.ydstatic.com/image?id=-125567666008017178&product=adpublish&w=300&h=250&sc=0&rm=0">
                </a>
                <span>广告</span>
            </div>
            <div class="doulist">
                <div class="dou_title">
                    <p>
                        热门豆列
                    </p>
                </div>
                <div class="dou_body">
                    <p>
                        <a href="">经典青少年电影</a>
                        <span>10推荐</span>
                    </p>
                    <p>
                        <a href="">Anzo--被低估的好片---全系列</a>
                        <span>110推荐</span>
                    </p>
                </div>
            </div>
            <div class="contact">
                <div class="contact_title">
                    <p>合作联系</p>
                </div>
                <div class="contact_body">
                    <p>电影合作邮箱：movie@douban.com</p>
                    <p>电视剧合作邮箱：tv@douban.com</p>
                </div>
            </div>
            <div class="contact">
                <div class="contact_title">
                    <p>关注我们</p>
                </div>
                <div class="follow">
                    <div>
                        <a href="">
                            <img :src="'./static/img/home_weibo.png'">
                        </a>
                        <a href="">微博</a>
                    </div>
                    <div>
                        <a href="">
                            <img :src="'./static/img/home_weibo.png'">
                        </a>
                        <a href="">微信</a>
                    </div>
                    <div>
                        <a href="">
                            <img :src="'./static/img/home_weibo.png'">
                        </a>
                        <a href="">瓣嘴</a>
                    </div>
                    <div>
                        <a href="">
                            <img :src="'./static/img/home_weibo.png'">
                        </a>
                        <a href="">鑫像奖小站</a>
                    </div>
                    <div>
                        <a href="">
                            <img :src="'./static/img/home_weibo.png'">
                        </a>
                        <a href="">观影club</a>
                    </div>
                </div>
            </div>
            <div class="douban_time">
                <div class="time_img">
                    <a href="">
                        <img :src="'./static/img/doubanTime.jpg'">
                    </a>
                </div>
                <div class="time_content">
                    <p><a href="">白描工具套装，温暖你的书画时光</a></p>
                    <p>豆瓣时间</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import movieIntheater from '../components/movieIntheater.vue'
import movieAd from '../components/movieAd.vue'
import movieHotRecently from '../components/movieHotRecently.vue'
import tvHotRecently from '../components/tvHotRecently.vue'
import hotRec from '../components/hotRec.vue'
import popularMoiveComment from '../components/popularMoiveComment.vue'
export default {
    components: {
        movieIntheater,movieAd,movieHotRecently,tvHotRecently,hotRec,popularMoiveComment
    },
    data(){
        return {
            weekTop: [
                {
                    movieName: '死侍2'
                },
                {
                    movieName: '塔利'
                },
                {
                    movieName: '在切瑟尔海滩上'
                },
                {
                    movieName: '中二病也要谈恋爱！剧场版 -Take On Me-'
                },
                {
                    movieName: '天才之击'
                },
                {
                    movieName: '狄仁杰之四大天王'
                },
                {
                    movieName: '超人之死'
                },
                {
                    movieName: '骑士'
                },
                {
                    movieName: '切尔诺贝利之春'
                },
                {
                    movieName: '书店'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$aBgColor: rgb(34, 119, 170);
$purple: #666699;
$blue:#2277aa;
.movieHome{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left{
        width: 675px;
    }
    .right{
        div{
            margin: 20px 0;
        }
        a{
            text-decoration: none;
            font-size: 13px;
        }
        width: 300px;
        .advertisement{
            position: relative;
            span{
                position: absolute;
                z-index: 2;
                right: 5px;
                bottom: 5px;
                font-size: 12px;
                color: white;
            }
        }
        .rating_answer{
            a{
                color: $purple;
                &:hover{
                    background: $aBgColor;
                    color: white;
                }
            }
            margin: 40px 0 20px 0;
            padding: 12px 0 12px 18px;
            background-color: #f2f7f6;
        }
        .activities{
            background-color: #f2f7f6;
            padding: 12px 0 12px 18px;
            .act_title{
                color: #072;
                font: 15px Arial, Helvetica, sans-serif;
            }
            p{
                a{
                    color: $blue;
                    &:hover{
                        background: $aBgColor;
                        color: white;
                    }
                }
            }
        }
        .week_top10{
            .week_title{
                border-bottom: 1px solid #dfdbdb;
                p{
                    a{
                        color: $purple;
                        &:hover{
                            background: $aBgColor;
                            color: white;
                        }
                    }
                }
            }
            .week_body{
                p{
                    font-size: 13px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #dfdbdb;
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
        .doulist{
            .dou_title{
                border-bottom: 1px solid #dfdbdb;
            }
            .dou_body{
                p{
                    font-size: 13px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #dfdbdb;
                    a{
                        color: $blue;
                        &:hover{
                            background: $aBgColor;
                            color: white;
                        }
                    }
                    span{
                        float: right;
                        color: #999;
                    }
                }
            }
        }
        .contact{
            margin: 40px 0;
            .contact_title{
                border-bottom: 1px solid #dfdbdb;
            }
            .contact_body{
                p{
                    font-size: 13px;
                }
            }
        }
        .follow{
            display: flex;
            justify-content: space-between;
            div{
                margin: 0;
                width: 40px;
                text-align: center;
            }
            a{
                color: $blue;
                &:hover{
                    background: $aBgColor;
                    color: white;
                }
            }
        }
        .douban_time{
            background-color: #f9f9f9;
            padding: 10px;
            div{
                margin: 0;
                display: inline-block;
            }
            .time_img{
                img{
                    width: 96px;
                    height: 80px;
                }
            }
            .time_content{
                vertical-align: top;
                width: 176px;
                p{
                    a{
                        color: $blue;
                    }
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
}
</style>


