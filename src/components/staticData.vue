<script setup>
const footerLists = [
    {
        "title" : "solution 1",
        "listItmes" : [
            "Payroll Processing",
            "Payroll",
            "Processing"
        ]
    },
    {
        "title" : "Solution 2",
        "listItmes" : [
            "The Payroll Handbook",
            "Handbook",
            "The Payroll"
        ]
    },
    {
        "sections" : [  
            {
                "title" : "My title 2",
                "listItmes" : [
                    "The Payroll Handbook",
                    "Handbook",
                    "The Payroll",
                ]
            },
            {
                "title" : "new title 2",
                "listItmes" : [
                    "The Payroll Handbook",
                    "Handbook",
                    "The Payroll",
                ]
            }
        ]
    }
    
]
</script>

<template>
    
    <footer class="footer-wrapper" style="display: none;">
        <div class="wrapper py-10">
            <div class="grid grid-cols-4" >
                <div class="max-w-100">
                    <div class="pb-prod-list">
                    <h2 class="text-2xl font-semibold text-white mb-2">Solutions</h2>
                    <ul>
                        <li>Payroll Processing</li>
                        <li>Leaves Management</li>
                        <li>Claims Management</li>
                        <li>Time Attendance</li>
                        <li>Shift Scheduling</li>
                    </ul>
                    </div>
                </div>
                <div class="max-w-100">
                    <div class="pb-prod-list">
                        <h2 class="text-2xl font-semibold text-white mb-2">Resources</h2>
                        <ul>
                            <li>The Payroll Handbook</li>
                            <li>Top HR trends eBook</li>
                            <li>ChatGPT Cheat Sheet</li>
                            <li>Support Center</li>
                            <li>CPF Calculator for SG</li>
                            <li>CPF Calculator for PR</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="max-w-100">
                    <div class="pb-prod-list">
                        <h2 class="text-2xl font-semibold text-white mb-2">Industries</h2>
                    <ul>
                        <li>Accounting & Payroll Services</li>
                        <li>Food & Beverages</li>
                        <li>Recruitment</li>
                        <li>NCSS NGO</li>
                    </ul>
                    </div>
                    <div class="pb-prod-list">
                    <h2 class="text-2xl font-semibold text-white mb-2">Promotions</h2>
                    <ul>
                        <li>NCSS Funding for NGOS</li>
                        <li>Upgrade Promotion</li>
                    </ul>
                    </div>
                </div>
                <div class="max-w-100">
                    <div class="pb-prod-list">
                    <h2 class="text-2xl font-semibold text-white mb-2">Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Contact Us</li>
                        <li>Customer Stories</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section class="newspace space-between-sections">
        <div class="wrapper">
            <header class="text-center max-w-3xl mx-auto">
                <span class="pb-badge"> Integration benefits </span>
                    <p class="pb-subheading"> Our key features </p>
                    <p class="text-lg mb-10">
                        Apply for leave digitally. Check leave balances. Approve leaves. Submit and store supporting documents or medical certificates. 
                    </p>
            </header>
            <div class="grid grid-cols-2 gap-6">
                <div class="w-full newSpacepb-card">
                    <div class="newSpaceHeader">
                        <span class="pb-heading-label"> Integration benefits </span>
                        <p class="pb-subheading"> Leave everthing in one place. </p>
                        <p class="text-lg">
                            Apply for leave digitally. Check leave balances. Approve leaves. Submit and store supporting documents or medical certificates. 
                        </p>
                    </div>
                    <div class="newSpaceBody">
                        <div><img src="./../assets/images/slide2.webp" class="rounded-2xl" alt="image not found"></div>
                    </div>
                </div>
                <div class="w-full newSpacepb-card">
                    <div class="newSpaceHeader">
                        <span class="pb-heading-label"> PERFECT SYNC </span>
                    <p class="pb-subheading">  Syncs with shift scheduling and payroll.</p>
                    <p class="text-lg">
                        No manual updates. No errors. Automatically updates team availability in Shift Scheduling.</p>
                    </div>
                    <div class="newSpaceBody">
                        <div><img src="./../assets/images/schedule.webp" class="rounded-2xl" alt="image not found"></div>
                    </div>
                </div>
                <div class="w-full newSpacepb-card">
                    <div class="newSpaceHeader">
                        <span class="pb-heading-label"> People first </span>
                    <p class="pb-subheading">  Give your team the rest they deserve.</p>
                    <p class="text-lg">
                        We’ll start you off with a MOM-compliant leave setup, then customize it to fit your business perfectly. </p>
                    </div>
                    <div class="newSpaceBody">
                        <div><img src="./../assets/images/slide3.webp" class="rounded-2xl" alt="image not found"></div>
                    </div>
                </div>
                 <div class="w-full newSpacepb-card">
                    <div class="newSpaceHeader">
                        <span class="pb-heading-label"> People first </span>
                    <p class="pb-subheading">  Give your team the rest they deserve.</p>
                    <p class="text-lg">
                        We’ll start you off with a MOM-compliant leave setup, then customize it to fit your business perfectly. </p>
                    </div>
                    <div class="newSpaceBody">
                        <div><img src="./../assets/images/slide3.webp" class="rounded-2xl" alt="image not found"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <picture class="" data-testid="cu-image">
                            <source srcset="./../assets/images/subscription-image.jpg;w=800 800w, 
                            ./../assets/images/subscription-image.jpg;w=500 500w, 
                            ./../assets/images/subscription-image.jpgw=600 600w,
                            ./../assets/images/subscription-image.jpgw=800 800w, 
                            ./../assets/images/subscription-image.jpg?q=50 827w" 
                            type="image/webp" sizes="(max-width: 900px) 100vw, 50vw">
                            <img src="./../assets/images/subscription-image.jpg" srcset="./../assets/images/subscription-image.jpg?w=500 500w,./../assets/images/subscription-image.jpg?w=600 600w,
                            ./../assets/images/subscription-image.jpg?w=800 800w, 
                            ./../assets/images/subscription-image.jpg 827w" height="1020" width="827" alt="Supercharge your productivity" loading="lazy" decoding="async" sizes="(max-width: 900px) 100vw, 50vw">
                        </picture>


                        <section class="features space-between-sections">
        <div class="wrapper">
            <div class="grid md:grid-cols-2 md:gap-x-12 space-between-sections">
                <div class="w-full">
                    <span class="pb-badge"> Integration benefits </span>
                    <p class="pb-subheading"> Our key features </p>
                    <p class="text-lg">
                        Apply for leave digitally. Check leave balances. Approve leaves. Submit and store supporting documents or medical certificates. All leave records are automatically synced with payroll and available in real-time. Set custom approval workflows for different leave types. Get instant notifications when leave is applied or approved. Do it all with the Leave module on the web or mobile app - anytime, anywhere.
                    </p>
                </div>
                <div class="w-full">
                    <div class="grid md:grid-cols-2 md:gap-4">
                        <div class="pb-card">
                            <div class="pb-card-icon"> <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />                            </div>
                            <div class="pb-card-title">Mobile & Web Access</div>
                            <p>Employees can submit requests and managers can approve from anywhere, anytime.</p>
                        </div>
                        <div class="pb-card">
                            <div class="pb-card-icon"><font-awesome-icon :icon="['fas', 'calendar-alt']" /></div>
                            <div class="pb-card-title">Team Calendar</div>
                            <p>Visual overview of who's off and when to prevent scheduling conflicts.</p>
                        </div>
                        <div class="pb-card">
                            <div class="pb-card-icon"><font-awesome-icon :icon="['fas', 'file-export']" /></div>
                            <div class="pb-card-title">Payroll Integration</div>
                            <p>Seamless sync with payroll to ensure accurate leave deductions.</p>
                        </div>
                        <div class="pb-card">
                            <div class="pb-card-icon"><font-awesome-icon :icon="['fas', 'chart-bar']" /></div>
                            <div class="pb-card-title">Advanced Reporting</div>
                            <p>Generate detailed leave reports for audits and workforce planning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- Drop down -->
     <div class="dropdown-box mt-6" >
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
</template>

<style>
.newSpacepb-card{
    background: #000;
    padding: 2rem;
    border-radius: 20px;
}
.newSpacepb-card .pb-subheading, .newSpacepb-card p, .newSpacepb-card .pb-heading-label { color: #fff}
.newSpacepb-card .pb-subheading{ margin-bottom: 0px; margin-top: 4px;}
.newSpacepb-card p{ margin-bottom: 3rem}
</style>


<!---================================ Tabs =================================-->

<template>
    <div class="space-between-sections">
        <div class="max-w-4xl mx-auto p-4">
            <header class="pb-subheader-section">
                <span class="pb-heading-label"> You’re Awesome! </span>
                <h3 class="pb-subheading">Thank you for believing in us</h3>
            </header>
            <!-- Tab Headers -->
            <div class="flex justify-center">
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="activeTab = index"
                    :class="[
                    'px-4 py-2 font-medium text-sm focus:outline-none mr-5',
                    activeTab === index
                        ? 'active-tab'
                        : 'custom-tab'
                    ]"
                >
                    {{ tab.title }}
                </button>
            </div>
            <!-- Tab Content -->
            <div class="p-4">
            <div v-for="(tab, index) in tabs" :key="index">
                <div class="mt-6" v-if="activeTab === index" v-html="tab.content"></div>
            </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  data() {
   
    return {
      activeTab: 0,
      tabs: [
        { 
            title: 'Featured', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/1-f8b8f41d20d39df7e0c8e6ba6394f1890a9a203feeefe9a451f53b70c105dd3e.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/2-8044640ee1ffeb2f1b0ac7a1a49d452cdfa7676e7b4025e96c1676315fb0ac3b.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/3-13a629ac65f2c4294d96ad7159aa0b7e7266a1cdc3832687912951e9d2f359db.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/4-879ee13dbddfba847eb72a5e1fcc9de4271afe5d3f36cb29c2168bc803056c79.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/5-24ece7fde36d5bd7438b4f8c45253023c7623aa66969e61616e1de9db936714f.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/6-8dd0098a015595eeae249bb696702cd8e3090f8d13810e09bf665dc5d6655836.png" alt="image not found" />    
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/7-f101b8341315476b8c8483f31a6c794fbe5a57a431512ee5ea01b24b24f4a02b.png" alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/featured/8-2fcf546748e958a73d68d61a985913490c0500a87129976a91ba4a2a00b60762.png" alt="image not found" />    
                    </div>
                </div>
            `
        },
        { 
            title: 'Food & Beverages', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/2-260d8089edfd575af74038c0cc28f214bfc16d7a2344123c8979c7d29b397e0e.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/3-0b2501f236c71926e6cc1b8db1feed293e40c1955ac53a3ebec8bc04f6c64d7a.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/4-0aaad2f3165edc74170f036155c337d179963fdc051e671c0dd6f6ac309bbb99.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/5-810042553fb7b5e2fb9d78e9ac13d3085897e42dcf49f69186282014b543c7f2.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/6-9456d6fc934a39c92793b661b3e1ef5eead52e26c72a64b82167bce90c17a775.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/8-80c848c6e07356f54c3441a73d7124b2d66bdfb16ff29b01fb6a40b7f866904c.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/fnb/7-854516c53a841e1bfbb782b71bd97c17516c17100897aca8ffff9d98570e6b08.png"  alt="image not found" />
                    </div>
                </div>`
            
        },
        { 
            title: 'Professional Services', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/1-8e8d053c3486f0195df7e7fde4f6d9143900d34a7e440f1f5b5cb23883d9fed5.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/2-c5f003f43a4d38045c36e93a90bf705dccf9ef4891ac2cdf50beeaad079e7202.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/3-a9f7e1a565d05e1f8e208964e5f08173bdfba6e977774efeefb97f0d836b857b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/5-45afec7369a060ced8b3cc027df832d987e0c95da8c02e75b01cec045e81d03b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/4-d28b5a3a9450b41118b42d89dce71db57014e949dde76609a6cf28c7edc0d3ae.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/6-801184bfd9b70f1f857b456d497de90ff966982b31590a79a2bd0a0295a08309.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/7-f101b8341315476b8c8483f31a6c794fbe5a57a431512ee5ea01b24b24f4a02b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/pro/8-e7bfca683bc7a1e83e5190ea40260952954653ea74a3521f0eeba8a68b2cc540.png"  alt="image not found" />
                    </div>
                </div>    
            `
        },
        { 
            title: 'Medical', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/1-8c0b0933401bc02d2006350781883cbfc57960c88dff5429023724efab6cbf61.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/2-1ca790343be3c2f657294bcf50ca5974acfd60f0c70f1b2760a7ae182b107541.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/3-7dc8bab1a080586a049ebec615863a45a1eadc7124882e62689069bd9f09a25b.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/4-315b03ed58cbc1e08e6c0b9e5c687c07ebbdcb9457e56ae694287f0e8e54719f.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/5-23dd337fb9815b3e90fa236ba17998154d32e80c73ac47aee00f35d536a227e9.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/6-d9fc8989485456c95d1471fa7c1879e9b029b8ba95332a4b5ccd7766a21d4f57.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/8-49adfc8ee7d4347400eb5ae66cea63f7d7f80e3bb03e676dfa1dac373b0a552f.png"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://d3j1xhpuvvxit1.cloudfront.net/assets/home/home/testimonials/medical/7-a2b603d5bef8cff8a22c6e4c039174c3feab5a2daedc24b46b77d176d21e9ae4.png"  alt="image not found" />
                    </div>
                </div>
            ` 
        },
        { 
            title: 'Social Services', 
            content: `
                <div class="grid md:grid-cols-4 gap-x-6 gap-y-4">
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-2.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-6.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-24.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/ymca-3-logo-png-transparent-1.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-1.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-3.svg"  alt="image not found" />
                    </div>
                    <div class="w-full border border-[#ddd] rounded-md p-3">
                        <img src="https://payboy.sg/wp-content/uploads/2023/07/Group-4.svg"  alt="image not found" />
                    </div>
                </div>    
            ` 
        }
      ]
    }
  
  }
}
</script>

<style lang="css" scoped>
.active-tab{
    @apply  bg-[--primary-color] text-white font-medium rounded-[18px]
}
.custom-tab{
    background: white;
    border: 1px solid #ddd;
    border-radius: 18px;
}
/* Hide scrollbar but keep functionality */
.hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
}

/* Add smooth transition between tabs */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
