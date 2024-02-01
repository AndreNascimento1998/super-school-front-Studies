<template>
    <nav class="navbar sticky-top py-4 px-2">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="#">
                    <Logo />
                </a>
            </div>
            <div>
                <button type="button" class="btn btn-outline-success">Entrar</button>
            </div>
        </div>
    </nav>
    <router-view />
</template>
<script setup lang="ts">
import { Logo } from '@/assets/icons'

</script>