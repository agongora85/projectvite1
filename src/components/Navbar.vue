<template>
    <nav class="navbar">
        <div class="logo">
            Mi Sitio: Demo
        </div>
        <RouterLink to="/">Inicio</RouterLink>

        <div class="dropdown"
        @mouseenter="showMenuCont=true"
        @mouseleave="showMenuCont=false">
            <span class="menu-title">Contenido</span>        
            <div v-if="showMenuCont" class="dropdown-content">
                <RouterLink to="/constants">Constants</RouterLink>
                <RouterLink to="/objectLiterals">Object Literals</RouterLink>
                <RouterLink to="/headerComponent">HeaderComponent</RouterLink>
                <RouterLink to="/usovbind">Uso de v-bind</RouterLink>
                <RouterLink to="/importacion">Importación y exportación</RouterLink>
                <RouterLink to="/promesas">Promesas</RouterLink>
                <RouterLink to="/quoted">Quotes (citas - mensajes)</RouterLink>
                <RouterLink to="/calculatedproperty">Propiedad computada</RouterLink>
                <!-- En la siguiente línea para el uso de parametros se debe de utilizar el name, para identificar que se trata de un recurso en la ruta-->
                <RouterLink :to="{ name: 'mycounter', params: { id: 123 } }">Mi Contador</RouterLink>
                <RouterLink :to="{ name: 'mycounter2', params: { id: 456, nombre:'Juan' } }">Mi Contador 2</RouterLink>
                <RouterLink :to="{ name: 'mycounterscript', params:  {  value: 5 }}">Mi Contador Script</RouterLink>
                <RouterLink to="/indecision">Indecision</RouterLink>
                <RouterLink to="/contadorComposables">Contador composable</RouterLink>
            </div>
        </div>
        <div 
        class="dropdown"
        @mouseenter="showMenu=true"
        @mouseleave="showMenu=false">
            <span class="menu-title">Arreglos</span>
            <div v-if="showMenu" class="dropdown-content">
                <RouterLink to="/arreglomovie">Recorrido de movies</RouterLink>
                <RouterLink to="/arreglosimple">Recorrido</RouterLink>
            </div>
        </div>
        
        <div class="dropdown"
        @mouseenter="showMenuC=true"
        @mouseleave="showMenuC=false">
            <span class="menu-title">Componentes</span>
            <div v-if="showMenuC" class="dropdown-content">
                <RouterLink to="/arraycomponent">Comp. tipo Array</RouterLink>
                <RouterLink to="/tipoPadre">Padre</RouterLink>
            </div>
        </div>

        <div class="dropdown"
        @mouseenter="showMenuR=true"
        @mouseleave="showMenuR=false">
            <span class="menu-title">Rutas</span>
            <div v-if="showMenuR" class="dropdown-content">
                <RouterLink to="/example">Example</RouterLink> 
                <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMenuCont=ref(false)
const showMenu=ref(false)
const showMenuR=ref(false)
const showMenuC=ref(false)
</script>

<style scope>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #2c3e50;
        /* El siguiente atributo hace que al momento de posicionarse no desaparezca de la selección el despliegue del menú */
        position: relative;
        z-index: 10;
    }

    .log{
        color:white;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .nav-links {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    .nav-links a{
        color:white;
        text-decoration: none;
    }

    a, .menu-title {
        color:white;
        text-decoration: none;
        cursor:pointer;
    }

    .dropdown {
        position: relative;
    }

    .dropdown-content {
        position: absolute;
        top: 100%;
        left:0;
        z-index: 1;
        min-width: 150px;
        background: rgb(102, 102, 102);
        text-color:black;
        display: flex;
        flex-direction: column;
        border:1px solid #ddd;
    }

    .dropdown-content a:hover {
        background: #8a8989;
    }


</style>