<script>
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Products from "../components/Products.vue";

import Form from "../components/Form.vue";

export default {
    components: {
        About,
        Skills,
        Form,
        Products,
    },
    setup() {},
};
</script>

<template>
    <section>
        <About />
        <Skills />
        <Products />
        <Form v-if="false" />
    </section>
</template>

<style lang="scss" scoped></style>
