<template>
    <CoursesOverviewPartials />
    <FormPartials />
    <ContentAboutUsPartials class="mt-5" />
</template>
<script setup lang="ts">
import CoursesOverviewPartials from "@/views/Home/Partials/CoursesOverviewPartials.vue";
import FormPartials from "@/views/Home/Partials/FormPartials.vue";
import ContentAboutUsPartials from "@/views/Home/Partials/ContentAboutUsPartials.vue";
import {onMounted} from "vue";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";

const courseDataStore = useCourseDataStore()

onMounted(() => {
    courseDataStore.overviewDataCourse.installmentChoose.name = 1
})
</script>
