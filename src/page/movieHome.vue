<template>
    <div>
        <div class="left">
            <movie-intheater></movie-intheater>
            <movie-ad></movie-ad>
            <movie-hot-recently></movie-hot-recently>
            <tv-hot-recently></tv-hot-recently>
            <hot-rec></hot-rec>
            <popular-moive-comment></popular-moive-comment>
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
    }
}
</script>

<style lang="scss" scoped>
.left{
    width: 675px;
}
</style>


