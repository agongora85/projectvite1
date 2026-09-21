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
                <RouterLink to="/">Promesas</RouterLink>
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