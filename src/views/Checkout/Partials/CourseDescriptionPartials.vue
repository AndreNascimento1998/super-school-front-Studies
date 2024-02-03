<template>
    <div class="mb-5">
        <div class="d-flex flex-column gap-4">
            <div class="title">
                Analise sua escolha e prossiga para próximas etapas de pagamento
            </div>
            <div class="d-flex flex-column gap-4">
                <div class="d-flex flex-column gap-2">
                    <span class="matter-title">História</span>
                    <div>
                        <span class="content-title">EAD- </span><span class="text-description">4 anos (8 períodos)</span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2">
                    <div>
                        <span class="content-title">Turno: </span><span class="content-description">Livre</span>
                    </div>
                    <div>
                        <span class="content-title">Período: </span><span class="content-description">1° Sem/2024</span>
                    </div>
                    <div>
                        <span class="content-title">Modalidade: </span><span class="content-description">Online</span>
                    </div>
                </div>
            </div>
            <LineSeparator class="d-flex d-md-none" />
            <div>
                <div class="d-flex justify-content-between">
                    <span class="content-title">Número máximo de parcelas: </span><span class="content-description">60x</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div class="d-flex justify-content-between">
                    <span class="content-title">Mensalidade </span><span class="content-description">R$ 637,00</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div class="d-flex justify-content-between">
                    <span class="content-title">Desconto: </span><span class="content-description">80%</span>
                </div>
                <LineDesktop class="d-none d-md-flex" />
                <div class="d-flex justify-content-between">
                    <span class="content-title">Você pagará mensalmente:  </span><span class="content-description">R$ 127,40</span>
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