<template>
    <div>
        <div class="left">
            <movie-intheater></movie-intheater>
            <movie-ad></movie-ad>
        </div>
    </div>
</template>

<script>
import movieIntheater from '../components/movieIntheater.vue'
import movieAd from '../components/movieAd.vue'
export default {
    components: {
        movieIntheater,movieAd
    }
}
</script>

<style lang="scss" scoped>
.left{
    width: 675px;
}
</style>


