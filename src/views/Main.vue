<script>
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";

export default {
    components: {
        About,
        Skills,
    },
    setup() {},
};
</script>

<template>
    <section><About /><Skills v-if="false" /></section>
</template>

<style lang="scss" scoped></style>
