<template>
  <div>
    <el-button @click="go">List</el-button>
  </div>
</template>

<script>
import { test, test1 } from "@/api/index"
export default {
  data() {
    return {

    }
  },
  mounted() {
    // this.list()
    this.list1()
    console.log(Boolean(1) === true, 45);

  },
  computed: {

  },
  methods: {
    list() {
      test().then(res => {
        console.log(res.data);
      })
    },
    list1() {
      test1({ msg: '苹果核' }).then(res => {
        console.log(res, 123);
      })
    },
    go() {
      this.$router.push({ path: '/list' })
    }
  },
}
</script>
<style scoped lang="scss">

</style>
