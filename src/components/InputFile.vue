<template>
    <div class="d-flex flex-column align-items-center">
        <div>
            {{ props.title }}
        </div>
        <div>
            <OpenFileIcon class="cursor-pointer" @click="openFileInput" />
        </div>
        <div>
            {{ selectedFileName }}
        </div>

        <form>
            <div class="input-group mb-3" style="display: none;">
                <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile" @change="handleFileChange">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {OpenFileIcon} from "@/assets/icons";

const emtis = defineEmits(
    ['file-changed']
)

const selectedFile = ref(null)
const selectedFileName = ref('Click no ícone para enviar seu documento')

const props = defineProps({
    title: {
        type: String,
        default: '',
        required: true
    }
})

function openFileInput() {
    const fileInput = document.getElementById('inputGroupFile');
    if (fileInput) {
        fileInput.click();
    }
}

function handleFileChange(event: File) {
    selectedFile.value = event.target.files[0]
    selectedFileName.value = selectedFile.value?.name || 'Click no ícone para enviar seu documento'
    emtis('file-changed', selectedFile.value)
}
</script>

<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer;
}
</style>