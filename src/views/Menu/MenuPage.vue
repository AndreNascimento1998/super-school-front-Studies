<template>
    <TopBarPartials class="mb-4"/>
    <router-view />
    <FooterPartials/>
</template>

<script setup lang="ts">
import TopBarPartials from "@/views/Menu/Partials/TopBarPartials.vue";
import FooterPartials from "@/views/Menu/Partials/FooterPartials.vue";
</script>