<template>
    <div class="movie">
        <div class="topnav">
            <top></top>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import top from '../components/top.vue'
export default {
    components: {
        top
    }
}
</script>

<style lang="scss" scoped>
.movie{
    width: 100%;
    .topnav{
        width: 100%;
    }
}
</style>


