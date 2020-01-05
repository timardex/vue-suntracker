<template>
    <b-row>
        <b-col>
            <b-spinner variant="warning" label="Loading..." v-if="loading_calculation"></b-spinner>
        </b-col>
    </b-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'loading_calculation'
        ])
    }
}
</script>