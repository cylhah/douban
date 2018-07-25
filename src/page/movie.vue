<template>
    <div class="movie">
        <div>
            <top></top>
        </div>
        <div>
            <movie-nav></movie-nav>
        </div>
        <div class="main">
            <router-view></router-view>
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
.main{
    position: relative;
    margin: 0 auto;
    width: 1068px;
}
</style>


