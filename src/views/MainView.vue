<script setup lang="ts">
import AboutPage from '@/components/AboutPage.vue';
import about from '@/assets/aboutInfo.json';
import { type AboutInfo } from '@/types/pageTypes';

const About = about as AboutInfo;

</script>


<template>
    <div class="main-background">
        <AboutPage :flex="1" :info="About"/>
    </div>
</template>


<style>
 .main-background {
    display: flex;
    flex-direction: row;
    min-width: 100vw;
    min-height: 100vh;
 }
</style>