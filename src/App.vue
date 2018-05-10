<template>
  <div id="app">
   <Wrap />
  </div>
</template>

<script>
import Wrap from './components/Wrap'
export default {
  name: 'app',
  components: {
   Wrap
  }
}
</script>


<style>
#app {
   background-color: #4FB783;
   height: 1000px;
   padding-top:80px;
  }
  *{
    margin: 0;
    padding: 0;
    border:0;
  }
</style>
