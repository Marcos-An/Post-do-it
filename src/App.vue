<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-size: 60%;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #edf2f9;
  word-break: break-word;
}
.large input{
  padding: 18px 13px;
  background-color: white !important;
  width: 20vw;
}
@media only screen and (max-width:600px){
    .large input{
      width: 90vw;
      background-color: #9a9a9a26 !important;
    }
  }
</style>
