<template>
    <b-spinner variant="warning" label="Loading..." v-if="loading_calculation"></b-spinner>
</template>

<script>
export default {
    computed: {
        loading_calculation() {
            return this.$store.state.initialState.loading_calculation
        }
    }
}
</script>