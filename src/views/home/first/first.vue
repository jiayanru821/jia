<template>
  <div class="main">
    <Nav></Nav>
    <List></List>
  </div>
</template>

<script>
import Nav from '@/components/nav'
import List from '@/components/list'
export default {
  components:{
    Nav,
    List
  },
  mounted(){
    this.$store.dispatch({type:'getNavList'})
    this.$store.dispatch({type:'getCurList'})
  }
}
</script>

<style lang='scss' scoped> 
  .main{
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
</style>