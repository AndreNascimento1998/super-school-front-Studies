<template>
    <div class="content">
        <div class="content__title">
            <span>Matrícula concluída</span>
            <p class="text-center">com Sucesso</p>
        </div>
        <div class="description d-flex flex-column gap-5">
            <div class="d-grid offset-1 offset-md-0 col-10 col-md-6 align-self-md-center">
                <button @click="returnPage" class="btn btn-success" type="button">
                    Retornar à página inicial
                </button>
            </div>
            <div class="d-flex text-center ">
                <span class="content__description__letter-description">Acesse o portal do estudante seguindo as instruções enviadas para o seu e-mail.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import router from "@/router";

const returnPage = () => {
    router.push({name: 'home'}).then(() => {
        window.location.reload()
    })
}
</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: $primary-color;

    &__title {
        font-size: 34px;
        color: white;
    }

    &__description {

        &__letter-description {
            color: white;
        }
    }
}
</style>