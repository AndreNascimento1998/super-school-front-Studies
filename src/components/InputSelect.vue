<template>
    <div>
        <span style="font-weight: bold">{{ props.label }}:</span>
        <select v-model="value" @change="changeSelect" class="form-select border-success" aria-label="Default select example">
            <option
                v-for="item in props.items"
                :key="item.value"
                :value="item"
            >
                {{ item.text }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const emits = defineEmits(
    ['update:modelValue']
)
const value = ref(null)

const props = defineProps({
    items: {
        type: Array<any>,
        default: [],
        required: true
    },
    label: {
        type: String,
        default: '',
        required: true
    }
})

function changeSelect() {
    emits('update:modelValue', value.value)
}
</script>