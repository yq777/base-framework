<template>
  <layout>
    <router-view slot="content"></router-view>
  </layout>
</template>

<script>
  import Layout from "../components/layout/layout";

  export default {
    components: {
      Layout
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
