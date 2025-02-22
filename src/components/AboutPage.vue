<script setup lang="ts">
import {type AboutInfo } from '@/types/pageTypes';
import {useTheme} from 'vuetify'
defineProps<{
    flex: Number,
    info: AboutInfo
    }>()

    const theme = useTheme();

</script>

<template>
   <div :style="{flex: flex.toString()}"
        class="about-container"
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
            <h3 class="text-center mb-10">{{ info.timelineTitle }}</h3>
             <v-timeline direction="horizontal"
                        :line-color="theme.current.value.colors.primary"
                        :dot-color="theme.current.value.colors.secondary"
                        fill-dot
             >
                <v-timeline-item v-for="dot in info.timeline">
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
   </div> 
</template>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
    }
    .title-container {
        margin-top: 1%;
        height: 10%;
        width: 100%; 
    }
    .timeline-container {
        padding-top: 5%;
        max-width: 100%;
    }
    .text-paragraph {
        font-size: medium;
        padding-left: 1%;
        padding-right: 1%;
        max-width: 100%;
    }
</style>