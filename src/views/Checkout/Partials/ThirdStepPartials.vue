<template>
    <div class="mb-4 d-flex flex-column gap-1">
        <div class="my-4">
            <span class="title">3° Etapa Cadastro</span>
        </div>
        <div class="d-flex justify-content-center gap-5">
            <div class="">
                <InputFile
                    title="CNH"
                    @file-changed="(item: File) => personalData.file = item"
                />
            </div>
            <div>
                <InputFile
                    title="RG"
                    @file-changed="(item: File) => personalData.file = item"
                />
            </div>
        </div>
        <div class="d-grid d-md-flex flex-md-row-reverse justify-content-md-between gap-3 mt-4">
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button @click="registerMatriculation" class="btn btn-success" type="button">
                    Confirmar Pagamento
                </button>
            </div>
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button @click="handleClickReturn" class="btn btn-success" type="button">
                    Voltar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputFile from "@/components/Input/InputFile.vue";
import {useCheckoutStore} from "@/stores/CheckoutStore.ts";
import {reactive} from "vue";
import {required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const emits = defineEmits(
    ['click-event', 'click-return']
)

const checkoutStore = useCheckoutStore()
const personalData = reactive({
    file: checkoutStore.payloadData.file
})

const rules = {
    file: {required},
}

const v$ = useVuelidate(rules, personalData)

function handleClickReturn() {
    emits('click-return', 2)
}

async function registerMatriculation() {
    const valid = await v$.value.$validate()
    if (valid){
        emits('click-event', personalData.file)
    }
}
</script>

<style scoped lang="scss">
.title {
    color: #404040;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
}
</style>