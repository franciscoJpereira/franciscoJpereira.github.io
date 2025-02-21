<script setup lang="ts">
import WorkInProgressCard from '@/components/WorkInProgressCard.vue';
import Menu from '@/components/Menu.vue';

const options = [
{
    name: "About",
    active: true
},
{
    name: "Blog",
    active: false 
}
]

</script>


<template>
    <div class="main-background bg-background">
        <Menu :flex="1" :options="options"/>
        <WorkInProgressCard :flex='9'/>        
    </div>
</template>


<style>
 .menu-card {
   flex: 1;
   max-width: 10vw;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   position: static;
}

 .main-background {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
 }
</style>