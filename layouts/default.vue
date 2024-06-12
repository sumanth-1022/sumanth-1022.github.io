<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
      isDarkMode: false
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
@import '~/assets/layout.scss';
</style>
