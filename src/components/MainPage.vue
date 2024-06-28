<template>
    <v-main>
      <v-container fluid style="padding: 0;">
        <section id="home" class="section">
          <Home />
        </section>
  
        <section id="about" class="section">
          <About />
        </section>
  
        <section id="services" class="section">
          <ServicesPage />
        </section>
  
        <section id="contact" class="section">
          <ContactPage />
        </section>
      </v-container>
    </v-main>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Home from '../views/HomePage.vue';
  import About from '../views/AboutPage.vue';
  import ServicesPage from '../views/ServicePage.vue';
  import ContactPage from '../views/ContactPage.vue';
  
  export default defineComponent({
    components: {
      Home,
      About,
      ServicesPage,
      ContactPage
    },
    setup() {
      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
  
      return {
        scrollToSection
      };
    }
  });
  </script>
  
  <style scoped>
  /* Estilos específicos para MainPage.vue */
  </style>
  