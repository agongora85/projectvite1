import { ref } from "vue";
import type { ChatMessage } from "../interfaces/chat-message.interface";
import type { YesNoResponse } from "../interfaces/yes-no.response";
import { sleep } from "../helpers/sleep";

export const useChat = () => {

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
            //image:'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'
            image:'https://yes-no-wtf.vercel.app/api'
        },
    ]);

    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async (text: string) => {
        if (text.length === 0) return;
        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: text,
        });
        // Evaluar si termina con un signo de ?
        if(!text.endsWith('?')) return;
        // Hacemos que la respuesta tarde un segundo
        await sleep(1.5);
        const {answer, image} = await getHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image,
    });
}


    return {
        messages,
        onMessage,
    }
}