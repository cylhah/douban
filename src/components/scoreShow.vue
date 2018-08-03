<template>
    <div class="rateBox">
        <div class="star-rating">
            <div class="star-rating-top" :style="{width: score*10+'%'}">
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
        </div>
        <div class="sc">
            {{score}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['score']
}
</script>

<style lang="scss" scoped>
.rateBox{
    position: relative;
    width: 102px;
    height: 14px;
    .sc{
        float: right;
        font-size: 12px;
        color: rgb(255, 172, 45);
    }
    .star-rating{
        position: absolute;
        width: 84px;
        height: 14px;
        font-size: 12px;
        .star-rating-top{
            position: absolute;
            z-index: 2;
            overflow: hidden;
            white-space: nowrap;
            i{
                color: rgb(255, 172, 45);
            }
        }
        .star-rating-bottom{
            position: absolute;
            i{
                color: rgb(220, 220, 220);
            }
        }
    }
}
</style>


