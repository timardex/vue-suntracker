<template>
  <div class="show-error-msg" v-if="isNaN(lat)">
    <div class="text-center">
      <p><b>Oops! Something went wrong or you didn't allow the app to use your geolocation.</b></p>
      <p>Please refresh the app or enable geolocation and push the <b>Track the Sun</b> button again!</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'lat'
    ])
  }
}
</script>

<style lang="scss" scoped>
.show-error-msg {
  position: fixed;
  bottom: 0; left: 0;
  z-index: 1001;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2f2f2f;

  div {
    background: #fff;
    padding: .5rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  p {
    margin: 0;
  }

}
</style>