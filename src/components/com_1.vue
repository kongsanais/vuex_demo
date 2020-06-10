<template>
    <div id="com1">
        <h2> {{$store.getters.getCount}}</h2>
        <button @click="add">add</button>
    </div>
</template>

<script>
export default {
 name:"com1",
 methods:{
     add(){
         this.$store.dispatch("addAction")
     }
 }
}
</script>

<style>

</style>