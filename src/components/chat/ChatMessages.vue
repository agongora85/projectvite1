<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';
interface Props {
    messages: ChatMessage[]
}
defineProps();
</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- Example Message -->
         <ChatBubble v-for="message in messages" :key="message.id" :its-mine="message.itsMine" :message="message.message" :image="message.image"/>
         <ChatBubble :its-mine="true" :message="'Hola Mundo'"/>
         <ChatBubble :its-mine="false" :message="'no'" image="https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif"/>
         <ChatBubble :its-mine="false" :message="'Hola Mundo'"/>
         <ChatBubble :its-mine="false" :message="'no'" image="https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif"/>
         <ChatBubble :its-mine="false" :message="'Hola Mundo'"/>
         <ChatBubble :its-mine="false" :message="'Hola Mundo'"/>
        </div>
    </div>
</template>
