<template>
    <div>
        <span style="font-weight: bold">{{ props.label }}:</span>
        <select
            v-model="value" @change="changeSelect"
            class="form-select border-success"
            :disabled="disabled"
            aria-label="Default select example"
        >
            <option
                v-for="item in props.items"
                :key="item.value"
                :value="item"
            >
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const emits = defineEmits(
    ['update:modelValue']
)

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
    },
    modelValue: {
        type: Object,
        default: {}
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    }
})

const value = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
    value.value = newValue;
});

function changeSelect() {
    emits('update:modelValue', value.value)
}
</script>