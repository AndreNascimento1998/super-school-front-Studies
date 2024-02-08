<template>
    <div class="mb-4">
        <div class="my-4">
            <span class="title">1° Etapa Cadastro</span>
        </div>
        <form>
            <div class="row">
                <div class="col-12 mb-3">
                    <InputText
                        v-model="personalData.name"
                        :minCaracteres="3"
                        label="Nome:"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div class="col-12 mb-3 mb-md-0  col-lg-6">
                    <InputText
                        v-model="personalData.email"
                        required label="E-mail:"
                        placeholder="Ex.: andre@ug.com"
                    />
                </div>
                <div class="col-12 col-lg-6">
                    <InputText
                        v-model="personalData.phone"
                        v-mask="['(##) ####-####', '(##) #####-####']"
                        :minCaracteres="14"
                        label="Telefone:"
                        placeholder="Digite seu telefone"
                    />
                </div>
            </div>
            <div class="d-grid d-md-flex flex-md-row-reverse mt-3 gap-3">
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
<!--checkoutStore.name-->
<!--checkoutStore.email-->
<!--checkoutStore.phone-->
<script setup lang="ts">
import InputText from "@/components/Input/InputText.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import {reactive} from "vue";
import {useCheckoutStore} from "@/stores/CheckoutStore.ts";

const emits = defineEmits(
    ['click-event', 'click-return']
)

const checkoutStore = useCheckoutStore()

const personalData = reactive({
    name: checkoutStore.payloadData.name,
    email: checkoutStore.payloadData.email,
    phone: checkoutStore.payloadData.phone
})

const rules = {
    name: {required},
    email: {required},
    phone: {required}
}

const v$ = useVuelidate(rules, personalData)

function handleClickReturn() {
    emits('click-return', 0)
}

async function handleClick() {
    const valid = await v$.value.$validate()
    if (valid){
        emits('click-event', 2, personalData)
    }
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