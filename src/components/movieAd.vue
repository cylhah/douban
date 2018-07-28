<template>
    <div class="movieAd">
        <a href="">
            <img :src="movieAdImg">
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            movieAdImg: './static/img/movieAd.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
.movieAd{
    width: 100%;
}
</style>


