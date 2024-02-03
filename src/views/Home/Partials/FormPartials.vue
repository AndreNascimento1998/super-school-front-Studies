<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 col-md-4">
               <InputSelect label="Modalidades" :items="options" />
            </div>
            <div class="my-4 my-md-0 col-12 col-md-4">
                <InputSelect label="Cursos" :items="options" />
            </div>
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button class="btn btn-success" type="button">Buscar</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import {ref} from "vue";
import InputSelect from "@/components/InputSelect.vue";

const options = ref([
    {
        text: 'Curso Informática',
        value: '1'
    },
    {
        text: 'Curso Técnico',
        value: '2'
    },
    {
        text: 'Curso de Fisiologia',
        value: '3'
    }
])
</script>