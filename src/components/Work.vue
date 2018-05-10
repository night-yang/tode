<template>
  <div class="Work">
    <div class="work-list">
        <div @click="remove(work.id)" :key = work.id v-for="work in filteredWorks" v-bind:class="{ compl: (work.compl) }" >
          {{ work.body }}
        </div>
    </div>
    <div class="work-sub">
        <input class="shuru" @keyup.13="submitwork" v-model="message" placeholder="请填写事物" />
        <button @click="submitwork" class="sub-work"><svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.1 (35376) - http://www.bohemiancoding.com/sketch -->
    <title>Capa_1</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop" transform="translate(-652.000000, -660.000000)" fill="#FFFFFF">
            <g id="add-button" transform="translate(632.000000, 640.000000)">
                <g id="add" transform="translate(20.274809, 20.274809)">
                    <g id="Capa_1">
                        <path d="M40.7342293,18.5308356 L24.5407866,18.5308356 L24.5407866,2.33730534 C24.5407866,1.59962372 23.5390843,8.75690437e-05 21.5357673,8.75690437e-05 C19.5324503,8.75690437e-05 18.530748,1.59971129 18.530748,2.33730534 L18.530748,18.5309232 L2.33721777,18.5309232 C1.59962372,18.5308356 0,19.5325379 0,21.5357673 C0,23.5389968 1.59962372,24.5407866 2.33721777,24.5407866 L18.5308356,24.5407866 L18.5308356,40.7344045 C18.5308356,41.4719109 19.5324503,43.0716222 21.5358549,43.0716222 C23.5392595,43.0716222 24.5408742,41.4719109 24.5408742,40.7344045 L24.5408742,24.5407866 L40.734492,24.5407866 C41.4719985,24.5407866 43.0717098,23.5391719 43.0717098,21.5357673 C43.0717098,19.5323628 41.4718234,18.5308356 40.7342293,18.5308356 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></button>
    </div>
    <footer><search /></footer>
  </div>
</template>
<script>
  import search from './Search'
  import { filterworks } from '../utils'
  export default{
    name:'Work',
    components: {
     search
   },
    data: () => ({
      message: '',
       }),
    computed: {
      works() { return this.$store.state.work.all },
      // reverseWorks() { return this.works.slice().reverse() },,
      currentFilter() {return this.$store.state.work.currentFilter},  
      filteredWorks() { return filterworks(this.works, this.currentFilter)}
     },   
    methods:{
      submitwork () {
          let work = {
          id: (this.works.length + 1).toString(),
          body: this.message,
          compl:false
        }
          this.$store.dispatch({ type: 'addWork', work })
          this.message = ''
      },
      remove(id) {
          this.$store.dispatch({ type: 'removeWork', id })
      },
    }
  }

</script>
<style scoped>
  .work-list{
    width: 327px;
    height: 280px;
    margin: 15px auto;
    overflow: auto;
  }
  .compl{
    color:#bbb;
    text-decoration:line-through;
    position: relative;
  }
  .compl::after{
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    background-image: url(../assets/right.b1188313.svg);
    background-size: cover;
    position: absolute;
    right: 0;
    top: 19px;
  }
  .work-list>div{
    line-height: 60px;
    font-size: 24px;
    cursor: pointer;
  }
  .shuru{
    width: 350px;
    height: 38px;
    background-color: #d8d8d8;
    padding-left: 20px;
    font-size: 22px;
    border:1px solid #ccc;
  }
  .work-sub{
    width: 420px;  
    margin: 0 auto;
    position: relative;
  }
  .sub-work{
    position: absolute;
    right: 0;
    top: -20px;
    border: none;
    background-color: #7ed321;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: 50%;
    -webkit-box-shadow: 0 2px 4px;
    box-shadow: 0 2px 4px;
    cursor: pointer;
    outline: none;
  }
  .search{
    margin: 35px auto;
    display: flex;
    width: 360px;
    justify-content:space-around;
  }
</style>
