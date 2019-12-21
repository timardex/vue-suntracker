<template>
    <div>
        <div class="day-sky" :style="`background: ${scenery}`" v-if="boolean">
            <div class="sun" :style="`bottom: ${sunStyle}%`">
                <img :src="require(`../../assets/sun-${sunUpDown}.png`)" alt="Sun up down" />
            </div>
        </div>
        <div class="night-sky" :style="`background: ${scenery}`" v-else>
            <div class="moon">
                <div class="craters-top"></div>
                <div class="craters-bottom"></div>
            </div>
            <div class="stars">
                <div class="star" :class="`star-${n}`" v-for="n in 1500" :key="n"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        boolean() {
            return this.$store.state.initialState.boolean
        },
        scenery() {
            return this.$store.state.initialState.scenery
        },
        sunStyle() {
            return this.$store.state.initialState.sunStyle
        },
        sunUpDown() {
            return this.$store.state.initialState.sunUpDown
        },
    }
}
</script>