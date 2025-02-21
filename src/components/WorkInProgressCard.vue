<script setup lang="ts">
defineProps({
    flex: Number
})
</script>


<template>
    <div :style='{"flex": flex}' class="in-progress-container">
        <v-card class="work-in-progress-card bg-primary">
            <v-card-title class="text-center">Work In Progress...</v-card-title>
        </v-card>
    </div>
</template>

<style>

 .work-in-progress-card {
    height: 50vh;
    width: 40vw;
    align-content: center;
}
 .in-progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>