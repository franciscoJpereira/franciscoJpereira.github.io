<script setup lang="ts">
defineProps({
    flex: Number,
})
</script>

<template>
   <div :style="{'flex': flex}"
        class="about-container"
   >
        <div class="title-container text-center">
            <h1>Sobre Mi</h1>
        </div>
        <div class="info-conatiner text-center">
            <p class="text-paragraph">
                Hola! Mi nombre soy Francisco Pereira, Ingeniero en informatica
                graduado de la Universidad de Buenos Aires...
            </p>
            <br></br>
            <p class="text-paragraph"></p>
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
    .info-container {
    }
    .text-paragraph {
        font-size: larger;
    }
</style>