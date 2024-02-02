<template>
    <nav class="navbar py-4 px-2">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="#">
                    <Logo />
                </a>
            </div>
            <div class="d-flex gap-2">
                <div>
                    <button type="button" class="btn btn-outline-success">Entrar</button>
                </div>
                <div>
                    <button type="button" class="btn btn-success">Cadastrar-se</button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { Logo } from '@/assets/icons'

</script>