<template>
    <div class="scenery">
        <div class="intro-text">
            <LoadingSpinner />
        </div>
        <TheSky />
        <Nature />
    </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner'
import TheSky from '@/components/Scenery/TheSky'
import Nature from '@/components/Scenery/Nature'
export default {
    components: {
        LoadingSpinner,
        TheSky,
        Nature
    }
}
</script>