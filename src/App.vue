<template>
    <div class="sun-rise-set">
      <Sidebar />
      <Scenery />
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Scenery from '@/components/Scenery'
export default {
  components: {
    Sidebar,
    Scenery
  }
}
</script>

