<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';
interface Props {
    messages: ChatMessage[]
}
defineProps<Props>();
</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- Example Message -->
         <ChatBubble 
         v-for="message in messages" 
         :key="message.id" 
         v-bind="message" />
        <!-- 
         El v-bind sustituye todo lo que se tiene en la parte de abajo
         :its-mine="message.itsMine" 
         :message="message.message" 
         :image="message.image"-->
        </div>
    </div>
</template>
