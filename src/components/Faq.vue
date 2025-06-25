<script setup>
import { ref } from 'vue';
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

    const faqList = [
        {
            "id" : 1,
            "title" : "How can an automated leave management system help my business?",
            "text"  : "An automated leave management system can streamline leave processes, reduce errors, and enhance efficiency by automating leave tracking and approval workflows. Here’s why businesses manage leave:"
        },
        {
        "id" : 2, 
        "title" : "Why use Payboy’s automated leave management system?", 
        "text"  : "Payboy’s automated leave management system offers a user-friendly platform that simplifies leave tracking and ensures compliance with statutory regulations. It integrates seamlessly with payroll to accurately calculate leave entitlements and balances and allows employees to apply for leave easily. The system also offers customisable leave types, making it flexible for diverse business needs.",
        },
        {
        "id" : 3, 
        "title" : "Is Payboy’s automated leave management system suitable for businesses of all sizes?", 
        "text"  : "Yes, Payboy’s automated leave management system is suitable for businesses of all sizes. Whether you’re a small startup or a larger enterprise, Payboy can accommodate your leave management needs with features that are scalable and adaptable to your specific requirements.",
        },
        {
        "id" : 4, 
        "title" : "Can Payboy’s automated leave management system support custom leave types?", 
        "text"  : "Yes, Payboy's automated leave management system allows businesses to create and manage custom leave types. This flexibility ensures that employers can define leave categories that align with company policies, whether it’s for study leave, volunteer work, or any other custom type of leave.",
        },
        {
        "id" : 5, 
        "title" : "How does Payboy's automated leave management system work?", 
        "text"  : "Payboy's automated leave management system works by automating the leave application and approval processes. Employees can submit leave requests via web app or mobile app, which are then routed to the appropriate manager for approval. The system tracks leave balances in real time and integrates with payroll to ensure accurate calculations of entitlements.",
        },
    ]
    const openFaqId = ref(null);
    const toggleFaq = (id) =>{
        
        if(openFaqId.value !== id){
            
            openFaqId.value = id;
        }else{
            
            openFaqId.value = null;
        }
    }

</script>


<template>
    <div class="faq-sec space-between-sections">
    <div class="wrapper py-6">
        <header class="pb-subheader-section">
            <span class="pb-heading-label"> FAQ's </span>
            <h3 class="pb-subheading">Questions about our leave management system? We have answers.</h3>
        </header>
        <a class="pb-card mt-6 app-transision block" style="cursor: pointer !important;" v-for="faq in faqList" :key="faq.id" @click="toggleFaq(faq.id)"
        :class="{ 'active': openFaqId === faq.id }">
            <div class="flex justify-between">
                <div class="pb-card-title">{{ faq.title }}</div>
                <button>
                    <PlusIcon v-if="openFaqId !== faq.id" class="h-5 w-5" />
                    <MinusIcon v-else class="h-5 w-5" />
                </button>
            </div>
            <p v-if="openFaqId === faq.id"class="pb-card-content">{{ faq.text }}</p>
        </a>
    </div>
    </div>
</template>



<style scoped>
    .faq-sec{ background: #f8f8fc; padding: 70px 0;}
    .pb-card.active .pb-card-title{ @apply text-[--primary-color] pb-3}
    .pb-card-title { @apply  font-semibold; } 
</style>