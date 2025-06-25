<script setup>
import { shallowRef, defineAsyncComponent } from 'vue';
// import LeavemangeImgae  from './../assets/images/slide2.webp';
// import ScheduleImage  from './../assets/images/schedule.webp';
// import MOMImage  from './../assets/images/slide3.webp';

import slide1 from '@/assets/images/slide2.webp'
import slide2 from '@/assets/images/slide2.webp'
import slide3 from '@/assets/images/slide2.webp'


// List of all possible components
const componentMap = {
  Hero: defineAsyncComponent(() => import('@/components/Hero.vue')),
  Features: defineAsyncComponent(() => import('@/components/Features.vue')),
  testimonial: defineAsyncComponent(() => import('@/components/testimonial.vue')),
  Faq: defineAsyncComponent(() => import('@/components/Faq.vue')),
  Subscription: defineAsyncComponent(() => import('@/components/Subscription.vue'))
};

// Define your page structure
const pageSections = shallowRef([
  { component: 'Hero', props: {} },
  { component: 'Features', props: {} },
  { 
    type: 'static',
    data: {slide1, slide2, slide3},
    content: `
    
      <section class="space-between-sections">
        <div class="wrapper">
            <div class="">
                <header class="pb-subheader-section">
                    <span class="pb-heading-label"> Why Payboy </span>
                    <p class="pb-subheading"> what can our automated leave management system do! </p>
                    <p class="pb-text">Eliminate manual updates and errors. Automatically sync tea</p>
                </header>
                <div class="bg-green-50 p-8 rounded-lg">
                    <div class="grid md:grid-cols-2 md:gap-x-12">
                        <div class="w-full flex flex-col justify-center">
                            <p class="pb-subtitle"> Syncs with shift scheduling and payroll. </p>
                            <p class="pb-text">
                                Eliminate manual updates and errors. Automatically sync team availability with Shift Scheduling and calculate leave payouts in Payroll—down to the last dollar. Handles last-minute changes and overtime seamlessly.
                            </p>
                        </div>
                        <div class="w-full">
                            <div class="md:h-80"><img :src="data.slide2" class="rounded-2xl h-full ml-auto" alt="image not found"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="w-full bg-orange-50 p-8 rounded-lg">
                            <p class="pb-subtitle"> Leave everthing in one place. </p>
                            <p class="pb-text">Apply for leave digitally. Check leave balances. Approve leaves. Submit and store supporting documents or medical certificates. Do it all with the Leave module on web or mobile app.                    
                            </p>
                            <div class="md:h-80">
                                <img :src="data.slide3" class="rounded-2xl h-full mx-auto mt-2" alt="image not found">
                            </div>

                        </div>
                        <div class="w-full bg-blue-50 p-8 rounded-lg">
                            <p class="pb-subtitle"> Give your time the rest they deserve. </p>
                            <p class="pb-text">We'll start you off with a setup that's compliant to MOM requirements, but we'll be happy to help you update it to a leave policy that works best for your business needs.                   
                            </p>
                            <div class="md:h-80">
                                <img :src="data.slide1" class="rounded-2xl h-full mx-auto mt-2" alt="image not found">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
  },
  { component: 'testimonial', props: {} },
  { component: 'Faq', props: {} },
  { component: 'Subscription', props: {} }
]);
</script>

<template>
  <div class="pb-home">
    <template v-for="(section, index) in pageSections" :key="index">
      <!-- Dynamic Components -->
      <component 
        v-if="section.component"
        :is="componentMap[section.component]"
        v-bind="section.props"
      />
      
      <!-- Static Content -->
      <div v-else-if="section.type === 'static'" v-html="section.content"></div>
    </template>
  </div>
</template>

<style lang="css" scoped>
header{
    position: sticky; top: 0; z-index: 1000;  
      
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1); /* or transparent if just blur */
  backdrop-filter: blur(4px);
  z-index: 999;
  
}
.dropdown-menu-title{
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 14px;
    color: #000;
}
.pb-learn-more{
    padding-top: 10px;
    display: inline-block;
    text-decoration: underline;
}
.pb-learn-more:hover{
    color: #0048ff;
}
.dropdown-box{
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 2rem;
}
.dropdown-box .pb-card{
     background-color: #fff;
     padding: 1.25rem;
}
    .pb-hdr-col-layout{
        @apply  px-4 py-3  bg-white rounded-xl border border-[#ceceea] shadow-pbShadow
    }
    .cta-free{
        @apply bg-[--primary-color] p-2 text-white rounded-xl inline-block ml-1
    }

</style>