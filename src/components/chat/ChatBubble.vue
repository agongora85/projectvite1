<template>
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
        Hey, how's your day going?
        {{ message }}
        </div>
    </div>

    <!-- Example Received Message -->
    <div class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
        Not too bad, just a bit busy. How about you?
        <span class="capitalize">{{ message }}</span>
        <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md">
        {{  message }}
        </div>
    </div>
</template>
<script setup lang="ts">
    interface Props {
        message: string;
        itsMine: boolean;
        image?:string;
    }

    defineProps<Props>();
</script>