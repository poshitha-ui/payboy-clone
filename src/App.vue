<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomePage from './pages/HomePage.vue';
import headerCopy from './components/header-copy.vue';
</script>

<template >


   <div class="min-h-screen flex flex-col">
    <!-- Your header/navbar (optional) -->
    <Header></Header>
  

    <!-- Main content (flex-grow pushes footer down) -->
    <main class="flex-grow">
      <HomePage />
    </main>

    <!-- Footer (always at bottom) -->
    <Footer></Footer>
    
  </div>

</template>

<style scoped>

</style>
