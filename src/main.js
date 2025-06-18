import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreenButton, faCalendarAlt, faChartBar, faFileExport,faQuoteRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';


// Add only the brand icons you need
library.add(faInstagram, faFacebook, faYoutube, faLinkedin, faEnvelope, faMobileScreenButton, faCalendarAlt, faChartBar, faFileExport, faQuoteRight, faAngleUp, faAngleDown);
// Register component globally

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app')
