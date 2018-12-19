<template>
  <div class="home">
  	<!--1-->
    <h1>{{$store.state.count}}</h1>
    <button @click="$store.commit('add',5)">+</button>
    <!--2-->
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    
  }
}
</script>
