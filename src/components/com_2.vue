<template>
    <div id="com2">
        <h2> {{$store.getters.getCount}}</h2>
        <button @click="remove">remove</button>
    </div>
</template>

<script>
export default {
 name:"com2",
 methods:{
     remove(){
         this.$store.dispatch("removeAction")
     }
 }
}
</script>

<style>

</style>