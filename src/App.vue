<template>
    <div class="sun-rise-set">
      <Sidebar />
      <Scenery />
      <Error />
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Scenery from '@/components/Scenery'
import Error from '@/components/Error'
export default {
  components: {
    Sidebar,
    Scenery,
    Error
  }
}
</script>

<style lang="scss">
.sun-rise-set {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 101;
  background: #2f2f2f;
}
</style>

