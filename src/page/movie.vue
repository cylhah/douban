<template>
    <div class="movie">
        <div class="topnav">
            <top></top>
        </div>
        <div>
            <movie-nav></movie-nav>
        </div>
    </div>
</template>

<script>
import top from '../components/top.vue'
import movieNav from '../components/movieNav.vue'
export default {
    components: {
        top,movieNav
    }
}
</script>

<style lang="scss" scoped>

</style>


