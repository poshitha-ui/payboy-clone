<template>
    <section class="pb-home py-8 md:py-12">
        <div class="wrapper" :class="{ 'banner-bg': hasBackground }">
            <!-- Video Header Section -->
            <div v-if="showVideoHeader" class="flex justify-between items-center md:max-w-xl mx-auto pb-hdr-col-layout mb-6">
                <video 
                    class="poster" 
                    width="140" 
                    muted 
                    autoplay 
                    playsinline 
                    loop 
                    :poster="videoPoster"
                >
                    <source :src="videoSource" type="video/mp4">
                </video>  

                <h2 class="text-[17px] md:text-xl font-medium">{{ videoHeaderText }}</h2>
                <a :href="videoButtonLink" class="btn btn-video">{{ videoButtonText }} <FontAwesomeIcon class="text-xs" :icon="['fas', 'circle-play']" /></a>
            </div>

            <!-- Main Content -->
            <div class="text-center md:max-w-4xl mx-auto">
                <span v-if="label" class="pb-heading-label">{{ label }}</span>
                <h1 class="pb-heading">
                    {{ heading }}
                    <span v-if="highlightText" class="text-[--primary-color] font-shantell">{{ highlightText }}</span>
                </h1>
                <p v-if="description" class="text-xl">
                    <strong v-if="strongText">{{ strongText }}</strong> {{ description }}
                </p>
                
                <!-- Buttons -->
                <div v-if="showButtons" class="flex gap-x-3 justify-center pt-6">
                    <a :href="primaryButtonLink" class="btn btn-primary">{{ primaryButtonText }}</a>
                    <a :href="secondaryButtonLink" class="btn btn-secondary">{{ secondaryButtonText }}</a>
                </div>
                
                <!-- Optional Banner Image -->
                <div v-if="imageSrc" class="mt-12 banner-image">
                    <img class="rounded-md" :src="imageSrc" :alt="imageAlt">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    // Background
    hasBackground: {
        type: Boolean,
        default: false
    },
    
    // Video Header Section
    showVideoHeader: {
        type: Boolean,
        default: false
    },
    videoPoster: {
        type: String,
        default: ''
    },
    videoSource: {
        type: String,
        default: ''
    },
    videoHeaderText: {
        type: String,
        default: 'Unburden your HR team'
    },
    videoButtonText: {
        type: String,
        default: 'Play video'
    },
    videoButtonLink: {
        type: String,
        default: '#'
    },
    
    // Main Content
    label: {
        type: String,
        default: ''
    },
    heading: {
        type: String,
        required: true
    },
    highlightText: {
        type: String,
        default: ''
    },
    strongText: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    
    // Buttons
    showButtons: {
        type: Boolean,
        default: true
    },
    primaryButtonText: {
        type: String,
        default: 'Book A Demo'
    },
    primaryButtonLink: {
        type: String,
        default: '#'
    },
    secondaryButtonText: {
        type: String,
        default: 'Get Started Free'
    },
    secondaryButtonLink: {
        type: String,
        default: '#'
    },
    
    // Banner Image
    imageSrc: {
        type: String,
        default: ''
    },
    imageAlt: {
        type: String,
        default: ''
    }
});
</script>

<style lang="css" scoped>
    .pb-hdr-col-layout {
        padding: 6px;
    }
    .poster {
        border-radius: 10px;
    }
    .btn-video{
        background: #eff4ff;
        font-size: 15px;
        color: #0047ff;
        border-color: transparent;
    }
    @media screen and (max-width: 576px) {
        .poster {
            display: none;
        }
        .btn-video{
            font-size: 14px;
            font-weight: 900;
        }
    }
</style>