<script setup lang="ts">
import AboutPage from '@/components/AboutPage.vue';
import about from '@/assets/aboutInfo.json';
import { AboutInfo } from '@/types/pageTypes';

const About = about as AboutInfo;

</script>


<template>
    <div class="main-background bg-background">
        <AboutPage :flex="1" :info="About"/>
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