<template>
  <div class="relative">
    <div class="bg-[#eff4ff] rounded-[20px] overflow-hidden relative">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="currentIndex === index"
        class="transition-opacity duration-700 ease-in-out w-full"
      >
        <div class="grid md:grid-cols-2 items-center ">
          <!-- Image -->
          <!-- <div class="w-full">
            <img
              :src="slide.image"
              :alt="slide.alt"
              class="w-full h-auto max-h-[400px] object-cover rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none"
            />
          </div> -->

          <!-- Image as background -->
          <div
            class="w-full h-[200px] md:h-full rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>

          <!-- Content -->
          <div class="w-full px-4 py-8 sm:px-6 md:px-10">
            <ul class="flex flex-wrap gap-4 pt-4 text-sm">
              <li>
                <FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'calendar-days']" />
                <span>{{ slide.date }}</span>
              </li>
              <li>
                <FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'layer-group']" />
                <span>{{ slide.category }}</span>
              </li>
            </ul>
            <h2 class="text-2xl sm:text-3xl font-bold pt-4 pr-2">{{ slide.heading }}</h2>
            <p class="mt-2 opacity-60 text-base pr-2">{{ slide.content }}</p>
            <button class="btn btn-primary inline-flex mt-4">Learn more</button>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none z-10"
      >
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
    content: 'In an ageing society like Singapore, the need to care for elderly parents is a pressing concern for many employees. As individuals juggle their careers alongside caregiving responsibilities, the introduction of parent care leave has been a significant step towards recognising and addressing the needs of working caregivers.'
  },
  {
    image: 'https://payboy.sg/wp-content/uploads/2024/11/Blog-Employee-Assistance-Program-EAP-guide-for-employers-in-Singapore.png',
    alt: 'Nature landscape',
    heading: 'Employee Assistance Program (EAP) guide for employers in Singapore',
    date: '28 Nov 2024',
    category: 'Leave',
    content: `Employee well-being has become a cornerstone of organisational success in today’s dynamic business landscape. One way employers in Singapore can address this is by implementing an Employee Assistance Program (EAP). EAPs are designed to support employees' mental, emotional, and social well-being, ensuring a healthier,....`
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

<style scoped>
.blog {
  border-radius: 20px;
  display: flex;
  width: 100%;
  height: auto;
}
.carsoule-img {
  border-radius: 20px 20px 0 0;
}
@media (min-width: 768px) {
  .carsoule-img {
    border-radius: 20px 0 0 20px;
  }
}
</style>
