<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative md:min-h-[400px] min-h-[200px] overflow-hidden">
      <!-- Slides container -->
      <div class="flex h-full transition-transform duration-700 ease-in-out"
           :style="translateStyle"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"     
      >
        <!-- Each slide -->
        <div v-for="(slide, index) in slides" 
             :key="index"
             class="flex-shrink-0 w-full md:w-1/4 h-full px-3 blog">
          <img :src="slide.image" :alt="slide.alt" class="object-cover w-full h-full carsoule-img">
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
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const slides = ref([
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/T05.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/MotionSauce.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/Highspark.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/Merely.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/Khengsun.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/GJC.png', alt: 'Nature landscape' },
  { image: 'https://payboy.sg/wp-content/uploads/2023/03/CAP.png', alt: 'Nature landscape' }
]);

const currentIndex = ref(0);
const slidesPerView = ref(4); // default: desktop

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth < 768 ? 1 : 4;
};

const translateStyle = computed(() => {
  const shift = 100 / slidesPerView.value;
  return {
    transform: `translateX(-${currentIndex.value * shift}%)`
  };
});

const nextSlide = () => {
  if (currentIndex.value < slides.value.length - slidesPerView.value) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  } else {
    currentIndex.value = slides.value.length - slidesPerView.value;
  }
};

let intervalId = null;

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
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
  startAutoPlay();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
  stopAutoPlay();
});

const startX = ref(0);
const endX = ref(0);

const handleTouchStart = (e) => {
  startX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  endX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const diff = startX.value - endX.value;

  if (Math.abs(diff) > 50) { // Minimum swipe distance
    if (diff > 0) {
      nextSlide(); // Swipe left
    } else {
      prevSlide(); // Swipe right
    }
  }
};

</script>

<style scoped>
.blog {
  border-radius: 30px 0 0 30px;
}
.carsoule-img {
  border-radius: 30px 0 0 30px;
}
</style>
