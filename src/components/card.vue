<template>
  <div>
      <vs-card class="card" @click="handeVisible">
        <template #title>
          <h5>Titulo:</h5>
          <h3>{{post.name}}</h3>
        </template>
        <template #img>
          <div :class="`status status-${post.status}`">
            <h3 v-if="post.status === 'light'">Tudo certo por enquanto.</h3>
            <h3 v-if="post.status === 'urgent'">Corre que vai dar ruim!</h3>
            <h3 v-if="post.status === 'easy'">Tem coisas mais importantes.</h3>
          </div>
        </template>
        <template #text>
          <p> </p>
        </template>
          <template #interactions class="options-button">
          <vs-button shadow @click="onRemove(post.id)">
            <Trash2Icon size="1.5x" style="color: rgb(255,0,74)"/>
          </vs-button>
        </template>
      </vs-card>
      <Details 
        :visible="visibleDetails" 
        :handleVisible="handeVisible" 
        :post="post"
      />
  </div>
</template>

<script>
  import { Trash2Icon } from 'vue-feather-icons'
  import Details from './card-details'

  export default {
      name: 'card',
      components: {
        Trash2Icon,
        Details
    },
    data () {
      return{
        visibleDetails: false
      }
    },
    methods: { 
      handeVisible: function () {
        this.visibleDetails = !this.visibleDetails
      }
    },
    props: ['post', 'onRemove']    
  }
</script>

<style scoped>
  .status-light {
    width: 100%;
    height: 200px;
    background: rgb(246,161,0);
  }
  .status-urgent {
    width: 100%;
    height: 200px;
    background: rgb(255,0,74);
  }
  .status-easy {
    width: 100%;
    height: 200px;
    background: rgb(60,179,7);
  }
  h5 {
    font-weight: 400
  }
  .status h3 {
    margin-top: 85px;
    font-size: 1rem;
    margin-left: 20px;
    color: white
   }
</style>
