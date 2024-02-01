<template>
    <div class="test">
        <h1>Test</h1>
        <div class="test__testando">Pinia {{ test }}</div>
        <button type="button" class="btn btn-primary">TEST BOOTSTRAP</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGlobalStore } from "@/stores/GlobalStore.ts";

const globalStore = useGlobalStore()
const test = computed(() => globalStore.userName)
</script>

<style scoped lang="scss">
    .test{
        color: pink;
        &__testando {
            color: red;
        }
    }
</style>