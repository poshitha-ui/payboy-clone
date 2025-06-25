<script setup>
    import Faq from '@/components/Faq.vue';
    import Subscription from '@/components/Subscription.vue';
    import testimonial from '@/components/testimonial.vue';
    import Features from '@/components/Features.vue';
    import Hero from '@/components/Hero.vue';
    import Banner from '@/components/Banner.vue';
    import HeroBannerImage from './../assets/images/hero-banner-pb.png'
</script>

<template>
    <!-- Banner Section -->
    <Hero />
    <!-- Features Section -->
    <Features />
    <!-- why US -->
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
                            <div class="lg:h-80"><img src="./../assets/images/slide2.webp" class="rounded-2xl h-full ml-auto" alt="image not found"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="w-full bg-orange-50 p-8 rounded-lg">
                            <p class="pb-subtitle"> Leave everthing in one place. </p>
                            <p class="pb-text">Apply for leave digitally. Check leave balances. Approve leaves. Submit and store supporting documents or medical certificates. Do it all with the Leave module on web or mobile app.                    
                            </p>
                            <div class="lg:h-80">
                                <img src="./../assets/images/slide1.webp" class="rounded-2xl h-full mx-auto mt-2" alt="image not found">
                            </div>

                        </div>
                        <div class="w-full bg-blue-50 p-8 rounded-lg">
                            <p class="pb-subtitle"> Give your time the rest they deserve. </p>
                            <p class="pb-text">We'll start you off with a setup that's compliant to MOM requirements, but we'll be happy to help you update it to a leave policy that works best for your business needs.                   
                            </p>
                            <div class="lg:h-80">
                                <img src="./../assets/images/slide3.webp" class="rounded-2xl h-full mx-auto mt-2" alt="image not found">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Testimonial Section -->
    <testimonial />
    <!-- FAQ Section -->
    <Faq /> 
    <!-- Subscription Section -->
    <Subscription />

</template>



<style lang="css" scoped>


    .pb-home{
        /* background: linear-gradient(-360deg, #e0effe, #fff); */
        background: linear-gradient(#f2fdfc, #f9fbff); 
        padding-top: 10rem;
        padding-bottom: 3rem;
        margin-top: -7rem;
    }
    
</style>