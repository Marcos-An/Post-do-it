<template>
     <vs-dialog v-model="visible" v-on:close="handleVisible">
        <template #header>
            <h4 class="not-margin">
              {{post.name}}
            </h4>
        </template>
      </vs-dialog>
</template>
<script>
export default {
  props: ['visible', 'post', 'handleVisible']
}
</script>
<style scoped>

</style>