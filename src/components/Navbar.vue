<script setup>
    import { ref } from 'vue';
    import headerData from "./../assets/data/headerData.json"

    const activeDropdown = ref(null);
    const isMobileMenuOpen = ref(false);
    const activeMobileDropdown = ref(null);

    const closeDropdown = () => {
    activeDropdown.value = null;
    };
    const toggleDropdown = (item) => {
    activeDropdown.value = activeDropdown.value === item ? null : item;
    };

    const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
        // Close all dropdowns when menu closes
        if (!isMobileMenuOpen.value) {
        activeMobileDropdown.value = null;
        }
    };
    const toggleMobileDropdown = (dropdown) => {
        activeMobileDropdown.value = activeMobileDropdown.value === dropdown ? null : dropdown;
    };
    const handleMobileLinkClick = () => {
    isMobileMenuOpen.value = false;
    activeMobileDropdown.value = null;
};
</script>
<template>
    <div v-if="activeDropdown" class="overlay" @click="closeDropdown"></div>
    <header>
        <div class="wrapper py-6">
            <div class="flex justify-between relative">
                <RouterLink  to="/"  class="w-[150px] pb-hdr-col-layout">
                    <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/logo-f5aedb7a1fd271add77041a281c03b097ab0849ad596cf5d6dd33b303ee1cf22.svg"  />
                </RouterLink>
                <div class="hidden lg:block">
                    <div class="pb-hdr-col-layout" >
                       <ul class="flex gap-x-6" >
                            <li> 
                                <div href="" class="dropdown" @click.prevent="toggleDropdown('solutions')"> 
                                    <a href="#" class="flex items-center gap-x-1"><span>Solutions</span> <FontAwesomeIcon class="mt-[3px] text-xs" :icon="['fas', 'angle-down']" /></a> 
                                    <div class="dropdown-box mt-8 absolute left-0" v-show="activeDropdown === 'solutions'">
                                        <div class="grid grid-cols-5 gap-x-6">
                                            <div class="col-span-1">
                                                <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
                                                <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
                                                <a class="pb-learn-more"> Learn more </a>
                                            </div>
                                            <div class="col-start-2 col-span-4">
                                                <div class="grid grid-cols-3 gap-5">
                                                    <RouterLink to="/leavemanagement" class="w-full pb-card">
                                                        <div class="flex gap-2 items-center ">
                                                            <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-module-icon.png"/>
                                                            <p class="text-lg font-semibold ">Payroll processing</p>
                                                        </div>
                                                        <p class="text-sm">Automate payroll and payslips with just a click.</p>
                                                    </RouterLink>
                                                    <RouterLink to="/leavemanagement" class="w-full pb-card">
                                                        <div class="flex gap-2 items-center ">
                                                            <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Leaves-Module-icon.png"/>
                                                            <p class="text-lg font-semibold">Leave management</p>
                                                        </div>
                                                        <p class="text-sm">Apply for leaves digitally, check leave balance and approve leaves.</p>
                                                    </RouterLink>
                                                    <RouterLink to="/leavemanagement" class="w-full pb-card">
                                                        <div class="flex gap-2 items-center ">
                                                            <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Claims-icon.png"/>
                                                            <p class="text-lg font-semibold ">Claims Management</p>
                                                        </div>
                                                        <p class="text-sm">Set claim policies for different roles and approve them with ease.</p>
                                                    </RouterLink>
                                                    <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                        <div class="flex gap-2 items-center ">
                                                            <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Attendance-icon.png"/>
                                                            <p class="text-lg font-semibold">Time & Attendance Tracker</p>
                                                        </div>
                                                        <p class="text-sm">Check in and out from our mobile app from anywhere.</p>
                                                    </RouterLink>
                                                    <RouterLink to="/leavemanagement" class="w-full pb-card">
                                                        <div class="flex gap-2 items-center ">
                                                            <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Schedule.png"/>
                                                            <p class="text-lg font-semibold">Shift Scheduling</p>
                                                        </div>
                                                        <p class="text-sm">Drag and drop shifts to allocate staff based on availability.</p>
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><div href="" role="link" class="dropdown" @click.prevent="toggleDropdown('resources')">  
                                <a href="" class="flex items-center gap-x-1"> Resources <FontAwesomeIcon class="mt-[3px] text-xs" :icon="['fas', 'angle-down']" /></a>
                            <div class="dropdown-box mt-8 absolute left-0" v-show="activeDropdown === 'resources'">
                                <div class="grid grid-cols-5 gap-x-6">
                                    <div class="col-span-1">
                                        <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
                                        <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
                                        <a class="pb-learn-more"> Learn more </a>
                                    </div>
                                    <div class="col-start-2 col-span-4">
                                        <h1 class="text-lg mb-4 font-bold">Resources</h1>
                                        <div class="grid grid-cols-3 gap-5">
                                            
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Calculator-2.png"/>
                                                    <p class="text-lg font-semibold ">Calculators</p>
                                                </div>
                                                <p class="text-sm">Simplify HR calculations with our user-friendly free calculators.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Customer-Stories-1.png"/>
                                                    <p class="text-lg font-semibold">Customer Stories</p>
                                                </div>
                                                <p class="text-sm">Hear our client's experiences and insights after using Payboy.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Blog-icon-1.png"/>
                                                    <p class="text-lg font-semibold">Blog</p>
                                                </div>
                                                <p class="text-sm">Explore the latest HR trends, industry insights and practical tips.</p>
                                            </RouterLink>
                                        </div>
                                        <h1 class="text-lg my-4 font-bold">EBOOKS</h1>
                                        <div class="grid grid-cols-3 gap-5">
                                            
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Top-9-HR-trend-1.png"/>
                                                    <p class="text-lg font-semibold ">Top 9 HR Trends</p>
                                                </div>
                                                <p class="text-sm">Stay ahead of market changes and thrive in the AI-enabled workplace.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Chat-GPT-prompt-icon.png"/>
                                                    <p class="text-lg font-semibold">45 ChatGPT Prompts for HR</p>
                                                </div>
                                                <p class="text-sm">Harness the full power of ChatGPT for certain HR-related work.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-Handbook-1.png"/>
                                                    <p class="text-lg font-semibold">The Payroll Handbook</p>
                                                </div>
                                                <p class="text-sm">Offer strategies and best practices to optimise your HR processes.</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div></li>
                            <li> <div href="" role="link" class="dropdown"  @click.prevent="toggleDropdown('industries')"> 
                                <a href="" class="flex items-center gap-x-1">Industries <FontAwesomeIcon class="mt-[3px] text-xs" :icon="['fas', 'angle-down']" /> </a>
                                 <div class="dropdown-box mt-8 absolute left-0" v-show="activeDropdown === 'industries'">
                                <div class="grid grid-cols-5 gap-x-6">
                                    <div class="col-span-1">
                                        <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
                                        <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
                                        <a class="pb-learn-more"> Learn more </a>
                                    </div>
                                    <div class="col-start-2 col-span-4">
                                        <h1 class="text-lg mb-4 font-bold">Industries</h1>
                                        <div class="grid grid-cols-3 gap-5">
                                            
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Food-industry.png"/>
                                                    <p class="text-lg font-semibold ">Food & Beverage</p>
                                                </div>
                                                <p class="text-sm">Streamline human operations, cut human costs, and ensure industry compliance.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Accounting-and-payroll.png"/>
                                                    <p class="text-lg font-semibold">Accounting and Payroll Services</p>
                                                </div>
                                                <p class="text-sm">Apply for leaves digitally, check leave balance and approve leaves.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Recruitment.png"/>
                                                    <p class="text-lg font-semibold">Recruitment</p>
                                                </div>
                                                <p class="text-sm">Manage all your client's recruiting needs in one place.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/NCSS-NGO.png"/>
                                                    <p class="text-lg font-semibold">NCSS NGO</p>
                                                </div>
                                                <p class="text-sm">Simplify volunteer management with up to 80% funding from NCSS.</p>
                                            </RouterLink>
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </div></li>
                            <li><div href="" role="link" class="dropdown"  @click.prevent="toggleDropdown('pricing')">
                                <a href="" class="flex items-center gap-x-1"> Pricing <FontAwesomeIcon class="mt-[3px] text-xs" :icon="['fas', 'angle-down']" /></a>
                            <div class="dropdown-box mt-8 absolute left-0" v-show="activeDropdown === 'pricing'">
                                <div class="grid grid-cols-5 gap-x-6">
                                    <div class="col-span-1">
                                        <h2 class="dropdown-menu-title"> Celebrating our fellow entrepreneurs</h2>
                                        <p>With our roots as a small start up, we understand the little intricacies and problems fellow SMEs face.</p>
                                        <a class="pb-learn-more"> Learn more </a>
                                    </div>
                                    <div class="col-start-2 col-span-4">
                                        <h1 class="text-lg mb-4 font-bold">Pricing</h1>
                                        <div class="grid grid-cols-3 gap-5">
                                            
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/PAY-Per-use-1.png"/>
                                                    <p class="text-lg font-semibold ">Pay Per Use</p>
                                                </div>
                                                <p class="text-sm">A monthly subscription plan that charges based on your service usage.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/04/Upgrade-promotion-1.png"/>
                                                    <p class="text-lg font-semibold">Upgrade Promotion</p>
                                                </div>
                                                <p class="text-sm">Upgrade to Payboy and enjoy premium features from $3 only.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6616.png"/>
                                                    <p class="text-lg font-semibold">PSG Grant</p>
                                                </div>
                                                <p class="text-sm">Get 50% off Singapore’s most reliable and user-friendly payroll software.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6615.png"/>
                                                    <p class="text-lg font-semibold">Career Conversion Programme</p>
                                                </div>
                                                <p class="text-sm">Reskill your workforce with up to 90% salary support.</p>
                                            </RouterLink>
                                            <RouterLink  to="/leavemanagement"  class="w-full pb-card">
                                                <div class="flex gap-2 items-center ">
                                                    <img class="w-[50px]" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6612.png"/>
                                                    <p class="text-lg font-semibold">Payboy Startup Package</p>
                                                </div>
                                                <p class="text-sm">Empower teams of up to 10 employees for less than the cost of a daily kopi.</p>
                                            </RouterLink>
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                            </div> </li>
                            <li> <RouterLink > Contact </RouterLink></li>
                       </ul>
                    </div>
                </div>
                <!-- Actions -->
                <div class="hidden lg:block">
                    <span>
                        <button class="pb-hdr-col-layout mr-4"> Book a Demo</button>
                    </span>
                    <span class="pb-hdr-col-layout">
                        <a href=""> Log In </a>
                        <a href="" class="cta-free"> Sign Up</a>
                    </span>
                </div>
                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex items-center pb-hdr-col-layout">
                    <button @click="toggleMobileMenu" class="text-gray-700 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div><!-- end flex of desktop-->
            <!-- +++++++++++++++++++++++++++++++++ Mobile view +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
            <div class="lg:hidden">
                <div v-show="isMobileMenuOpen" class="fixed inset-0 bg-white z-50 overflow-y-auto pt-6 px-4">
                    <!-- close button -->
                    <div class="border-b border-[#cecece] pb-3 mb-4">
                        <div class="flex justify-between w-full ">
                         <!-- Mobile Actions -->
                            <div class="">
                                <span class="pb-hdr-col-layout">
                                    <a href=""> Log In </a>
                                    <a href="" class="cta-free"> Sign Up</a>
                                </span>
                            </div>
                            <button @click="toggleMobileMenu" class="right-4 text-gray-700">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <span class="mt-4 block">
                            <button class="mr-4 w-full btn btn-primary"> Book a Demo</button>
                        </span>
                     </div>
                    
                    <!-- Mobile Navigation -->
                    <ul class="space-y-4">
                        <li>
                            <div @click="toggleMobileDropdown('solutions')" class="flex justify-between items-center py-2 border-b">
                                <span class="text-md font-medium">Solutions</span>
                                <FontAwesomeIcon :icon="['fas', activeMobileDropdown === 'solutions' ? 'angle-up' : 'angle-down']" />
                            </div>
                            <div v-show="activeMobileDropdown === 'solutions'" class="py-2 space-y-4">
                                <div class="grid grid-cols-1 gap-4">
                                <!-- Mobile dropdown items -->
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick" class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-module-icon.png"/>
                                        <div>
                                        <p class="font-semibold">Payroll processing</p>
                                        <p class="text-xs">Automate payroll and payslips with just a click.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Leaves-Module-icon.png"/>
                                        <div>
                                        <p class="font-semibold">Leave management</p>
                                        <p class="text-xs">Apply for leaves digitally, check leave balance and approve leaves.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Claims-icon.png"/>
                                        <div>
                                        <p class="font-semibold">Claims Management</p>
                                        <p class="text-xs">Set claim policies for different roles and approve them with ease.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Attendance-icon.png"/>
                                        <div>
                                        <p class="font-semibold">Time & Attendance Tracker</p>
                                        <p class="text-xs">Check in and out from our mobile app from anywhere.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Schedule.png"/>
                                        <div>
                                        <p class="font-semibold">Shift Scheduling</p>
                                        <p class="text-xs">Drag and drop shifts to allocate staff based on availability.</p>
                                        </div>
                                    </RouterLink>
                                <!-- Add other items similarly -->
                                </div>
                            </div>
                        </li>
                        <li>
                            <div @click="toggleMobileDropdown('resources')" class="flex justify-between items-center py-2 border-b">
                                <span class="text-md font-medium">Resources</span>
                                <FontAwesomeIcon :icon="['fas', activeMobileDropdown === 'resources' ? 'angle-up' : 'angle-down']" />
                            </div>
                            <div v-show="activeMobileDropdown === 'resources'" class="py-2 space-y-4">
                                <div class="grid grid-cols-1 gap-4">
                                <!-- Mobile dropdown items -->
                                   <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Calculator-2.png"/>
                                        <div>
                                        <p class="font-semibold">Calculators</p>
                                        <p class="text-xs">Simplify HR calculations with our user-friendly free calculators.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Customer-Stories-1.png"/>
                                        <div>
                                        <p class="font-semibold">Customer Stories</p>
                                        <p class="text-xs">Hear our client's experiences and insights after using Payboy.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Blog-icon-1.png"/>
                                        <div>
                                        <p class="font-semibold">Blog</p>
                                        <p class="text-xs">Explore the latest HR trends, industry insights and practical tips.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Top-9-HR-trend-1.png"/>
                                        <div>
                                        <p class="font-semibold">Top 9 HR Trends</p>
                                        <p class="text-xs">Stay ahead of market changes and thrive in the AI-enabled workplace.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Chat-GPT-prompt-icon.png"/>
                                        <div>
                                        <p class="font-semibold">45 ChatGPT Prompts for HR</p>
                                        <p class="text-xs">Harness the full power of ChatGPT for certain HR-related work.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Payroll-Handbook-1.png"/>
                                        <div>
                                        <p class="font-semibold">The Payroll Handbook</p>
                                        <p class="text-xs">Offer strategies and best practices to optimise your HR processes.</p>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div @click="toggleMobileDropdown('industries')" class="flex justify-between items-center py-2 border-b">
                                <span class="text-md font-medium">Industries</span>
                                <FontAwesomeIcon :icon="['fas', activeMobileDropdown === 'industries' ? 'angle-up' : 'angle-down']" />
                            </div>
                            <div v-show="activeMobileDropdown === 'industries'" class="py-2 space-y-4">
                                <div class="grid grid-cols-1 gap-4">
                                <!-- Mobile dropdown items -->
                                   <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Food-industry.png"/>
                                        <div>
                                        <p class="font-semibold">Food & Beverage</p>
                                        <p class="text-xs">Streamline human operations, cut human costs, and ensure industry compliance.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Accounting-and-payroll.png"/>
                                        <div>
                                        <p class="font-semibold">Accounting and Payroll Services</p>
                                        <p class="text-xs">Apply for leaves digitally, check leave balance and approve leaves.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Recruitment.png"/>
                                        <div>
                                        <p class="font-semibold">Recruitment</p>
                                        <p class="text-xs">Manage all your client's recruiting needs in one place.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/NCSS-NGO.png"/>
                                        <div>
                                        <p class="font-semibold">NCSS NGO</p>
                                        <p class="text-xs">Simplify volunteer management with up to 80% funding from NCSS.</p>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div @click="toggleMobileDropdown('pricing')" class="flex justify-between items-center py-2 border-b">
                                <span class="text-md font-medium">Pricing</span>
                                <FontAwesomeIcon :icon="['fas', activeMobileDropdown === 'pricing' ? 'angle-up' : 'angle-down']" />
                            </div>
                             <div v-show="activeMobileDropdown === 'pricing'" class="py-2 space-y-4">
                                <div class="grid grid-cols-1 gap-4">
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/PAY-Per-use-1.png"/>
                                        <div>
                                        <p class="font-semibold">Pay Per Use</p>
                                        <p class="text-xs">A monthly subscription plan that charges based on your service usage.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/04/Upgrade-promotion-1.png"/>
                                        <div>
                                        <p class="font-semibold">Upgrade Promotion</p>
                                        <p class="text-xs">Upgrade to Payboy and enjoy premium features from $3 only.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6616.png"/>
                                        <div>
                                        <p class="font-semibold">PSG Grant</p>
                                        <p class="text-xs">Get 50% off Singapore’s most reliable and user-friendly payroll software.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6615.png"/>
                                        <div>
                                        <p class="font-semibold">Career Conversion Programme</p>
                                        <p class="text-xs">Reskill your workforce with up to 90% salary support.</p>
                                        </div>
                                    </RouterLink>
                                    <RouterLink  to="/leavemanagement" @click="handleMobileLinkClick"  class="flex items-start gap-3 w-full pb-card">
                                        <img class="w-10" src="https://payboy.sg/wp-content/uploads/2024/05/Group-6612.png"/>
                                        <div>
                                        <p class="font-semibold">Payboy Startup Package</p>
                                        <p class="text-xs">Empower teams of up to 10 employees for less than the cost of a daily kopi.</p>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex justify-between items-center py-2 border-b" @click="handleMobileLinkClick">
                                <span class="text-md font-medium">Contact Us</span>
                            </div>
                        </li>
                        &nbsp;  &nbsp;
                    </ul>
                   
                </div>
                
            </div>
        </div><!-- end wrapper-->
    </header>
    
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