<script setup lang="ts">
interface Option {
    name: string,
    active: boolean
}

defineProps({
    flex: Number,
    options: Array<Option>
})

const getClass = (option: Option) => {
    return (option.active ? "bg-secondary" : "bg-primary") + " text-center"
}
</script>

<template>
    <div class="menu-card bg-primary" >
        <v-card v-for="option in options" 
            :class="getClass(option)"
            :text="option.name"
            variant="tonal">
        </v-card>
    </div>
</template>


<style>


</style>