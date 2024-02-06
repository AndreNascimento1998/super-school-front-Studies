<template>
    <div class="mb-5">
        <div class="d-flex flex-column gap-4">
            <div class="title">
                Analise sua escolha e prossiga para próximas etapas de pagamento
            </div>
            <div class="d-flex flex-column gap-4">
                <div class="d-flex flex-column gap-2">
                    <span class="matter-title"> {{ courseDataStore.overviewDataCourse.name }}</span>
                    <div>
                        <span class="content-title">{{ courseDataStore.overviewDataCourse.typeModality }}- </span><span class="text-description">{{ courseDataStore.overviewDataCourse.period }}</span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2">
                    <div>
                        <span class="content-title">Tipo de graduação: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.typeGraduation }}</span>
                    </div>
                    <div>
                        <span class="content-title">Turno: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.turn }}</span>
                    </div>
                </div>
            </div>
            <div v-if="courseDataStore.overviewDataCourse.maxInstallments != 1" class="d-flex justify-content-end">
                <InputSelect v-model="courseDataStore.overviewDataCourse.installmentChoose" label="Parcelas" installments :items="installmets" />
            </div>
            <LineSeparator class="d-flex d-md-none" />
            <div>
                <div class="d-flex justify-content-between">
                    <span class="content-title">Número máximo de parcelas: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.maxInstallments }}x</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="content-title">Em {{ courseDataStore.overviewDataCourse.installmentChoose.name }}x</span><span class="content-description">{{ globalStore.formatCurrency(priceDiscount / courseDataStore.overviewDataCourse.installmentChoose.name) }}</span>
                </div>
                <div v-if="courseDataStore.overviewDataCourse.discount" class="d-flex justify-content-between">
                    <span class="content-title">Desconto: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.discount }}%</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="content-title">Você pagará mensalmente:  </span>
                    <span class="content-description text-end">
                        <span
                            v-if="courseDataStore.overviewDataCourse.discount"
                            class="value-discount"
                        >
                            {{globalStore.formatCurrency(courseDataStore.overviewDataCourse.price)}}
                        </span>
                        por {{ globalStore.formatCurrency(priceDiscount) }}
                    </span>
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
        </div>
    </div>
</template>

<script setup lang="ts">
import LineSeparator from "@/assets/icons/lineSeparator.vue";
import LineDesktop from "@/assets/icons/lineDesktop.vue";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";
import {computed, onMounted} from "vue";
import {useGlobalStore} from "@/stores/GlobalStore.ts";
import router from "@/router";
import InputSelect from "@/components/Input/InputSelect.vue";

const courseDataStore = useCourseDataStore()
const globalStore = useGlobalStore()

const emits = defineEmits(
    ['click-event']
)

const priceDiscount = computed(() => {
    if (courseDataStore.overviewDataCourse.discount){
        return  globalStore.discountPrice(courseDataStore.overviewDataCourse.price, courseDataStore.overviewDataCourse.discount)
    }
    return courseDataStore.overviewDataCourse.price
})

const installmets = computed(() => {
    const installmentArray = []
    for (let c = 0; c < courseDataStore.overviewDataCourse.maxInstallments; c++){
         let installment = { name: c + 1 };
         installmentArray.push(installment)
    }

    return installmentArray
})

function handleClickReturn() {
    router.push({name: 'home'})
}

function handleClick() {
    emits('click-event', 1)
}
</script>

<style scoped lang="scss">
.title {
    color:  #404040;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
}

.matter-title {
    color:#404040;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
}

.content-title {
    color:#404040;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
}

.content-description {
    color: #404040;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}

.text-description {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
}

.value-discount {
    font-style: italic;
    font-weight: bold;
    text-decoration: line-through;
}
</style>