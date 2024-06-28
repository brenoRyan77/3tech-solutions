<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h1 class="headline mb-3">Contato</h1>
                <p class="subtitle-1">
                    Entre em contato conosco através das seguintes redes sociais:
                </p>
                <ul class="contact-list">
                    <li>
                        <v-icon size="24">mdi-instagram</v-icon>
                        <a href="https://www.instagram.com/3TechSolutions" target="_blank" rel="noopener noreferrer"
                            class="contact-link">Instagram</a>
                    </li>
                    <li>
                        <v-icon size="24">mdi-whatsapp</v-icon>
                        <a href="tel:+55123456789" class="contact-link">WhatsApp</a>
                    </li>
                    <li>
                        <v-icon size="24">mdi-email</v-icon>
                        <a href="mailto:contato@3techsolutions.com" class="contact-link">Email</a>
                    </li>
                </ul>
            </v-col>
            <v-col cols="12" md="6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.37722848086!2d-34.81491340968012!3d-7.1439955029209425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc31536b4010f%3A0x65f2afa8de88e524!2sFarol%20do%20Cabo%20Branco!5e0!3m2!1spt-PT!2sbr!4v1719539641959!5m2!1spt-PT!2sbr"
                    width="600" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>

<style scoped>
.headline {
    font-size: 2.5rem;
}

.subtitle-1 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.contact-list {
    list-style-type: none;
    padding: 0;
}

.contact-list li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.contact-list li v-icon {
  margin-right: 1.5rem; /* Adiciona espaço entre o ícone e o texto */
}

.contact-link {
    text-decoration: none;
    /* Remove o sublinhado dos links */
    color: inherit;
    /* Mantém a cor padrão dos links */
}
</style>