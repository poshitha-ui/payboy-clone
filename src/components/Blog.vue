<script setup>
    import carsouel from '@/components/carsouel.vue';
</script>

<template>
    <div class="pb-blog space-between-sections">
        <div class="wrapper">
            <header class="pb-subheader-section">
                <span class="pb-heading-label"> Popular reads.</span>
                <h3 class="pb-subheading">We thought you might be interested in..</h3>
               
        </header>
        <div class="md:flex gap-12">
            <div class="md:basis-[30%]">
                <div class="blog-itmes">
                    <div class="md:flex gap-6">
                        <div class="basis-[33%]">
                            <img class="rounded-xl blog-item-img" src="https://payboy.sg/wp-content/uploads/2024/11/Blog-How-to-implement-parent-care-leave-in-Singapore_.png" />
                        </div>
                        <div class="basis-[70%]">
                            <ul class="flex gap-4 mb-4">
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'calendar-days']"  /> <span> 28 Nov 2024 </span></li>
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'layer-group']" /> <span> Tips </span></li>
                        </ul>
                        <h4 class="text-lg font-medium">How to implement parent care leave in Singapore?</h4>
                        </div>
                    </div>
                </div>
                <div class="blog-itmes">
                    <div class="md:flex gap-6">
                        <div class="basis-[33%]">
                            <img class="rounded-xl blog-item-img" src="https://payboy.sg/wp-content/uploads/2024/11/Blog-Employee-Assistance-Program-EAP-guide-for-employers-in-Singapore.png" />
                        </div>
                        <div class="basis-[70%]">
                            <ul class="flex gap-4 mb-4">
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'calendar-days']"  /> <span> 28 Nov 2024 </span></li>
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'layer-group']" /> <span> Tips </span></li>
                        </ul>
                            <h4 class="text-lg font-medium">Employee Assistance Program (EAP) guide for employers in Singapore</h4>
                        </div>
                    </div>
                </div>
                <div class="blog-itmes">
                    <div class="md:flex gap-6">
                        <div class="basis-[33%]">
                            <img class="rounded-xl blog-item-img" src="https://payboy.sg/wp-content/uploads/2024/11/Blog-How-to-write-constructive-employee-evaluation-comments.png" />
                        </div>
                        <div class="basis-[70%]">
                            <ul class="flex gap-4 mb-4">
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'calendar-days']"  /> <span> 28 Nov 2024 </span></li>
                            <li class="text-sm"><FontAwesomeIcon class="text-[--primary-color] mr-1" :icon="['fas', 'layer-group']" /> <span> Leave </span></li>
                        </ul>
                            <h4 class="text-lg font-medium">How to write constructive employee evaluation comments </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:basis-[70%]">
                <carsouel />
            </div>
        </div>
        </div>
        
    </div>
</template>


<style lang="css" scoped>
    .blog-itmes{
        padding: 24px 0;
        border-bottom: 1px solid rgba(0, 72, 255, 0.2);
        cursor: pointer;
    }
    .blog-itmes:last-child {
        border-color: transparent;
    }
    .blog-itmes img, .blog-itmes h4 {
        transition: all .45s ease;
    }
    .blog-item-img{
            overflow: hidden;
        height: 100%;
        object-fit: cover;
    }
    .blog-itmes:hover img {
        transform: scale(1.02);
    }
    .blog-itmes:hover h4 {
        color: var(--primary-color);
    }
</style>