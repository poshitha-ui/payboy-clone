
<script setup>
import { ref} from 'vue';

const activeDropdown = ref(null);

const toggleDropdown = (item) => {
  activeDropdown.value = activeDropdown.value === item ? null : item;
};

</script>
<template>
  <div 
  v-if="activeDropdown" 
  class="overlay" 
  @click="toggleDropdown(null)"
></div>
    <header>
        <div class="wrapper py-6">
            <div class="flex justify-between relative">
                <div class="">
                    <div class="w-[150px] pb-hdr-col-layout">
                                            <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/logo-f5aedb7a1fd271add77041a281c03b097ab0849ad596cf5d6dd33b303ee1cf22.svg" alt="logo" />

                    </div>
                </div>
                <div class="">
                    <div class="pb-hdr-col-layout">
                        <ul class="flex gap-x-10">
                            <li> <a href="" class="dropdown" @click.prevent="toggleDropdown('solutions')"> Solutions 
                                <div class="dropdown-wrapper">

                                
                                <div class="dropdown-box mt-6 absolute left-0" v-show="activeDropdown === 'solutions'">
                                <div class="grid grid-cols-5 gap-x-6">
                                    <div class="col-span-1">
                                        <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
                                        <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
                                        <a class="pb-learn-more"> Learn more </a>
                                    </div>
                                    <div class="col-start-2 col-span-4">
                                        <div class="grid grid-cols-3 gap-5">
                                            <a class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-module-icon.png"/>
                                                    <p class="text-lg font-semibold text-[#0048ff]">Payroll processing</p>
                                                </div>
                                                <p class="text-sm">Automate payroll and payslips with just a click.</p>
                                            </a>
                                            <a class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Leaves-Module-icon.png"/>
                                                    <p class="text-lg font-semibold text-[#ffaa29]">Leave management</p>
                                                </div>
                                                <p class="text-sm">Apply for leaves digitally, check leave balance and approve leaves.</p>
                                            </a>
                                            <a class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Claims-icon.png"/>
                                                    <p class="text-lg font-semibold text-[#0fc6ae]">Claims Management</p>
                                                </div>
                                                <p class="text-sm">Set claim policies for different roles and approve them with ease.</p>
                                            </a>
                                            <a class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Attendance-icon.png"/>
                                                    <p class="text-lg font-semibold text-[#643a96]">Time & Attendance Tracker</p>
                                                </div>
                                                <p class="text-sm">Check in and out from our mobile app from anywhere.</p>
                                            </a>
                                            <a class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Schedule.png"/>
                                                    <p class="text-lg font-semibold text-[#ee3435]">Shift Scheduling</p>
                                                </div>
                                                <p class="text-sm">Drag and drop shifts to allocate staff based on availability.</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                                
                            </a></li>
                            <li> <a href=""> Resources </a></li>
                            <li> <a href=""> Industries </a></li>
                            <li> <a href=""> Pricing </a></li>
                            <li> <a href=""> Contact </a></li>
                        </ul>
                    </div>
                </div>
                <div class="">
                    <span>
                        <button class="pb-hdr-col-layout mr-4"> Book a Demo</button>
                    </span>
                    <span class="pb-hdr-col-layout">
                        <a href=""> Log In </a>
                        <a href="" class="cta-free"> Sign Up</a>
                    </span>
                </div>
            </div>


<div class="dropdown-box mt-6" style="display: none;">
    <div class="grid grid-cols-5 gap-x-6">
        <div class="col-span-1">
            <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
            <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
            <a class="pb-learn-more"> Learn more </a>
        </div>
        <div class="col-start-2 col-span-4">
            <div class="grid grid-cols-3 gap-5">
                <a class="w-full pb-card">
                    <div class="flex gap-2 items-center ">
                        <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-module-icon.png"/>
                        <p class="text-lg font-semibold text-[#0048ff]">Payroll processing</p>
                    </div>
                    <p class="text-sm">Automate payroll and payslips with just a click.</p>
                </a>
                <a class="w-full pb-card">
                    <div class="flex gap-2 items-center ">
                        <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Leaves-Module-icon.png"/>
                        <p class="text-lg font-semibold text-[#ffaa29]">Leave management</p>
                    </div>
                    <p class="text-sm">Apply for leaves digitally, check leave balance and approve leaves.</p>
                </a>
                <a class="w-full pb-card">
                    <div class="flex gap-2 items-center ">
                        <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Claims-icon.png"/>
                        <p class="text-lg font-semibold text-[#0fc6ae]">Claims Management</p>
                    </div>
                    <p class="text-sm">Set claim policies for different roles and approve them with ease.</p>
                </a>
                <a class="w-full pb-card">
                    <div class="flex gap-2 items-center ">
                        <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Attendance-icon.png"/>
                        <p class="text-lg font-semibold text-[#643a96]">Time & Attendance Tracker</p>
                    </div>
                    <p class="text-sm">Check in and out from our mobile app from anywhere.</p>
                </a>
                <a class="w-full pb-card">
                    <div class="flex gap-2 items-center ">
                        <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Schedule.png"/>
                        <p class="text-lg font-semibold text-[#ee3435]">Shift Scheduling</p>
                    </div>
                    <p class="text-sm">Drag and drop shifts to allocate staff based on availability.</p>
                </a>
            </div>
        </div>
    </div>
</div>

        </div>
    </header>
  
</template>



<style lang="css" scoped>

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1); /* or transparent if just blur */
  backdrop-filter: blur(4px);
  z-index: 999;
  
}
header{
    position: sticky; top: 0;
    z-index: 1000;
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
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 2rem;
    

}
.dropdown-box .pb-card{
     background-color: #f9f9f9;
     padding: 1.25rem;
}
    .pb-hdr-col-layout{
        @apply  p-3 bg-white rounded-xl border border-[#ceceea] shadow-pbShadow
    }
    .cta-free{
        @apply bg-blue-700 p-2 text-white rounded-xl inline-block
    }
</style>