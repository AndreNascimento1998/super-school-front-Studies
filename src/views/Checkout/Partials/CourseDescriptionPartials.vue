<template>
    <div class="mb-5">
        <div class="d-flex flex-column gap-4">
            <div class="title">
                Analise sua escolha e prossiga para próximas etapas de pagamento
            </div>
            <div class="d-flex flex-column gap-4">
                <div class="d-flex flex-column gap-2">
                    <span class="matter-title">{{ courseDataStore.overviewDataCourse.title }}</span>
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
            <LineSeparator class="d-flex d-md-none" />
            <div>
                <div class="d-flex justify-content-between">
                    <span class="content-title">Número máximo de parcelas: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.maxInstallments }}x</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div v-if="courseDataStore.overviewDataCourse.maxInstallments" class="d-flex justify-content-between">
                    <span class="content-title">Em {{ courseDataStore.overviewDataCourse.maxInstallments }}x</span><span class="content-description">R$ {{ courseDataStore.overviewDataCourse.price / courseDataStore.overviewDataCourse.maxInstallments }}</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div class="d-flex justify-content-between">
                    <span class="content-title">Desconto: </span><span class="content-description">{{ courseDataStore.overviewDataCourse.discount }}%</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div class="d-flex justify-content-between">
                    <span class="content-title">Você pagará mensalmente:  </span><span class="content-description">R$ {{ courseDataStore.overviewDataCourse.price }}</span>
                </div>
            </div>
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button @click="handleClick" class="btn btn-success" type="button">
                    Avançar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LineSeparator from "@/assets/icons/lineSeparator.vue";
import LineDesktop from "@/assets/icons/lineDesktop.vue";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";

const courseDataStore = useCourseDataStore()

const emits = defineEmits(
    ['click-event']
)

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
</style>