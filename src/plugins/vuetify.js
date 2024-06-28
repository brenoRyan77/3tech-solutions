// Styles
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#1E88E5',  // Azul
        secondary: '#424242',  // Cinza
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
  fonts: {
    family: 'Poppins',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default vuetify
