<template>
  <div>
    <p><input type="text" v-model="username" placeholder="请输入账户名" ref="username"></p>
    <p><input type="password" v-model="pwd" placeholder="请输入密码" @keyup.enter="toLogin"></p>
    <button @click="toLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username:'',
      pwd:''
    }
  },
  methods:{
    toLogin(){
      if(this.username.trim()===""){
        alert('用户名不能为空')
        return
      }
      if(this.pwd.trim()===""){
        alert('密码不能为空')
        return
      }
      axios({
        url:'/api/login',
        data:{
          username:this.username,
          pwd:this.pwd
        },
        method:'post'
      }).then(res=>{
        if(res.data.code===200){
          this.$router.push('/home')
        }else{
          alert(res.data.message)
        }
      })
    }
  },
  mounted(){
    this.$refs.username.focus()
  }
}
</script>

<style>

</style>