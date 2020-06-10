<template>
  <div id="app" style="text-align:center">
    <h1>{{$store.getters.getCount}}</h1>
    <hr>
    <com1/>
    <com2/>
  </div>
</template>

<script>
import com1 from "@/components/com_1.vue"
import com2 from "@/components/com_2.vue"

export default {
  name: "app",
  components:{
    com1,
    com2
  }
}
</script>

<style>

</style>