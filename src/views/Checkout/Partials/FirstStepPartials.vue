<template>
    <div class="mb-4">
        <div class="my-4">
            <span class="title">1° Etapa Cadastro</span>
        </div>
        <form>
            <InputText v-model="checkoutStore.name" label="Nome:" placeholder="Digite seu nome"/>
            <InputText v-model="checkoutStore.name" label="E-mail:" placeholder="Ex.: andre@ug.com"/>
            <InputText v-model="checkoutStore.name" label="Phone:" placeholder="Digite seu telefone"/>
            <div class="d-grid gap-3">
                <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                    <button @click="handleClick" class="btn btn-success" type="button">
                        Avançar
                    </button>
                </div>
                <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                    <button @click="handleClickReturn" class="btn btn-success" type="button">
                        Voltar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import {useCheckoutStore} from "@/stores/CheckoutStore.ts";

const emits = defineEmits(
    ['click-event', 'click-return']
)

const checkoutStore = useCheckoutStore()

function handleClickReturn() {
    emits('click-return', 0)
}

function handleClick() {
    emits('click-event', 2)
}
</script>

<style scoped lang="scss">
.title {
    color: #404040;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.99%; /* 31.198px */
    letter-spacing: -0.6px;
}
</style>