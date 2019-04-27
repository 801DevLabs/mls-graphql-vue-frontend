<template>
<div>
    
    <div class="container">
        <app-toggle></app-toggle>
        <router-view></router-view>
    </div>
    
</div>
    
</template>

<script>
import Toggle from './components/ToggleHeader.vue'
    export default {
        components: {
            appToggle: Toggle
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
