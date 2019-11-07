<template>
  <div>
     <dt>
        <img :src="detail.avatar" alt />
      </dt>
      <dd>
        <h3>{{detail.title}}</h3>
        <p>单价：{{detail.price}}</p>
        <button v-if='detail.is_in_my_book'>已收藏</button>
        <button @click="collect" v-else>收藏</button>
        <p>{{detail.summary}}</p>
      </dd>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      detail:{}
    }
  },
  methods:{
    collect(){
      let book=this.detail
      book.count=1
      axios({
        url:'/addmybook',
        data:{
          book
        },
        method:'post'
      }).then(res=>{
        if(res.data.code===200){
          this.detail.is_in_my_book=true
        }
      })
    }
  },
  mounted(){
    let id=this.$route.params.id
    axios({
      url:`/getDetail?id=${id}`
    }).then(res=>{
      if(res.data.code===200){
        this.detail=res.data.data
      }
    })
  }
}
</script>

<style>

</style>