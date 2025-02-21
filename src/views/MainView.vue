<script setup lang="ts">

</script>


<template>
    <div class="main-background bg-background">
        <div class="menu-card bg-primary" >
            <v-card class="bg-secondary text-center" text="About" variant="tonal"></v-card>
            <v-card class="bg-primary text-center" text="Blog" variant="tonal"></v-card>         
        </div> 
        <div class="in-progress-container">
            <v-card class="work-in-progress-card bg-primary">
                <v-card-title class="text-center">Work In Progress...</v-card-title>
            </v-card>
        </div>
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

 .work-in-progress-card {
    height: 50vh;
    width: 40vw;
    align-content: center;
}
 .in-progress-container {
    flex: 9;
    display: flex;
    align-items: center;
    justify-content: center;
}

 .main-background {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
 }
</style>