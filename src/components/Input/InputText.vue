<template>
    <div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">{{ props.label }}</span>
            </div>
            <input v-model="value" @input="handleInput" type="text" class="form-control" :placeholder="props.placeholder"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        </div>
    </div>
</template>
<script setup lang="ts">

import {ref, watch} from "vue";

const emits = defineEmits(
    ['update:modelValue']
)

const props = defineProps({
    label: {
        type: String,
        default: "",
        required: true
    },
    placeholder: {
        type: String,
        default: "",
        required: false
    },
    modelValue: {
        type: String,
        default: ""
    }
})

const value = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
    value.value = newValue;
});

function handleInput() {
    emits('update:modelValue', value.value)
}
</script>