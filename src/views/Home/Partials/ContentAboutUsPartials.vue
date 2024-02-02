<template>
    <div class="content">
        <div class="row container-fluid">
            <div class="container-fluid col-12 col-lg-5 col-xl-4">
                <span class="content__font-title">Descontos em cursos de graduação: </span>
                <p class="font-desc">Modalidade: EAD </p>
                <CardPromotion
                    :content="discountGraduation"
                    width="11rem"
                />
            </div>
            <div class="my-5 my-lg-0 container-fluid col-12 col-lg-5 col-xl-4">
                <span class="content__font-title">Descontos em cursos de pós-graduação: </span>
                <p class="font-desc">Modalidade: EAD </p>
                <CardPromotion
                    :content="discountGraduation"
                    width="11rem"
                />
            </div>
            <div class="row-cols-2 d-grid mb-5 container-fluid gap-3">
                <div class="col-12 text-center">
                    <span class="content__title-about-us">Como funciona</span>
                </div>
                <div class="col-12 d-flex flex-column justify-content-md-center flex-md-row gap-3 content__modalities">
                    <div class="d-flex flex-md-column align-items-center gap-2">
                        <SearchIcon />
                        <span>Busque a modalidade</span>
                    </div>
                    <div class="d-flex flex-md-column  align-items-center gap-2">
                        <FilterIcon />
                        <span>Filtre o curso</span>
                    </div>
                    <div class="d-flex flex-md-column  align-items-center gap-2">
                        <RegisterIcon />
                        <span>Realize seu cadastro</span>
                    </div>
                    <div class="d-flex flex-md-column  align-items-center gap-2">
                        <RegistrationIcon />
                        <span>Conclua sua matrícula</span>
                    </div>
                    <div class="d-flex flex-md-column  align-items-center gap-2">
                        <StudiesIcon />
                        <span>Inicie seus estudos</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content__more-about-us">
            <div class="container-fluid py-4 d-flex flex-column gap-4">
                <div class="content__title-more-about-us d-flex">
                    Sobre nós
                </div>
                <span v-html="aboutUs" class="content__desc-more-about-us" />
                <div class="d-md-flex justify-content-md-center">
                    <img :src="imageAboutUs" class="content__img" alt="Sobre nós">
                </div>
            </div>
        </div>
        <div class="pt-4 text-center">
            <span class="content__title-testemonial">DEPOIMENTOS DOS ALUNOS</span>
            <CardTestimonials :content="userTestemonial" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardPromotion from "@/components/CardPromotion.vue";
import {ref, Ref} from "vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";
import {FilterIcon, RegisterIcon, RegistrationIcon, StudiesIcon, SearchIcon} from "@/assets/icons";
import imageAboutUs from"@/assets/images/secctionAboutUs/imageContentAboutUs.png"
import CardTestimonials from "@/components/CardTestimonials.vue";
import imageTestemonial from "@/assets/images/cardAaboutUs/userTestemonial.png"
import {CardTestemonial} from "@/model/Interfaces/CardTestemonial.ts";

const discountGraduation: Ref<Array<CardOverview>> = ref([
    {
        id: 1,
        title:"Direito",
        descOpt: "Desconto de ",
        discount: "20%",
        desc: "A partir de ",
        price: "R$ 490,00"
    },
    {
        id: 2,
        title:"História",
        descOpt: "Desconto de ",
        discount: "80%",
        desc: "A partir de ",
        price: "R$ 120,00"
    },
    {
        id: 3,
        title:"Direito",
        descOpt: "Desconto de ",
        discount: "20%",
        desc: "A partir de ",
        price: "R$ 490,00"
    },
    {
        id: 4,
        title:"História",
        descOpt: "Desconto de ",
        discount: "80%",
        desc: "A partir de ",
        price: "R$ 120,00"
    }
])
const aboutUs: string = "Explore o vasto universo educacional oferecido pela plataforma que se destaca ao disponibilizar uma ampla gama de cursos para todos os perfis de aprendizes. Desde cursos de graduação e pós-graduação até opções flexíveis como cursos livres, preparatórios e técnicos. </br></br> Desfrute dos melhores descontos e escolha entre a conveniência do ensino a distância (EAD) ou a experiência presencial. "
const userTestemonial: Ref<Array<CardTestemonial>> = ref([
    {
        id: 1,
        src: imageTestemonial,
        name: "Maria Conceição",
        rating: 5,
        title: "Serviço impecável ",
        desc: "Minha experiência superou todas as expectativas. Cursos de alta qualidade e atendimento excepcional. "
    },
    {
        id: 2,
        src: imageTestemonial,
        name: "Maria Conceição",
        rating: 5,
        title: "Serviço impecável ",
        desc: "Minha experiência superou todas as expectativas. Cursos de alta qualidade e atendimento excepcional. "
    },
    {
        id: 3,
        src: imageTestemonial,
        name: "Maria Conceição",
        rating: 5,
        title: "Serviço impecável ",
        desc: "Minha experiência superou todas as expectativas. Cursos de alta qualidade e atendimento excepcional. "
    },
])

</script>


<style scoped lang="scss">
.content {
    &__font-title {
        color: $primary-color;
    }
    &__font-desc {
        font-size: 14px;
    }
    &__title-about-us {
        font-size: 20px;
        font-weight: bolder;
        color: $primary-color;
    }
    &__modalities {
        font-size: 16px;
    }
    &__more-about-us {
        background-color: $primary-color;
    }
    &__title-more-about-us {
        color: #FFF;
        text-align: justify;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
    }
    &__desc-more-about-us {
        color: #FFF;
        text-align: justify;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
    &__img {
        max-width: 400px;
    }

    &__title-testemonial {
        color: $primary-color;
        text-align: justify;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
    }
}

@media (max-width: 1024px) {
    .content {

        &__modalities {
            font-size: 14px;
        }
    }
}
</style>