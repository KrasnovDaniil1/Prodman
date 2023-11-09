<script>
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";

import Form from "../components/Form.js";
import Team from "../components/Team.vue";
import Technical from "../components/Technical.vue";
import Feedback from "../components/Feedback.vue";

export default {
    components: {
        About,
        Skills,
        Form,
        Team,
        Technical,
        Feedback,
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
        <Feedback />
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
