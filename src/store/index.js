import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[],
    curIndex:0,
    curList:[],
    myBook:[]
  },
  mutations: {
    setState(state,payload){
      state[payload.key]=payload.value
    }
  },
  actions: {
    getNavList({commit}){
      axios({
        url:'/getNav'
      }).then(res=>{
        if(res.data.code===200){
          commit({type:'setState',key:'navList',value:res.data.data})
        }
      })
    },
    getCurList({commit,state}){
      axios({
        url:`/getList?id=${state.curIndex}`
      }).then(res=>{
        if(res.data.code===200){
          commit({type:'setState',key:'curList',value:res.data.data})
        }
      })
    },
    getMyBook({commit}){
      axios({
        url:'/api/myBook'
      }).then(res=>{
        if(res.data.code===200){
          commit({type:'setState',key:'myBook',value:res.data.data})
        } 
      })
    }
  },
  modules: {
  }
})
