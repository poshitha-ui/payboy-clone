<template>
    <div class="space-between-sections">
        <div class="max-w-4xl mx-auto p-4">
            <header class="pb-subheader-section">
                <span class="pb-heading-label"> You're Awesome! </span>
                <h3 class="pb-subheading">Thank you for believing in us</h3>
            </header>
            
            <!-- Tab Headers with Navigation Arrows -->
            <div class="relative">
                <!-- Left Arrow -->
                <button 
                    v-show="showLeftArrow"
                    @click="scrollTabs(-1)"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Scroll tabs left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <!-- Scrollable Tabs Container -->
                <div 
                    ref="tabsContainer"
                    class="hide-scrollbar overflow-x-auto whitespace-nowrap py-2 px-8 scroll-smooth"
                    @scroll="handleScroll"
                >
                    <div class="flex justify-around">
                        <button
                            v-for="(tab, index) in tabs"
                            :key="index"
                            @click="activeTab = index"
                            :class="[
                                'px-4 py-2 font-medium text-base focus:outline-none mx-1',
                                activeTab === index
                                    ? 'active-tab'
                                    : 'custom-tab'
                            ]"
                        >
                            {{ tab.title }}
                        </button>
                    </div>
                </div>
                
                <!-- Right Arrow -->
                <button 
                    v-show="showRightArrow"
                    @click="scrollTabs(1)"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Scroll tabs right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            <!-- Tab Content -->
            <div class="p-4">
                <div v-for="(tab, index) in tabs" :key="index">
                    <div class="mt-6" v-if="activeTab === index" v-html="tab.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { 
            title: 'Featured', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/1-f8b8f41d20d39df7e0c8e6ba6394f1890a9a203feeefe9a451f53b70c105dd3e.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/2-8044640ee1ffeb2f1b0ac7a1a49d452cdfa7676e7b4025e96c1676315fb0ac3b.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/3-13a629ac65f2c4294d96ad7159aa0b7e7266a1cdc3832687912951e9d2f359db.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/4-879ee13dbddfba847eb72a5e1fcc9de4271afe5d3f36cb29c2168bc803056c79.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/5-24ece7fde36d5bd7438b4f8c45253023c7623aa66969e61616e1de9db936714f.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/6-8dd0098a015595eeae249bb696702cd8e3090f8d13810e09bf665dc5d6655836.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/7-f101b8341315476b8c8483f31a6c794fbe5a57a431512ee5ea01b24b24f4a02b.png" alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/8-2fcf546748e958a73d68d61a985913490c0500a87129976a91ba4a2a00b60762.png" alt="image not found" />    
                    </div>
                </div>
            `
        },
        { 
            title: 'Food & Beverages', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/2-260d8089edfd575af74038c0cc28f214bfc16d7a2344123c8979c7d29b397e0e.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/3-0b2501f236c71926e6cc1b8db1feed293e40c1955ac53a3ebec8bc04f6c64d7a.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/4-0aaad2f3165edc74170f036155c337d179963fdc051e671c0dd6f6ac309bbb99.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/5-810042553fb7b5e2fb9d78e9ac13d3085897e42dcf49f69186282014b543c7f2.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/6-9456d6fc934a39c92793b661b3e1ef5eead52e26c72a64b82167bce90c17a775.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/8-80c848c6e07356f54c3441a73d7124b2d66bdfb16ff29b01fb6a40b7f866904c.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/7-854516c53a841e1bfbb782b71bd97c17516c17100897aca8ffff9d98570e6b08.png"  alt="image not found" />
                    </div>
                </div>`
            
        },
        { 
            title: 'Professional Services', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/1-8e8d053c3486f0195df7e7fde4f6d9143900d34a7e440f1f5b5cb23883d9fed5.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/2-c5f003f43a4d38045c36e93a90bf705dccf9ef4891ac2cdf50beeaad079e7202.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/3-a9f7e1a565d05e1f8e208964e5f08173bdfba6e977774efeefb97f0d836b857b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/5-45afec7369a060ced8b3cc027df832d987e0c95da8c02e75b01cec045e81d03b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/4-d28b5a3a9450b41118b42d89dce71db57014e949dde76609a6cf28c7edc0d3ae.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/6-801184bfd9b70f1f857b456d497de90ff966982b31590a79a2bd0a0295a08309.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/7-f101b8341315476b8c8483f31a6c794fbe5a57a431512ee5ea01b24b24f4a02b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/8-e7bfca683bc7a1e83e5190ea40260952954653ea74a3521f0eeba8a68b2cc540.png"  alt="image not found" />
                    </div>
                </div>    
            `
        },
        { 
            title: 'Medical', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/1-8c0b0933401bc02d2006350781883cbfc57960c88dff5429023724efab6cbf61.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/2-1ca790343be3c2f657294bcf50ca5974acfd60f0c70f1b2760a7ae182b107541.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/3-7dc8bab1a080586a049ebec615863a45a1eadc7124882e62689069bd9f09a25b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/4-315b03ed58cbc1e08e6c0b9e5c687c07ebbdcb9457e56ae694287f0e8e54719f.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/5-23dd337fb9815b3e90fa236ba17998154d32e80c73ac47aee00f35d536a227e9.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/6-d9fc8989485456c95d1471fa7c1879e9b029b8ba95332a4b5ccd7766a21d4f57.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/8-49adfc8ee7d4347400eb5ae66cea63f7d7f80e3bb03e676dfa1dac373b0a552f.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/7-a2b603d5bef8cff8a22c6e4c039174c3feab5a2daedc24b46b77d176d21e9ae4.png"  alt="image not found" />
                    </div>
                </div>
            ` 
        },
        { 
            title: 'Social Services', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-2.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-6.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-24.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/ymca-3-logo-png-transparent-1.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-1.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-3.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3 shadow-pbShadow">
                        <img class="social-icons" src="https://payboy.sg/wp-content/uploads/2023/07/Group-4.svg"  alt="image not found" />
                    </div>
                </div>    
            ` 
        }
      ]
    }
  },
  mounted() {
    this.checkScroll();
    window.addEventListener('resize', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScroll);
  },
  methods: {
    scrollTabs(direction) {
      const container = this.$refs.tabsContainer;
      const scrollAmount = 200; // Adjust scroll distance as needed
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.checkScroll();
    },
    checkScroll() {
      const container = this.$refs.tabsContainer;
      if (!container) return;
      
      // Check if we need to show arrows
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
      this.showLeftArrow = hasHorizontalScroll && container.scrollLeft > 0;
      this.showRightArrow = hasHorizontalScroll && 
        container.scrollLeft < (container.scrollWidth - container.clientWidth - 1);
    }
  }
}
</script>

<style lang="css" scoped>
.active-tab{
    @apply bg-[--primary-color] text-white font-semibold rounded-[22px];
}
.custom-tab{
    background: white;
    border: 1px solid #ddd;
    border-radius: 22px;
}
/* Hide scrollbar but keep functionality */
.hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
}

/* Arrow buttons styling */
.arrow-button {
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 10;
}

/* Add smooth transition between tabs */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
:deep(.social-icons){
    margin: 0 auto;
}
 @media screen and (max-width: 567px) {
    :deep(.social-icons){
    max-width: 200px;
    }
 }
</style>