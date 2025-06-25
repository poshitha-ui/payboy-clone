<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template >


   <div class="min-h-screen flex flex-col">
    <!-- Your header/navbar (optional) -->
    <Navbar></Navbar>
  

    <!-- Main content (flex-grow pushes footer down) -->
    <main class="flex-grow">
       <router-view />
    </main>

    <!-- Footer (always at bottom) -->
    <Footer></Footer>
    
  </div>

</template>

<style scoped>

</style>
