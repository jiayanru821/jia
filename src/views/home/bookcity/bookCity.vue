<template>
  <div>
    <div v-for="item in myBook" :key="item.id" class="box">
      <p>{{item.title}},￥{{item.price}},数量：{{item.count}}</p>
      </div>
  </div>
</template>

<script>
export default {
  computed:{
    myBook(){
      return this.$store.state.myBook
    }
  },
  methods:{

  },
  mounted(){
    this.$store.dispatch({type:'getMyBook'})
  }
}
</script>

<style lang='scss' scoped>

</style>