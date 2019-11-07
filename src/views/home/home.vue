<template>
  <div class="content">
    <nav class="nav">
      <router-link to="/home/first" tag="span">首页</router-link>
      <router-link to="/home/bookcity" tag="span">书包</router-link>
    </nav>
      <router-view></router-view>  
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav{
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
}
span{
  flex: 1;
  font-size: 20px;
  text-align: center;
}
.router-link-active{
  color: rgb(252, 29, 29);
}

</style>