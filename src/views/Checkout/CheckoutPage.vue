<template>
    <div class="container">
        <div
            class="d-flex flex-column flex-md-row align-items-md-start align-items-center
             gap-2 d-md-flex justify-content-md-around mb-5 my-md-3">
            <div :class="{'d-none':stepSelected === 0}">
                <CardList
                    @click="() => stepSelected = 0"
                    class="cursor-pointer"
                    title="Resumo da compra"
                    :content="resumeOrderContent"
                />
            </div>
            <div
                @click="() => stepSelected = 1"
                v-if="checkoutStore.payloadData.name"
                :class="{
                    'd-none':stepSelected === 0,
                    'display-ocult': moreLessText === 'Mais',
                }"
            >
                <div>
                    <CardList
                        class="cursor-pointer"
                        title="Primeira etapa "
                        :content="firstStepOrderContent"
                    />
                </div>
            </div>
            <div
                @click="() => stepSelected = 2"
                v-if="checkoutStore.payloadData.cep"
                :class="{
                    'd-none':stepSelected === 0,
                    'display-ocult': moreLessText === 'Mais'
                }"
            >
                <div>
                    <CardList
                        class="cursor-pointer"
                        title="Segunda etapa"
                        :content="secondStepOrderContent"
                    />
                </div>
            </div>
            <div class="d-flex d-md-none" :class="{'d-none':stepSelected === 0}">
                <button @click="showDetails()" type="button" class="btn btn-outline-success">{{ moreLessText }} detalhes</button>
            </div>
        </div>
        <div v-if="stepSelected !== 0" class="d-flex justify-content-center gap-3 gap-md-4 gap-lg-5">
            <div
                v-for="stepValue in stepsItems"
                :key="stepValue.id"
                class="steps mb-4"
                :class="{
                    'step-selected' : stepValue.id === stepSelected,

                }"
            >
                <span
                    class="steps__number"
                    :class="{'step-selected__number-selected': stepValue.id === stepSelected}"
                >
                    {{ stepValue.step }}
                </span>
            </div>
        </div>

        <div class="md-card">
            <CourseDescriptionPartials @click-event="nextSteps"  v-if="stepSelected === 0"/>
            <FirstStepPartials @click-event="nextSteps" @click-return="backSteps" v-if="stepSelected === 1" />
            <SecondStepPartials @click-event="nextSteps" @click-return="backSteps" v-if="stepSelected === 2" />
            <ThirdStepPartials @click-event="confirmRegistration" @click-return="backSteps" v-if="stepSelected === 3"/>
        </div>
    </div>
</template>

<script setup lang="ts">

import {computed, onMounted, onUnmounted, Ref, ref} from "vue";
import {ISteps} from "@/model/Interfaces/ISteps.ts";
import CourseDescriptionPartials from "@/views/Checkout/Partials/CourseDescriptionPartials.vue";
import FirstStepPartials from "@/views/Checkout/Partials/FirstStepPartials.vue";
import SecondStepPartials from "@/views/Checkout/Partials/SecondStepPartials.vue";
import ThirdStepPartials from "@/views/Checkout/Partials/ThirdStepPartials.vue";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";
import {useCheckoutStore} from "@/stores/CheckoutStore.ts";
import router from "@/router";
import CardList from "@/components/Card/CardList.vue";
import {useGlobalStore} from "@/stores/GlobalStore.ts";
import {userAuthStore} from "@/stores/AuthStore.ts";
import {IPayload} from "@/model/Interfaces/IPayload.ts";
import {useRegistrationStore} from "@/stores/Registration.ts";
import {FormatParser} from "@/helper/FormatParser.ts";

const registrationStore = useRegistrationStore()
const authStore = userAuthStore()
const globalStore = useGlobalStore()
const checkoutStore = useCheckoutStore()
const courseDataStore = useCourseDataStore()
const stepSelected = ref(0)
const resetStep = 0
const stepsItems: Ref<Array<ISteps>> = ref([
    {
        id: 1,
        step: 1
    },
    {
        id: 2,
        step: 2
    },
    {
        id: 3,
        step: 3
    }
])
let moreLessText: Ref<string> = ref('Mais')

const resumeOrderContent = computed(() => {
    const priceDiscounted = globalStore.discountPrice(courseDataStore.overviewDataCourse.price, courseDataStore.overviewDataCourse.discount)
    const installmentsText = `${courseDataStore.overviewDataCourse.installmentChoose.name}x`
    return [
        {
            text: 'Curso',
            desc: courseDataStore.overviewDataCourse.name
        },
        {
            text: 'Modalidade',
            desc: courseDataStore.overviewDataCourse.typeModality
        },
        {
            text: 'Tipo de graduação',
            desc: courseDataStore.overviewDataCourse.typeGraduation
        },
        {
            text: 'Número de parcelas',
            desc: installmentsText
        },
        {
            text: 'Valor',
            desc: globalStore.formatCurrency(priceDiscounted)
        }
    ]
})
const firstStepOrderContent = computed(() => {
        return [
            {
                text: 'Nome',
                desc: checkoutStore.payloadData.name
            },
            {
                text: 'E-mail',
                desc: checkoutStore.payloadData.email
            },
            {
                text: 'Telefone',
                desc: checkoutStore.payloadData.phone
            }
        ]
})
const secondStepOrderContent = computed(() => {
    return [
        {
            text: 'CEP',
            desc: checkoutStore.payloadData.cep
        },
        {
            text: 'CPF',
            desc: checkoutStore.payloadData.cpf
        },
        {
            text: 'Data de Nascimento',
            desc: checkoutStore.payloadData.dateBirth
        }
    ]
})

onMounted(() => {
    window.scrollTo({top: 0})

    if (!courseDataStore?.overviewDataCourse?.id) {
        router.push({name: 'home'})
    }
})

function showDetails() {
    moreLessText.value = moreLessText.value === 'Mais' ? 'Menos' : 'Mais'
}

function nextSteps(step: number, item: object) {
    checkoutStore.payloadData = {...checkoutStore.payloadData, ...item}
    stepSelected.value = step
}

function backSteps(step: number) {
    stepSelected.value = step
}

async function confirmRegistration(file: any) {
    const payload = mountPayload()
    const test = await registrationStore.registrationStudant(file, payload)
    console.log(test)
}

function mountPayload() {
    const item: IPayload = {} as IPayload

    item.courseId = parseInt(courseDataStore.overviewDataCourse.id)
    item.name = checkoutStore.payloadData.name
    item.email = checkoutStore.payloadData.email
    item.phone = checkoutStore.payloadData.phone
    item.cep = checkoutStore.payloadData.cep
    item.cpf = checkoutStore.payloadData.cpf
    item.dateBirth = FormatParser.parsePtBrDateToIsoDate(checkoutStore.payloadData.dateBirth)

    return item
}

onUnmounted(() => {
    stepSelected.value = resetStep
})
</script>

<style scoped lang="scss">
.steps {
    border-radius: 65px;
    background: #CCC;
    display: flex;
    width: 60px;
    height: 60px;
    padding: 26px;
    align-items: center;
    gap: 6.5px;
    &__number {
        position: absolute;
        color: #808080;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
}

.cursor-pointer{
    cursor: pointer;
}

.animated-container {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
    max-height: 500px;
}

@media (max-width: 578px) {
    .display-ocult {
        display: none !important;
    }
}

.step-selected {
    background-color: $primary-color;
    &__number-selected {
        color: #FFF;
    }
}
</style>