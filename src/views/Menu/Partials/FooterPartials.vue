<template>
    <div class="container">
        <div class="d-flex flex-column align-items-center gap-3">
            <div class="d-flex flex-column gap-1">
                <div class="text-center title-courses">Melhores cursos</div>
                <div class="d-flex gap-2 align-items-center">
                    <BrazilFlag />
                    <span class="language-desc justify-content-center">Português do Brasil</span>
                </div>
            </div>
            <div class="d-flex gap-3">
                <InstagramIcon />
                <FacebookIcon />
                <YoutubeIcon />
                <LinkedinIcon />
            </div>
            <LineSeparatorIcon class="d-block d-lg-none" />
            <LineDesktopIcon class="d-none d-lg-block" />
        </div>
        <div class="row">
            <div class="d-flex col-12 col-md-6 flex-column align-items-center gap-2 mt-3 mt-md-2 content-default">
                <span class="content-title">Plataforma</span>
                <span>Sobre</span>
                <span>Cursos</span>
                <span>Marca</span>
                <span>Sala de imprensa</span>
            </div>
            <div class="d-flex flex-column col-12 col-md-6  align-items-center gap-2 mt-4 mt-md-2">
                <span class="content-title">Política de privacidade</span>
                <span>Termos</span>
                <span>Privacidade</span>
                <span>Cookies </span>
                <span>Moderação</span>
            </div>
        </div>
    </div>
    <div class="text-center py-4">Copyright © 2006 - 2024</div>
</template>

<script setup lang="ts">
import {BrazilFlag, FacebookIcon, YoutubeIcon, LinkedinIcon, InstagramIcon, LineSeparatorIcon, LineDesktopIcon} from "@/assets/icons";
</script>

<style scoped lang="scss">
.title-courses {
    color: $primary-color;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
}

.language-desc {
    text-align: justify;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
}

.content-title {
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
}

.content-default {
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}
</style>