<script setup lang="ts">
import {type AboutInfo } from '@/types/pageTypes';
import {useTheme} from 'vuetify'
import Github from './icons/Github.vue';
import Linkedin from './icons/Linkedin.vue';
const isMobile = () => {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
defineProps<{
    flex: Number,
    info: AboutInfo
    }>()

const theme = useTheme();

</script>

<template>
   <div :style="{flex: flex.toString()}"
        class="about-container bg-background"
   >
        <div class="title-container text-center">
            <h2>{{ info.title }}</h2>
        </div>
        <div v-for="paragraph in info.paragraphs" class="info-conatiner text-center text-start">
            <p  class="text-paragraph">
                {{ paragraph }}
            </p>
            <br></br>
        </div>
        <div class="timeline-container">
             <v-timeline 
                        :direction='isMobile() ? "vertical" : "horizontal"'
                        :line-color="theme.current.value.colors.primary"
                        :dot-color="theme.current.value.colors.secondary"
                        fill-dot
             >
                <v-timeline-item 
                    v-for="dot in info.timeline">
                    <template v-slot:opposite>
                        {{ dot.contentOposite }}
                    </template>
                    <div>
                        <div class="text-h6">{{ dot.contentTitle }}</div>
                        <p>
                            {{ dot.content }}
                        </p>
                    </div>
                </v-timeline-item>
        </v-timeline>
        </div>
        <div :class="isMobile() ? 'social-links-mobile' : 'social-links-web'">
            <Github />
            <Linkedin />
        </div>
   </div> 
</template>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        max-width: 100%;
    }
    .title-container {
        margin-top: 1%;
        height: 10%;
        width: 100%; 
    }
    .timeline-container {
        padding-top: 5%;
        padding-left: 1%;
        padding-right: 1%;
        max-width: 100%;
    }
    .social-links-web {
        position:absolute;
        bottom: 0;
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }
    .social-links-mobile {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }
    .text-paragraph {
        font-size: medium;
        padding-left: 1%;
        padding-right: 1%;
        max-width: 100%;
    }
</style>