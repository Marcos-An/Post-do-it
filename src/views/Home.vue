<template>
  <div class="home">
    <div v-if="windowSize > 600">
      <Inputs :newPost="newPost" :addPost="addPost"/>
    </div>

    <div class="cards-container" v-if="this.postsDoIt.length > 0">
      <Card
        v-for="post in postsDoIt" 
        :key="`post_${post.id}`" 
        :post="post" 
        :onRemove="removeItem"
      />
    </div>
    <div class="no-posts" v-if="this.postsDoIt.length === 0">
        <h1>Crie seu <span>Post Do It</span></h1>
        <br>
        <h1>e ele vai aparecer aqui!</h1>
    </div>
    <div class="circle-mobile" v-if="windowSize <=600" @click="visible = true" >
       <PlusIcon class="icon" size="3x" style="color:  white" @click="visible = false"/>
     </div>
     <div class="create-mobile" v-if="visible">
       <XCircleIcon class="icon" size="3x" style="color: red" @click="visible = false"/>
      <Inputs :newPost="newPost" :addPost="addPost"/>
     </div>
  </div>
</template>

<script>
import Card from '../components/card'
import Inputs from '../components/inputs'
import { XCircleIcon } from 'vue-feather-icons'
import { PlusIcon } from 'vue-feather-icons'

export default {
   data: function () {
    return {
      postsDoIt: [],
      error: false,
      visible: false,
      windowSize: window.innerWidth,
      newPost: { name: '', status: ''}
    }
  },
  methods: {
    validateEntry: function () {
      if(this.newPost.name === '' || 
      this.newPost.status === '' || 
      this.newPost.name === ' '){
        return false
      } return true
    },
    addPost: function (){
      if(this.validateEntry()) {
       const post  = {
            id: new Date().getTime(),
            name: this.newPost.name,
            status: this.newPost.status
          };

        this.postsDoIt = [...this.postsDoIt, post];

        this.newPost = { name: '', status: ''}
        localStorage.setItem('posts', JSON.stringify(this.postsDoIt));
        this.visible = false;
      } else {
        this.$vs.notification({
          progress: 'auto',
          color: 'danger',
          position: 'top-right',
          title: 'Os campos são obrigatórios'
        })
        this.newPost = { name: '', status: ''}
      }
    },
    removeItem: function (idToRemove) {
      const newPosts = this.postsDoIt.filter(item => 
        item.id !== idToRemove
      )
      this.postsDoIt = newPosts
      localStorage.setItem('posts', JSON.stringify(this.postsDoIt));
    }
  },
  mounted(){
    const posts = JSON.parse(localStorage.getItem('posts'))
    if(posts !== null) {
      this.postsDoIt = posts
    }
  },
  components: {
    Card,
    Inputs,
    XCircleIcon,
    PlusIcon
  }
}
</script>

<style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 3rem;
    padding: 6rem 8rem;
  }
  .no-posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vw;
    font-size: 1.2rem;
  }
  .no-posts h1{
    margin: 0px
  }
  .no-posts span{
    color: #5b3cc4
  }

  @media only screen and (max-width:600px){
    .create-mobile{
      background-color: white;
      height: 40vh;
      width: 100%;
      box-shadow: 1px -5px 32px -16px rgba(117,117,117,1);
      border-radius: 13px 13px 0px 0px;
      position: fixed;
      z-index: 1;
      bottom: 0px;
    }
     .create-mobile .icon {
       position: absolute;
       right: 30px;
       top: 30px;
     }
    .circle-mobile {
      background: #5b3cc4;
      height: 15vw;
      width: 15vw;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 5vw;
      bottom: 7vw;
      border-radius: 100%;
    }
     .no-posts {
      height: 80vh;
      font-size: 0.8rem;
    }
    .cards-container {
     padding: 3rem 1.5rem;
    }
   
  }
</style>