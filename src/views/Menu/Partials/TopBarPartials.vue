<template>
    <nav class="navbar py-4 top-bar-container">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="#">
                    <LogoIcon />
                </a>
            </div>
            <div class="d-flex gap-2">
                <div v-if="!userLogged.logged">
                    <button @click="singIn()" type="button" class="btn btn-outline-success">Entrar</button>
                </div>
                <div v-if="userLogged.logged">
                    <span
                        style="font-size: 18px;
                        font-weight: bolder;
                        font-style: italic"
                    >
                        {{ userLogged.name }}
                        {{ userLogged.lastName }}
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { LogoIcon } from '@/assets/icons'
import {userAuthStore} from "@/stores/authStore.ts";
import {computed, ComputedRef} from "vue";
import {User} from "@/model/Interfaces/User.ts";

const authStore = userAuthStore()

const userLogged: ComputedRef<User> = computed(() => authStore.user)

function singIn() {
    authStore.authStore()
}
</script>

<style scoped lang="scss">

.top-bar-container {
    background-color: $background-top-bar;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
