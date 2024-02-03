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

import {ref} from "vue";

const emits = defineEmits(
    ['update:modelValue']
)

const value = ref('')

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
    }
})

function handleInput() {
    emits('update:modelValue', value.value)
}
</script>