import "/src/assets/main.css";
import { createApp } from "vue";
import router from "/src/routes/index.js";
import App from "/src/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
  faInstagram, 
  faFacebook, 
  faYoutube, 
  faLinkedin 
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { 
  faMobileScreenButton, 
  faCalendarAlt, 
  faChartBar, 
  faFileExport,
  faQuoteRight, 
  faAngleUp, 
  faAngleDown, 
  faCirclePlay,
  faLayerGroup,
  faCalendarDays 
} from "@fortawesome/free-solid-svg-icons";

// Add only the brand icons you need
library.add(
  faInstagram, 
  faFacebook, 
  faYoutube, 
  faLinkedin, 
  faEnvelope, 
  faMobileScreenButton, 
  faCalendarAlt, 
  faChartBar, 
  faFileExport, 
  faQuoteRight, 
  faAngleUp, 
  faAngleDown, 
  faCirclePlay,
  faLayerGroup,
  faCalendarDays 
);

// Create and configure Vue app
const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(router).mount('#app');
