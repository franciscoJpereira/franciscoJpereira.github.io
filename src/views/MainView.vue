<script setup lang="ts">
import AboutPage from '@/components/AboutPage.vue';
import about from '@/assets/aboutInfo.json';
import { type AboutInfo } from '@/types/pageTypes';
import { ref } from 'vue';
import WorkInProgressCard from '@/components/WorkInProgressCard.vue';

const About = about as AboutInfo;

const step = ref(1);

const goTo = (value: number) => {
    step.value = value
}
</script>


<template>
    <div class="nav-pane bg-background">
        <v-btn @click="goTo(1)" variant="tonal">Sobre Mi</v-btn>
        <v-btn @click="goTo(2)" variant="tonal">proyectos</v-btn>
        <v-btn @click="goTo(3)" variant="tonal">Blog</v-btn>
    </div>
    <v-window v-model="step">        
        <v-window-item 
            :value="1"
            class="main-background"
            >
            <AboutPage :flex="1" :info="About"/>
        </v-window-item>
        <v-window-item
            :value="2"
            class="main-background bg-background"
        >
            <WorkInProgressCard :flex="1"/>
        </v-window-item>
        <v-window-item
            :value="3"
            class="main-background bg-background"
        >
            <WorkInProgressCard :flex="1"/>
        </v-window-item>
    </v-window>
</template>


<style>
 .main-background {
    display: flex;
    flex-direction: row;
    min-width: 100vw;
    min-height: 95vh;
 }
 .nav-pane {
    display: flex;
    padding-top: 1vh;
    height: 5vh;
    justify-content: space-evenly;
}
</style>