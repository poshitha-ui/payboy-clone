<template>
  <div class="relative ">
    <!-- Carousel wrapper -->
    <div class="relative bg-[#eff4ff] min-h-[500px] rounded-[30px]">
      <!-- Slides -->
      <div v-for="(slide, index) in slides" 
           :key="index"
           class="absolute inset-0 transition-opacity duration-700 ease-in-out blog"
           :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
           <div class="grid md:grid-cols-2 gap-6 ">
                <div class="w-full">
                    <img :src="slide.image" :alt="slide.alt" class="object-cover w-full h-full carsoule-img">
                </div>
                <div class="w-full ">
                    <div class="">
                        <ul class="flex gap-4 pt-4">
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'calendar-days']"  /> <span> {{ slide.date }} </span></li>
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'layer-group']" /> <span> {{ slide.category }} </span></li>
                        </ul> 
                        <h2 class="text-3xl font-bold pt-4 pr-2">{{ slide.heading }}</h2>
                        <p class="mt-2 opacity-60 text-base pr-2">{{ slide.content }}</p>
                    </div>
                     <button class="btn btn-primary inline-flex mt-4"> Learn more</button> 
                </div>
           </div>
            
            
        </div>
<!-- Navigation buttons -->
        <button @click="prevSlide" 
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" 
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = ref([
  {
    image: 'https://payboy.sg/wp-content/uploads/2024/11/Blog-How-to-implement-parent-care-leave-in-Singapore_.png',
    alt: 'Nature landscape',
    heading: 'How to implement parent care leave in Singapore?',
    date: '28 Nov 2024',
    category: 'Leave',
    content: 'In an ageing society like Singapore, the need to care for elderly parents is a pressing concern for many employees. As individuals juggle their careers alongside caregiving responsibilities, the introduction of parent care leave has been a significant step towards recognising and addressing the needs of working caregivers. This guide delves into the concept of parent care leave, its implementation in Singapore, and how employers and employees can benefit from its provisions.'
  },
  {
    image: 'https://payboy.sg/wp-content/uploads/2024/11/Blog-Employee-Assistance-Program-EAP-guide-for-employers-in-Singapore.png',
    alt: 'Nature landscape',
    heading: 'Employee Assistance Program (EAP) guide for employers in Singapore',
    date: '28 Nov 2024',
    category: 'Leave',
    content: `Employee well-being has become a cornerstone of organisational success in today’s dynamic business landscape. One way employers in Singapore can address this is by implementing an Employee Assistance Program (EAP). EAPs are designed to support employees' mental, emotional, and social well-being, ensuring a healthier, more engaged workforce. This guide provides an in-depth guide to understanding and implementing an Employee Assistance Program in Singapore,.....`
  }
]);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style lang="css" scoped>
    .blog{
        border-radius: 30px;
    display: flex;
    height: 100%;

    }
    .carsoule-img{
        border-radius: 30px 0 0 30px;
    }
</style>