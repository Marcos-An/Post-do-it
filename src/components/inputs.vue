<template>
  <div class="header">
     <vs-input   class="large input"  v-model="newPost.name" label-placeholder="Nome"/>
     <vs-select   class="large input"  flat  placeholder="Tipo" v-model="newPost.status">
        <vs-option label="Urgente" value="urgent">
          Urgente
        </vs-option>
        <vs-option label="Tem tempo" value="light">
          Tem tempo
        </vs-option>
        <vs-option label="Não é tão importante" value="easy">
          Não é tão importante
        </vs-option>
      </vs-select>
      <vs-button class="button-create" @click="addPost">
        Criar PostDoIt
      </vs-button>
    </div>
</template>

<script>
export default {
  props: ['newPost','addPost'],
}
</script>

<style scoped>
 .header {
    display: flex;
    justify-content: center;
    margin-top: 5rem
  }
  .input {
    margin-right: 30px;
  }
   .button-create{
    margin-top: 1px;
    height: 52px;
  }
  @media only screen and (max-width:600px){
     .header {
      flex-direction: column;
      align-items: center;
    }
    .button-create{
      margin-left: 0px;
      margin-top: 15px;
      width: 90%
    }
    .input {
      margin-right: 0px;
      margin-bottom: 10px;
      width: 100%;
      max-width: 100%;
      padding: 0px 20px;
    }
  }
</style>