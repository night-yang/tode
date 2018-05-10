<template>
  <div class="wrap">
   <header><Header /></header>
   <section><Work /></section>
  </div>
</template>

<script>
import Header from './Header'
import Work from './Work'
export default {
  name: 'Wrap',
  components: {
  Header,
  Work
  }
}
</script>
<style>
  .wrap{
    width: 576px;
    height: 678px;
    background-color: #fff;
    margin: 0 auto;
  }
</style>