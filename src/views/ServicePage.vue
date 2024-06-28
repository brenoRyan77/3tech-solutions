<template>
    <v-container>
        <h1 class="headline mb-3">Nossos Serviços</h1>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="service-card">
                    <v-card-title>Desenvolvimento</v-card-title>
                    <v-card-text class="text-justify">
                        Desenvolvemos soluções personalizadas para atender às suas necessidades específicas utilizando
                        tecnologias modernas e práticas ágeis.
                    </v-card-text>
                    <v-img src="@/assets/images/logo_desenv.svg" contain height="150"></v-img>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="service-card">
                    <v-card-title>Consultoria</v-card-title>
                    <v-card-text class="text-justify">
                        Oferecemos consultoria especializada para ajudar sua empresa a planejar, implementar e otimizar
                        soluções tecnológicas.
                    </v-card-text>
                    <v-img src="@/assets/images/logo_consultoria.svg" contain height="150"></v-img>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="service-card">
                    <v-card-title>SEO</v-card-title>
                    <v-card-text class="text-justify">
                        Melhore a visibilidade do seu site nos motores de busca com nossas estratégias avançadas de SEO
                        (Search Engine Optimization).
                    </v-card-text>
                    <v-img src="@/assets/images/logo_seo.svg" contain height="150"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // Componente ServicesPage
}
</script>

<style scoped>
.service-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-justify {
    text-align: justify;
}
</style>