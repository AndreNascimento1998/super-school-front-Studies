<template>
    <div class="card" style="width: 18rem;">
        <div v-if="props.title" class="card-header">
            Resumo da compra
        </div>
        <ul v-for="item in props.content" :key="item.text" class="list-group list-group-flush">
            <li class="list-group-item ">{{ item.text }}: {{ item.desc }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">


import {ICardList} from "@/model/Interfaces/ICardList.ts";

const props = defineProps({
    content: {
        type: Array<ICardList>,
        default: [],
        required: true
    },
    title: {
        type: String,
        default: '',
        required: false
    }
})
</script>