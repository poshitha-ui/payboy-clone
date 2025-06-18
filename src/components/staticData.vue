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

