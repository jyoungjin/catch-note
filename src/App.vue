<template>
  <div id="app">
    <CnHeader></CnHeader>
    <CnInput></CnInput>
  </div>
</template>

     
<script>
import CnHeader from "./components/CnHeader.vue";
import CnInput from "./components/CnInput.vue";

export default {
  name: "app",
  components: {
    CnHeader,
    CnInput,
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #e66d6d;
  font-family: 'Do Hyeon', sans-serif;
}
input {
  border-style: groove;
  width: 30%;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
