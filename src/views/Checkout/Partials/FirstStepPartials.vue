<template>
    <div class="mb-4">
        <div class="my-4">
            <span class="title">1° Etapa Cadastro</span>
        </div>
        <form>
            <div class="row">
                <div class="col-12 col-lg-12">
                    <InputText v-model="checkoutStore.name" label="Nome:" placeholder="Digite seu nome"/>
                </div>
                <div class="col-12 col-lg-6">
                    <InputText v-model="checkoutStore.email" label="E-mail:" placeholder="Ex.: andre@ug.com"/>
                </div>
                <div class="col-12 col-lg-6">
                    <InputText v-model="checkoutStore.phone" label="Telefone:" placeholder="Digite seu telefone"/>
                </div>
            </div>
            <div class="d-grid d-md-flex flex-md-row-reverse  gap-3">
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
import InputText from "@/components/Input/InputText.vue";
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