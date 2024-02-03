<template>
    <div class="container">
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
            <ThirdStepPartials @click-event="nextSteps" @click-return="backSteps" v-if="stepSelected === 3"/>
        </div>
    </div>
</template>

<script setup lang="ts">

import {onUnmounted, Ref, ref} from "vue";
import {Steps} from "@/model/Interfaces/Steps.ts";
import CourseDescriptionPartials from "@/views/Checkout/Partials/CourseDescriptionPartials.vue";
import FirstStepPartials from "@/views/Checkout/Partials/FirstStepPartials.vue";
import SecondStepPartials from "@/views/Checkout/Partials/SecondStepPartials.vue";
import ThirdStepPartials from "@/views/Checkout/Partials/ThirdStepPartials.vue";

const stepSelected = ref(0)
const resetStep = 0
const stepsItems: Ref<Array<Steps>> = ref([
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

function nextSteps(step: number) {
    stepSelected.value = step
}

function backSteps(step: number) {
    console.log(step)
    stepSelected.value = step
}

onUnmounted(() => {
    stepSelected.value = resetStep
})
</script>

<style scoped lang="scss">
.steps {
    cursor: pointer;
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
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
}

.step-selected {
    background-color: $primary-color;
    &__number-selected {
        color: #FFF;
    }
}
</style>