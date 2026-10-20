<script setup lang="ts">
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import { ref } from 'vue';
import type { ChatMessage } from '../interfaces/chat-message.interface.ts';
const messages=ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'Hola mundo!!!',
        itsMine: true
    },
    {
        id: new Date().getTime(),
        message: '¿Quieres ir a tomar cafe?',
        itsMine: true
    },
    {
        id: new Date().getTime() + 1,
        message: 'No',
        itsMine: false,
        image:'https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif'
    },
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  })
}

</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi amigo</span>
    </div>

    <ChatMessages :messages="messages"/>
    <!-- Notación de tipo kebab-case -->
    <!-- Incluimos el método capturando el evento -->
    <MessageBox @send-message="onMessage($event)"/>

    
  </div>
</template>