<template>

  <div class="count">
    <dl class="box" v-for="item in curList" :key="item.id">
      <dt>
        <img :src="item.avatar" alt />
      </dt>
      <dd>
        <h3>{{item.title}}</h3>
        <p>单价：{{item.price}}</p>
        <p>
            <button @click="handleDetail(item.id)">详情</button>
            <button v-if="item.is_in_my_book">已收藏</button>
            <button @click="collect(item)" v-else>收藏</button>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    curList() {
      return this.$store.state.curList;
    }
  },
  methods:{
      handleDetail(id){
          this.$router.push(`/detail/${id}`)
      },
      collect(item){
        let myBook=this.$store.state.myBook
        // let index=myBook.findIndex(book=>book.id===item.id)
        // if(index>=0){
        //   myBook[index].count++
        // }else{
          myBook.push(item)
          item.count=1
        // this.$store.commit({type:'setState',key:'myBook',value:myBook})
        // }
        
        axios({
          url:'/addmybook',
          data:{
            book:item
          },
           method:'post'
        }).then(res=>{
          if(res.data.code===200){
              this.$store.dispatch({type:'getCurList'})
          }
        })
      }

  },
  updata:{

  }
};
</script>

<style lang="scss" scoped>
.count {
  flex: 1;
  overflow: auto;
}
.box {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #000;
  display: flex;
}
dt {
  width: 112px;
  height: 150px;
}
dt > img {
  padding: 10px;
  width: 100%;
  height: 80%;
}
</style>