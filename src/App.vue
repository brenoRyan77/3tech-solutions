<template>
  <v-app>
    <HeaderPageVue :navItems="navItems" @scroll-to-section="scrollToSection"/>
    <MainPageVue ref="mainPageRef" />
    <v-footer app dark>
      <v-container>
        <span>&copy; 2024 3Tech Solutions. Todos os direitos reservados.</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderPageVue from './components/HeaderPage.vue';
import MainPageVue from './components/MainPage.vue';
export default {
  name: 'App',
  components: {
    HeaderPageVue,
    MainPageVue
  },
  data() {
    return {
      navItems: [
        { label: 'Home', section: 'home' },
        { label: 'Sobre', section: 'about' },
        { label: 'Serviços', section: 'services' },
        { label: 'Contato', section: 'contact' }
      ]
    };
  },
  methods: {
    scrollToSection(section) {
      const mainPage = this.$refs.mainPageRef;
      if (mainPage) {
        mainPage.scrollToSection(section);
      }
    }
  }
}
</script>

<style>
@import '~vuetify/styles';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#home, #about, #services, #contact {
  padding: 100px 0;
}

#about, #services, #contact {
  padding-top: 100px;
}

.headline {
  font-size: 2.5rem;
}

.subtitle-1 {
  font-size: 1.25rem;
}
footer {
  position: relative !important;
  width: 100% !important;
  background-color: #333 !important; /* Cor de fundo opcional */
  color: #fff !important; /* Cor do texto opcional */
  padding: 10px 0 !important; /* Espaçamento interno opcional */
  text-align: center !important; /* Centralizar o texto opcional */
  bottom: 0 !important;
}

</style>
