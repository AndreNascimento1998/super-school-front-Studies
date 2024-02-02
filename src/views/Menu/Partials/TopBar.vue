<template>
    <nav class="navbar py-4">
        <div class="container-fluid">
            <div>
                <a class="navbar-brand" href="#">
                    <LogoIcon />
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
import { LogoIcon } from '@/assets/icons'

</script>