<script>
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";

import Form from "../components/Form.js";
import Team from "../components/Team.vue";
import Technical from "../components/Technical.vue";

export default {
    components: {
        About,
        Skills,
        Form,
        Team,
        Technical,
    },
    setup() {},
};
</script>

<template>
    <section>
        <About />
        <Skills />
        <Team />
        <Technical />
        <Form class="form p-1" />
    </section>
</template>

<style lang="scss">
section {
    .form {
        display: flex;
        justify-content: center;
    }
}
</style>
