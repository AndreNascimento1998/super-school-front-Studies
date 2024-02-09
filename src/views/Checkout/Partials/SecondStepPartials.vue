<template>
    <div class="mb-4">
        <div class="my-4">
            <span class="title">2° Etapa Cadastro</span>
        </div>
        <form>
            <div class="row">
                <div class="col-12 mb-3">
                    <span class="font-cep-valid">
                        VALINDO CEP:
                        <span :class="{'invalid-cep': validCep === 'INVÁLIDO'}">
                            {{ validCep }}
                        </span>
                        <span style="color: black">
                            (TIRE O FOCO DO CAMPO PARA TESTAR)
                        </span>
                    </span>
                    <InputText
                        v-model="personalData.cep"
                        v-mask="'#####-###'"
                        :minCaracteres="9"
                        label="CEP:"
                        placeholder="Digite o CEP"
                        @blur-event="isCepValid"
                    />
                </div>
                <div class="col-12 mb-3 mb-md-0 col-lg-6">
                    <InputText
                        v-model="personalData.cpf"
                        label="CPF:"
                        :minCaracteres="14"
                        v-mask="'###.###.###-##'"
                        placeholder="000.000.000-00"
                    />
                </div>
                <div class="col-12 col-lg-6">
                    <InputText
                        v-model="personalData.dateBirth"
                        v-mask="'##/##/####'"
                        required
                        label="Data de nascimento:"
                        placeholder="__/__/____"
                    />
                </div>
            </div>
        </form>
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
    </div>
</template>

<script setup lang="ts">
import InputText from "@/components/Input/InputText.vue";
import {useCheckoutStore} from "@/stores/CheckoutStore.ts";
import {reactive, ref} from "vue";
import {minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import CepHttp from "@/service/CepHttp.ts";

const emits = defineEmits(
    ['click-event', 'click-return']
)

const checkoutStore = useCheckoutStore()

let validCep = ref(checkoutStore.payloadData.cep ? 'VÁLIDO' : "INVÁLIDO")

const personalData = reactive({
    cep: checkoutStore.payloadData.cep,
    cpf: checkoutStore.payloadData.cpf,
    dateBirth: checkoutStore.payloadData.dateBirth
})


const rules = {
    cep: {required ,minLength: minLength(9)},
    cpf: {required ,minLength: minLength(14)},
    dateBirth: {required ,minLength: minLength(10)}
}

const v$ = useVuelidate(rules, personalData)

function handleClickReturn() {
    emits('click-return', 1)
}

async function isCepValid(cep: string) {
    validCep.value = 'INVÁLIDO'
    const response = await CepHttp.checkCep(cep)
    if(response?.data.erro){
        validCep.value = 'INVÁLIDO'
    }else {
        validCep.value = 'VÁLIDO'
    }
}

async function handleClick() {
    const valid = await v$.value.$validate()
    if (valid && validCep.value === 'VÁLIDO'){
        emits('click-event', 3, personalData)
    }
}

</script>

<style scoped lang="scss">
.font-cep-valid {
    font-size: 12px;
    color: $primary-color;
    font-style: italic;
}
.invalid-cep {
    color: red;
}

.title {
    color: #404040;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155.99%; /* 31.198px */
    letter-spacing: -0.6px;
}
</style>