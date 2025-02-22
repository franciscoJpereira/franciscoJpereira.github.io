<script setup lang="ts">
defineProps({
    flex: Number
})
</script>


<template>
    <div :style='{"flex": flex}' class="in-progress-container">
        
        <v-card class="work-in-progress-card bg-background">
            <v-card-title class="text-center text-h3">Work In Progress...</v-card-title>
            <v-card-text class="wrench-container">
                <v-icon icon="mdi-wrench" size="100"></v-icon>
            </v-card-text>
        </v-card>
    </div>
</template>

<style>

 .work-in-progress-card {
    height: 50vh;
    width: 40vw;
}
 .in-progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
}
.wrench-container {
    margin-top: 15%;
    display: flex;
    justify-content: center;
}

</style>