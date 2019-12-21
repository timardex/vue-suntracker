<template>
    <b-row>
        <b-col>
            <b-spinner variant="warning" label="Loading..." v-if="loading_calculation"></b-spinner>
        </b-col>
    </b-row>
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