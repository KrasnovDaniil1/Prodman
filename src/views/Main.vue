<script>
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";

import Form from "../components/Form.vue";

export default {
    components: {
        About,
        Skills,
        Form,
    },
    setup() {},
};
</script>

<template>
    <section>
        <About />
        <Skills />
        <Form />
    </section>
</template>

<style lang="scss" scoped></style>
