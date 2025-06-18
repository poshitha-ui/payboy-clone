<script setup>

</script>
<template>
    <div class="space-between-sections">
        <div class="wrapper">
            <header class="pb-subheader-section">
                <span class="pb-heading-label"> Testimonials </span>
                <h3 class="pb-subheading">what our users say</h3>
                <p>See how Payboy simplifies compliance and saves time, straight from our users</p>
            </header>
            <div class="">
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="w-full pb-card flex flex-col justify-between">
                        <FontAwesomeIcon class="text-2xl text-[#ffaa29] self-start" :icon="['fas', 'quote-right']" />
                        <p>More organisation in our HR matters which means more clarity, more employee welfare, more retention, and more productivity!</p>
                        <div>
                             <p class="c-name">HO CHANG JUN</p>
                            <p class="c-disignation">Founder</p>
                            <img class="w-[70px] rounded-full mt-1" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/testimonials/gram-01eb8938a081a01d7ceb592182efa052391148b0686cdfb5c49afaa91b430123.png" alt="">
                        </div>
                    </div>
                    <div class="w-full pb-card flex flex-col justify-between">
                        <FontAwesomeIcon class="text-2xl text-[#ffaa29] self-start" :icon="['fas', 'quote-right']" />
                        <p>Our team members also find it very convenient to use the Payboy mobile app as leave applications and claims can be done anytime and anywhere. Staff members can have a choice to clock in using the mobile app or through the device located at the staff entrance.</p>
                        <div>
                            <p class="c-name">LILY CHAN</p>
                            <p class="c-disignation">VP, Executive Development</p>
                            <img class="w-[70px] rounded-full mt-1" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/testimonials/furama-4f3c5c7f6646e9a5b712c38f4097a10b65de3d9231031874883a0629d50af7e7.png" alt="">
                        </div>
                    </div>
                    <div class="w-full pb-card flex flex-col justify-between">
                        <FontAwesomeIcon class="text-2xl text-[#ffaa29] self-start" :icon="['fas', 'quote-right']" />
                        <p>We are really happy to have signed up Payboy for our HR needs. Very user-friendly interface and it saves us a lot of time from on-boarding staff to generating our payrolls every month. It's the best I have used so far.</p>
                        <div>
                            <p class="c-name">EE MING</p>
                            <p class="c-disignation">Director</p>
                            <img class="w-[70px] rounded-full mt-1" src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/testimonials/subway-e9b79f9bc934596ef2dec5cab82cefdc2fc5168db4335574f934e4e441dbd02b.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="css" scoped>
.c-name{
    @apply font-semibold text-xl pt-3
}
</style>