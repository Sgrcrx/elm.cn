<template>
  <div class="home">
  	<!--1.加5-->
    <!--<h1>{{$store.state.count}}</h1>
    <button @click="$store.commit('add',5)">+</button>-->
    <!--2.加1-->
    <h2>{{$store.state.counts}}</h2>
    <button @click="$store.commit('increment')">+</button>
    <!--3.hello-->
    <h3>{{msg}}</h3>
    <!--4.减1-->
    <h1>{{count1}}</h1>
    <button @click="$store.commit('jian')">-</button>
    <!--5.减5-->
    <h2>{{count2}}</h2>
    <button @click="$store.commit('minus',5)">-</button>
    <!--6. odd&even-->
    <h1>{{arr}}</h1>
    <h2>{{$store.state.arr}}</h2>
    <h2>奇数：{{odd}}</h2>
    <h2>偶数：{{even}}</h2>
    <!--7.methods中-->
    <!--<h1>{{add}}</h1>
    <h1>{{reduce}}</h1>-->
    <button @click="add(2)">+</button> {{count}} <button @click="reduce(2)">-</button>
    
  </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: 'home',
  components: {
    
  },
  computed:{
  	...mapState(['count','msg','count1','count2','arr']),
  	...mapGetters(['odd','even']),
  },
  methods:{
  	...mapMutations(['add','reduce']),
  	...mapActions(['addAction'])
  }
}
</script>
