<template>
    <v-app-bar app color="dark" dark>
        <v-container>
            <v-row align="center" justify="center" no-gutters>
                <v-col cols="auto">
                    <v-img src="@/assets/logo_3techs.png" contain height="32"></v-img>
                </v-col>
                <v-col v-for="navItem in navItems" :key="navItem.section" cols="auto">
                    <v-btn text @click="scrollToSection(navItem.section)">{{ navItem.label }}</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        navItems: {
            type: Array,
            required: true
        }
    },
    methods: {
        scrollToSection(section) {
            this.$emit('scroll-to-section', section);
        }
    }
});
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui se necessário */
</style>