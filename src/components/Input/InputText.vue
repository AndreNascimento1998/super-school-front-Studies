<template>
    <div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">{{ props.label }}</span>
            </div>
            <input
                v-model="value"
                @input="handleInput"
                :class="{ 'is-invalid': isInvalid }"
                type="text"
                class="form-control"
                :placeholder="props.placeholder"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                @blur="handleBlur"
            />
            <div v-if="isInvalid" class="invalid-feedback position-absolute error ">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, watch, computed} from 'vue';

const emits = defineEmits(['update:modelValue', 'blur-event']);

const props = defineProps({
    label: {
        type: String,
        default: '',
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
        required: false,
    },
    modelValue: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
        required: false
    },
    minCaracteres: {
        type: Number,
        default: 0,
        required: false
    },
});

const value = ref(props.modelValue);
const isInvalid = ref(false);

watch(
    () => props.modelValue,
    (newValue) => {
        value.value = newValue;
        validate();
    }
);

function handleBlur() {
    emits('blur-event', value.value);
}

function handleInput() {
    validate();
    emits('update:modelValue', value.value);
}

function validate() {
    if (props.required) {
        isInvalid.value = value.value.trim() === '';
    } else if (props.minCaracteres > 0) {
        isInvalid.value = value.value.length < props.minCaracteres;
    } else {
        isInvalid.value = false;
    }
}

const errorMessage = computed(() => {
    if (props.required && isInvalid.value) {
        return 'Campo obrigatório.';
    } else if (props.minCaracteres > 0 && isInvalid.value) {
        return `Mínimo de ${props.minCaracteres} caracteres.`;
    } else {
        return '';
    }
});
</script>

<style scoped lang="scss">
.error {
    top: 36px;
}

.is-invalid {
    border-color: #dc3545 !important;
}
.invalid-feedback {
    color: #dc3545;
}
</style>
