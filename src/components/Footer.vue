
<script setup>
    const footerColumns = [
        {
          title: "Solutions",
          items: [
            "Payroll Processing",
            "Leaves Management",
            "Claims Management",
            "Time Attendance",
            "Shift Scheduling"
          ]
        },
        {
          title: "Resources",
          items: [
            "The Payroll Handbook",
            "Top HR trends eBook",
            "ChatGPT Cheat Sheet",
            "Support Center",
            "CPF Calculator for SG",
            "CPF Calculator for PR"
          ]
        },
        {
          sections: [
            {
              title: "Industries",
              items: [
                "Accounting & Payroll Services",
                "Food & Beverages",
                "Recruitment",
                "NCSS NGO"
              ]
            },
            {
              title: "Promotions",
              items: [
                "NCSS Funding for NGOS",
                "Upgrade Promotion"
              ]
            }
          ]
        },
        {
          title: "Company",
          items: [
            "About Us",
            "Careers",
            "News",
            "Contact Us",
            "Customer Stories"
          ]
        }
      ]
</script>
<template>
    <footer class="footer-wrapper space-between-sections">
        <div class="wrapper py-10">
          <div class="ftr-logo" >
                      <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_bd585dd462b2c418ea2904f2197c2d93/payboy.png" />

          </div>
            <div class="grid md:grid-cols-4">
              <div 
                v-for="(column, index) in footerColumns" 
                :key="index" 
                class="max-w-100"
              >
                <!-- Regular single-section column -->
                <div v-if="column.title" class="pb-prod-list">
                  <h2 class="text-2xl font-semibold text-white mb-2">{{ column.title }}</h2>
                  <ul>
                    <li v-for="(item, itemIndex) in column.items" :key="itemIndex">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                
                <!-- Combined Industries/Promotions column -->
                <div v-if="column.sections">
                  <div v-for="(section, sectionIndex) in column.sections" :key="sectionIndex" class="pb-prod-list">
                    <h2 class="text-2xl font-semibold text-white mb-2">{{ section.title }}</h2>
                    <ul>
                      <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="footer-socials">

              <div class="md:flex justify-between wrapper py-4">
                <div class="">
                  <p class=""><a  href="mailto:info@payboy.biz"><font-awesome-icon class="text-xl" :icon="['far', 'envelope']" /> &nbsp; <span class="underline text-xl font-bold">info@payboy.biz</span></a></p>
                </div>
                <div class>
                  <ul class="flex gap-x-4">
                    <li><a href=""><FontAwesomeIcon class="text-xl" :icon="['fab', 'instagram']" /></a></li>
                    <li><a href=""><FontAwesomeIcon class="text-xl" icon="fab fa-facebook" /></a></li>
                    <li><a href=""><FontAwesomeIcon class="text-xl" icon="fab fa-youtube" /></a></li>
                    <li><a href=""><FontAwesomeIcon class="text-xl" icon="fab fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="ftr-privary">
              <ul class="text-sm md:flex gap-x-3 justify-center">
                <li> <a href="">Home</a> | </li>
                <li> <a href="">Conatc us </a> | </li>
                <li> <a href="">Privacy Policy</a> | </li>
                <li> <a href="">Terms & Conditions</a> </li>
              </ul>
              <p class="text-sm mt-3">
                <span> Terms of Service Privacy Policy © 2025 Payboy </span></p>
            </div>
        
    </footer>
  
</template>

<style scoped>
    .footer-wrapper{
        @apply bg-[#262626] border-[#3c3c3c3] text-[#808080]
    }
    .pb-prod-list ul li{
        @apply pb-3
    }
    .pb-prod-list:not(:last-child){
        @apply mb-2
    }
    .footer-socials{
        @apply border-y border-y-[#333]
    }
    .ftr-privary{
        @apply text-center py-6
    }
    .ftr-logo{
        @apply w-[200px] ml-[-10px] mb-4
    }
    .abc{
          background: #f0eff2;
    border-top: 4px solid #f0eff2;
    }
</style>