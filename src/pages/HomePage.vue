<script setup>
    import Subscription from '@/components/Subscription.vue';
    import Banner from '@/components/Banner.vue';
    import VideoPoster from './../assets/images/poster.png'
    import Tabs from '@/components/Tabs.vue';
    import Blog from '@/components/Blog.vue';
    import recognized from '@/components/recognized.vue';
    import CustomerTestimonial from '@/components/CustomerTestimonial.vue';
</script>

<template>
    <!-- Banner Section -->
    <Banner
        :hasBackground="true"
        showVideoHeader
        :videoPoster="VideoPoster"
        videoSource="https://www.youtube.com/embed/DMTqKR9ENXs"
        videoHeaderText="Free up your HR team’s time"
        label="Singapore's leading HR software"
        heading="Focus on your people. Leave the rest to"
        highlightText="PAYBOY"
        description="Payboy's Software helps you to take care of your essential HR processes, so that you can focus on the work which truly matters—bringing out the best in your peopl"
    />
    <!-- Products Section -->
    <section class="pb-home-products bg-[#f7f7f7] py-24">
        <div class="wrapper">
            <header class="pb-subheader-section">
                <span class="pb-heading-label"> Let’s make HR easier, together.</span>
                <h3 class="pb-subheading">Do it with all Payboy Hr software</h3>
                <p class="text-lg">
                    We’re not just a platform—we’re your partners in HR success! Our smart, digital solutions streamline your workflow, reduce errors, and save you time—all for just 
                    <strong>$3 per employee per month</strong>.
                </p>
            </header>
            <div class="grid md:grid-cols-5 gap-4">
                <div class="w-full pb-hdr-col-layout flex flex-col justify-center">
                    <img class="w-[65%] mx-auto" src="https://payboy.sg/wp-content/uploads/2022/03/ezgif.com-gif-maker-1.gif" alt="Payroll Icon" />
                    <p class="pb-card-title mt-4 text-center uppercase text-[#0149ff]">Payroll <br/>Processing</p>
                </div>
                <div class="w-full pb-hdr-col-layout flex flex-col justify-center">
                    <img class="w-[65%] mx-auto" src="https://payboy.sg/wp-content/uploads/2022/03/ezgif.com-gif-maker-2.gif" alt="Payroll Icon" />
                    <p class="pb-card-title mt-4 text-center uppercase text-[#ffaa29]">Leaves <br/> Management</p>
                </div>
                <div class="w-full pb-hdr-col-layout flex flex-col justify-center">
                    <img class="w-[65%] mx-auto" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/3-482fc42ed5cbfc67e14695858e3bb30201b7e79cf5bfbb02c5cfeae5bab689e0.svg" alt="Payroll Icon" />
                    <p class="pb-card-title mt-4 text-center uppercase text-[#33bba8]">Claims <br/> Management</p>
                </div>
                <div class="w-full pb-hdr-col-layout flex flex-col justify-center">
                    <img class="w-[65%] mx-auto" src="https://payboy.sg/wp-content/uploads/2022/03/ezgif.com-gif-maker-5.gif" alt="Payroll Icon" />
                    <p class="pb-card-title mt-4 text-center uppercase text-[#643a96]">Time <br/> Attendance</p>
                </div>
                <div class="w-full pb-hdr-col-layout flex flex-col justify-center">
                    <img class="w-[65%] mx-auto" src="https://payboy.sg/wp-content/uploads/2022/03/ezgif.com-gif-maker-6.gif" alt="Payroll Icon" />
                    <p class="pb-card-title mt-4 text-center uppercase text-[#ee3435]">Shift <br/> Scheduling</p>
                </div>
            </div>
        </div>
        
    </section>

    <div class="pb-built space-between-sections">
        <div class="wrapper">
           <header class="pb-subheader-section">
                    <span class="pb-heading-label"> How We Build </span>
                    <p class="pb-subheading"> From Feedback to Future </p>
            </header>
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="full bg-[#eff4ff] rounded-xl p-8">
                    <header class="pb-subheader-section text-left">
                        <h3 class="pb-subheading">Build with people</h3>
                        <p class="">
                           Payboy is driven by the HR issues businesses face, the feedback on our solutions, and a future where businesses can focus solely on bringing out the best in their people.
                        </p>
                        <p class="pt-3">
                           With various support avenues, we take feedback very seriously to build something that our users love.
                        </p>
                    </header>
                    <video src="./../assets/images/build-with-people.mp4" autoplay loop></video>
                </div>
                <div class="full rounded-xl p-8" style="background: linear-gradient(351deg, #5037E7 10.36%, #0048ff 119.69%);">
                    <header class="pb-subheader-section text-left text-white">
                        <h3 class="pb-subheading ">Build for people</h3>
                        <p class="">
                           Payboy's intuitive platform is built for employees and employers to be used for digital submission of claims, a quick check of payslip on the go, or intensive planning work at the desk.
                        </p>
                        <p class=" pt-3">
                           Payboy plays well with Xero, Financio and other app integrations you may already be using
                        </p>
                    </header>
                    <!-- <video src="./../assets/images/build-with-people.mp4" autoplay loop></video> -->
                     <img src="./../assets/images/build-with-people-unscreen.gif" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>

    <!-- Brands Section -->
    <Tabs />
    <div class="space-between-sections">
         <header class="pb-subheader-section">
            <span class="pb-heading-label"> How We Build </span>
            <p class="pb-subheading"> We’re Recognized Globally </p>
        </header>
        <CustomerTestimonial />
    </div>
    
<recognized />
    <!-- Blog Section -->
    <Blog />
    <!-- Subscription Section -->
    <Subscription />

</template>



<style lang="css" scoped>
   :deep(.banner-bg) {
        background-image: url(https://payboy.sg/wp-content/uploads/2022/02/MAIN2.gif) !important;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        padding-bottom: 21rem !important;
    }
    .pb-home-products .pb-hdr-col-layout{
        @apply px-6 py-8
    }
    @media screen and (max-width: 567px) {
        :deep(.banner-bg) {
            padding-bottom: 9rem !important;
        }
    }
</style>