<template>
  <div class="tab">
      <span v-for="item in navList" :key="item.id" @click="tab(item.id)" :class="{active:curIndex===item.id}">{{item.title}}</span>
  </div>
</template>

<script>
export default {
    computed:{
        navList(){
            return this.$store.state.navList
        },
        curIndex(){
            return this.$store.state.curIndex
        }
    },
    methods:{
        tab(curIndex){
            this.$store.commit({type:'setState',key:'curIndex',value:curIndex})
            this.$store.dispatch({type:'getCurList'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #eee;
        display: flex;
    }
    span{
        flex: 1;
        text-align: center;
    }
    .active{
        color: #f00;
        background: #fff;
    }
</style>