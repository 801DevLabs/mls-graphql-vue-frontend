<template>
<div>
    <app-header></app-header>
    <div class="container">
        <router-view></router-view>
    </div>
    
</div>
    
</template>

<script>
import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    background: #EEE;
    font-family: 'Roboto Condensed', sans-serif;
    color: #4B4B4B;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
}
</style>
