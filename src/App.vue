<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import './bases/functions.ts'
import './bases/deses-obj.ts'
import './bases/deses-array.ts'
import './bases/fetch-api.ts'
import './bases/axios.ts'
import './bases/async-await.ts'
import { ref, computed } from 'vue'
const Originalquotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]
const message=ref("I'm Batman");
const author=ref("Alejandro Góngora Escalante");
const quotes=ref(Originalquotes);
setTimeout(()  => {
  message.value="I'm Robin";
  author.value="Alejandro";
  console.log("Ejecutando");
},1000);

const changeAuthor=()=>{
  author.value="juan perez";
};
const showAuthor=ref(false);
const newMessage=ref('');
const totalQuotes=computed(()=>{
  return quotes.value.length;
});

const toggleAuthor=()=>{
  showAuthor.value=!showAuthor.value;
};

const addQuote = ()=>{
  if(newMessage.value.trim().length > 0){
    quotes.value.unshift({ quote: newMessage.value, author:'Juan Perez'});
    newMessage.value='';
  }
};




</script>

<template>
  <Navbar/>
  <h1>{{ message }}</h1>
  <h2>{{  author }}</h2>
  <h1>Batman quotes {{ totalQuotes }}</h1>
  <input 
  type="text"
  placeholder="Add quote"
  @keypress.enter="addQuote"
  v-model="newMessage">
  <button @click="showAuthor=!showAuthor">Toggle Author</button>
  <button @click="addQuote">Add quote</button>
  <ul style="text-align: justify;">
    <!-- Por cada quote que haya dentro quotes, crea un elemnto <li>-->
      <!-- Extraemos sus propiedades en conjunto con el index -->
    <ol v-for="({ quote, author }, index) in quotes">
      <span>{{ index + 1 }} - {{ quote }}</span>
      <blockquote v-if="showAuthor">{{ author }}</blockquote>
    </ol>
  </ul>
  <button v-on:click="changeAuthor">Cambiar Autor</button>
  <RouterView/>
</template>
<style scoped>
.title{
  color:blueviolet;
}

.highlight{
  color:yellow;
}

.red{
  color:red;
}

main{
  text-align: justify;
  padding: 10px;
}
</style>